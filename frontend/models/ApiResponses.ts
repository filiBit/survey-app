import { Survey, SurveyAnswers } from '.';
import { ApiGenericError, ApiValidationError } from './ApiErrors';

export interface ApiErrorsResponse {
      errors: ApiGenericError[] | ApiValidationError[]
    }

export interface ApiSurveyAnswersResponse {
      data: SurveyAnswers
    }

export interface ApiGetResponse {
      data: Survey | ApiErrorsResponse;
    }

export type ApiPostResponse = ApiErrorsResponse | ApiSurveyAnswersResponse

export type ApiResponse = ApiPostResponse | ApiGetResponse
