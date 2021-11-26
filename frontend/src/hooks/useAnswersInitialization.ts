import { useEffect } from 'react';
import { Answer, Survey } from '../../models';

export function useAnswersInitialization({ setAnswers, survey }: HookParameters) {
  useEffect(() => {
    setAnswers(survey.attributes.questions.map((q) => ({
      questionId: q.questionId,
      answer: q.questionType == 'string' ? '' : 0,
    })));
  }, [survey.id]);
}

interface HookParameters {
    setAnswers: React.Dispatch<React.SetStateAction<Answer[]>>;
     survey: Survey;
}
