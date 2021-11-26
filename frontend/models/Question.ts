export interface Question {
  questionId: string;
  questionType: string;
  label: string;
  required: boolean;
  attributes: null | {
    min: number,
    max: number
  };
}
