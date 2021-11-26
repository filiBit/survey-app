import { SurveyAnswers } from '.';

export type ApiPostRequest = {
  data: Omit<SurveyAnswers, 'id' | 'relationships'>
}
