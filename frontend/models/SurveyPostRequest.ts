export interface SurveyPostRequest {
  data: {
    type: string;
    attributes: {
      answers: Array<{questionId: string, answer: string|number}>;
    };
  };
}
