import { useEffect } from 'react';
import { Answer, Question, ValidationError } from '../../models';

export function useValidationErrorsUpdate({
  validateAnswers,
  answers,
  questions,
  setValidationErrors,
}: HookParameters) {
  useEffect(() => {
    if (questions) {
      const newValidationErrors = validateAnswers(answers, questions);
      setValidationErrors(newValidationErrors);
    }
  }, [answers]);
}

interface HookParameters {
  validateAnswers: (answers: Answer[], questions: Question[]) => ValidationError[];
  answers: Answer[],
  questions?: Question[],
  setValidationErrors: React.Dispatch<React.SetStateAction<ValidationError[]>>
}
