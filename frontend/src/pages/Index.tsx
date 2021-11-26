import React, { useState } from 'react';
import {
  Answer, ValidationError, Survey, ApiErrorsResponse, ApiPostResponse, ApiPostRequest,
} from '../../models';
import api from '../api';
import BasicInput from '../components/BasicInput';
import validateAnswers from '../helpers/validateAnswers';
import { useAnswersInitialization, useSurveyFromApi, useValidationErrorsUpdate } from '../hooks';

const HomePage = function HomePage({ updateIsSubmitted }: {updateIsSubmitted: (value: boolean) => void}) {
  const [survey, setSurvey] = useState<Survey | null>(null);
  const [errorResponse, setErrorResponse] = useState<ApiErrorsResponse | null>(null);
  const [formValidationErrorMessages, setFormValidationErrorMessages] = useState<ApiErrorsResponse>();

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
    const requestPayload: ApiPostRequest = {
      data: {
        type: 'surveyAnswers',
        attributes: {
          answers,
        },
      },
    };
    const responseString = api.post((survey as Survey).id, requestPayload);
    const response = JSON.parse(responseString) as ApiPostResponse;
    if (response.errors) setFormValidationErrorMessages(response);
    else updateIsSubmitted(true);
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
        className="block py-2 px-4 text-xl bg-blue-700 text-gray-50 rounded-md my-10"
        type="button"
        onClick={submitForm}
      >
        Submit
      </button>
      {formValidationErrorMessages
      && (
      <div className="my-10">
        {formValidationErrorMessages.errors?.map((fvem) => (
          <div key={fvem.detail} className="mt-2">
            <p className="text-red-600 text-xl">{fvem.title ? fvem.title : `Invalid answer on: ${fvem?.source?.pointer}`}</p>
            <p className="text-red-600 text-l">{fvem.detail}</p>
          </div>
        ))}
        <p />
      </div>
      )}
    </div>
  );
};

export default HomePage;
