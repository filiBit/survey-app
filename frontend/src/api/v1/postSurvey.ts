import {
  Answer,
  ApiErrorsResponse,
  ApiGenericError,
  ApiPostRequest,
  ApiPostResponse,
  ApiSurveyAnswersResponse,
  Survey,
  SurveyAnswers
} from '../../../models'
import makeValidationErrors from '../../helpers/validateAnswers'

export default function buildPostSurvey(surveys: Survey[]) {
  return function postSurvey(id: string, apiPostRequest: ApiPostRequest): ApiPostResponse {
    const survey = surveys.find((s) => s.id == id)
    const { answers } = apiPostRequest.data.attributes

    const isNoSurvey = survey == null
    if (isNoSurvey) {
      const genericError = makeGenericError('No survey with such Id')
      const response: ApiErrorsResponse = { errors: [genericError] }
      return response
    }

    const isTypeInvalid = apiPostRequest?.data?.type == null
    if (isTypeInvalid) {
      const genericError = makeGenericError('No such type')
      const response: ApiErrorsResponse = { errors: [genericError] }
      return response
    }

    const validationErrors = makeValidationErrors(answers, survey.attributes.questions)
    if (validationErrors.length) {
      const response = { errors: validationErrors }
      return response
    }

    const surveyAnswers = makeSurveyAnswers(survey, answers)
    const response: ApiSurveyAnswersResponse = { data: surveyAnswers }
    return response
  }
}

function makeSurveyAnswers(survey: Survey, answers: Answer[]): SurveyAnswers {
  return {
    type: 'surveyAnswers',
    id: Math.random().toString(16).slice(2),
    attributes: {
      answers
    },
    relationships: {
      survey: {
        data: {
          type: 'surveys',
          id: survey.id
        }
      }
    }
  }
}

function makeGenericError(title: string): ApiGenericError {
  return {
    title: title || 'Error',
    detail: 'detail'
  }
}
