export interface ApiSurveyAnswersRequest {
    data: Omit<SurveyAnswers, 'id' | 'relationships'>
  }

export type ApiPostRequest = ApiSurveyAnswersRequest
