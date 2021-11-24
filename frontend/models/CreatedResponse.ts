export interface CreatedResponse {
  data: {
    type: string;
    id: string;
    attributes: {
      answers: Array<{questionId: string, answer: string}>;
    };
    relationships: {
      survey: {
        data: {
          type: string;
          id: string;
        };
      };
    };
  };
}
