import React, { useEffect, useState } from 'react';
import {
  Answer, ValidationError, Survey, ApiGetResponse, ApiErrorsResponse,
} from '../../models';
import api from '../api';
import BasicInput from '../components/BasicInput';
import validateAnswers from '../helpers/validateAnswers';
import { useAnswersInitialization, useSurveyFromApi, useValidationErrorsUpdate } from '../hooks';

const HomePage = function HomePage({ updateIsSubmitted }: {updateIsSubmitted: (value: boolean) => void}) {
  const [survey, setSurvey] = useState<Survey | null>(null);
  const [errorResponse, setErrorResponse] = useState<ApiErrorsResponse | null>(null);
  const [isFormTouched, setIsFormTouched] = useState<boolean>(false);

  useSurveyFromApi({
    api, survey, errorResponse, setErrorResponse, setSurvey,
  });

  const [answers, setAnswers] = useState<Answer[]>([]);

  const [validationErrors, setValidationErrors] = useState<ValidationError[]>([]);

  useAnswersInitialization({ setAnswers, survey });

  useValidationErrorsUpdate({
    validateAnswers, answers, questions: survey?.attributes?.questions, setValidationErrors,
  });

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
      <h1 className="text-center text-5xl mb-10">{survey?.attributes.title}</h1>
      <div className="text-2xl my-10" dangerouslySetInnerHTML={{ __html: survey?.attributes.description as string }} />
      {answers && survey?.attributes.questions.map((q) => (
        <BasicInput
          key={q.questionId}
          question={q}
          value={answers.find((a) => a.questionId == q.questionId)?.answer as string|number}
          updateValue={updateValue}
          validationErrors={validationErrors}
        />
      ))}
      <button
        disabled={survey == null || errorResponse != null}
        className="py-2 px-4 text-xl bg-blue-700 text-gray-50 rounded-md"
        type="button"
        onClick={submitForm}
      >
        Submit
      </button>
    </div>
  );
};

export default HomePage;
