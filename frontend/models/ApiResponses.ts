import { Survey, SurveyAnswers } from '.';
import { ApiGenericError, ValidationError } from './ApiErrors';

export interface ApiErrorsResponse {
  errors?: Array<ApiGenericError & ValidationError>
}

export interface ApiSurveyAnswersResponse {
  data?: SurveyAnswers
}

export interface ApiGetResponse {
  data?: Survey | ApiErrorsResponse;
}

export type ApiPostResponse = ApiErrorsResponse & ApiSurveyAnswersResponse
