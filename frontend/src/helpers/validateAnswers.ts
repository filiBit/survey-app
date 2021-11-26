import { Answer, ApiValidationError, Question } from '../../models';

export default function makeValidationErrors(answers: Answer[], questions: Question[]): ApiValidationError[] {
  const errors: ApiValidationError[] = [];

  for (let i = 0; i < answers.length; i++) {
    const a = answers[i];
    const question = questions.find((q) => q.questionId == a.questionId) as Question;

    if (isViolatesRequired(question, a.answer)) {
      errors.push({
        source: { pointer: question.questionId },
        detail: 'The value is required',
      });
      continue;
    }

    if (isViolatesString(question, a.answer)) {
      errors.push({
        source: { pointer: question.questionId },
        detail: 'The value must be string',
      });
      continue;
    }

    if (isViolatesString(question, a.answer)) {
      errors.push({
        source: { pointer: question.questionId },
        detail: 'The value must be string',
      });
      continue;
    }

    if (question.questionType == 'integer') {
      if (isViolatesInteger(question, a.answer)) {
        errors.push({
          source: { pointer: question.questionId },
          detail: 'The value must be an integer',
        });
        continue;
      }
      if (isViolatesMinValue(question, a.answer as number)) {
        errors.push({
          source: { pointer: question.questionId },
          detail: `Minimum allowed value is ${question.attributes?.min}`,
        });
        continue;
      }
      if (isViolatesMaxValue(question, a.answer as number)) {
        errors.push({
          source: { pointer: question.questionId },
          detail: `Maximum allowed value is ${question.attributes?.max}`,
        });
        continue;
      }
    }
  }

  return errors;
}

function isViolatesRequired(question: Question, answer: unknown) {
  return question.required && (answer == null || answer == '');
}

function isViolatesString(question: Question, answer: unknown) {
  return (question.questionType == 'string' && typeof (answer) !== 'string');
}

function isViolatesInteger(question: Question, answer: unknown) {
  return (question.questionType == 'integer' && (typeof (answer) !== 'number' || Number.isInteger(answer)));
}

function isViolatesMinValue(question: Question, answer: number) {
  return question.attributes?.min != null && answer < question?.attributes.min;
}

function isViolatesMaxValue(question: Question, answer: number) {
  return question.attributes?.max != null && answer > question?.attributes.max;
}
