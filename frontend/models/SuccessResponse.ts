export interface SuccessResponse {
  data: {
    type: string;
    id: string;
    attributes: {
      title: string;
      description: string;
      questions: Array<{
        questionId: string;
        questionType: string;
        label: string;
        required: boolean;
        attributes: any;
      }>;
    }
  }
}
