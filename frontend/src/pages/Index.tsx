import React, { useEffect, useState } from 'react';
import {
  Answer, ValidationError, Survey,
} from '../../models';
import BasicInput from '../components/BasicInput';
import validateAnswers from '../helpers/validateAnswers';

const HomePage = function HomePage({ updateIsSubmitted }: {updateIsSubmitted: (value: boolean) => void}) {
  const [survey, setSurvey] = useState<Survey>({
    id: 'asas',
    type: 'string',
    attributes: {
      title: 'Test Survey',
      description: 'This survey is just a test for now. This survey is just a test for now. This survey is just a test for now.',
      questions: [
        {
          questionId: '1',
          label: 'First Name',
          questionType: 'string',
          required: true,
          attributes: null,
        },
        {
          questionId: '2',
          label: 'Age',
          questionType: 'integer',
          required: true,
          attributes: {
            min: 1,
            max: 5,
          },
        },
      ],
    },
  });

  const [answers, setAnswers] = useState<Answer[]>([]);

  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([]);

  useEffect(() => {
    setAnswers(survey.attributes.questions.map((q) => ({
      questionId: q.questionId,
      answer: q.questionType == 'string' ? '' : 0,
    })));
  }, [survey.id]);

  useEffect(() => {
    const newValidationErrors = validateAnswers(answers, survey.attributes.questions);
    setValidationErrors(newValidationErrors);
  }, [answers]);

  const updateValue = (questionId: string, value: string | number) => {
    setAnswers(answers?.map((a) => {
      if (a.questionId == questionId) {
        a.answer = value;
      }
      return a;
    }));
  };

  const submitForm = () => {
    updateIsSubmitted(true);
  };

  return (
    <div className="w-full lg:max-w-3xl p-5 lg:p-10 mx-auto bg-white">
      <h1 className="text-center text-5xl mb-10">{survey.attributes.title}</h1>
      <p className="text-2xl my-10">{survey.attributes.description}</p>
      {answers && survey.attributes.questions.map((q) => (
        <BasicInput
          key={q.questionId}
          question={q}
          value={answers.find((a) => a.questionId == q.questionId)?.answer as string|number}
          updateValue={updateValue}
          validationErrors={validationErrors}
        />
      ))}
      <button className="py-2 px-4 text-xl bg-blue-700 text-gray-50 rounded-md" type="button" onClick={submitForm}>Submit</button>
    </div>
  );
};

export default HomePage;
