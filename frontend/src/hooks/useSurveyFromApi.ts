import { useEffect } from 'react';
import {
  Api, ApiErrorsResponse, ApiGetResponse, Survey,
} from '../../models';

export function useSurveyFromApi({
  api, survey, errorResponse, setErrorResponse, setSurvey,
}: HookParameters) {
  useEffect(() => {
    if (survey == null && errorResponse == null) {
      const surveyStringResponse = api.get();
      const surveyResponse = JSON.parse(surveyStringResponse) as ApiGetResponse;
      setErrorResponse(surveyResponse?.data?.errors ? surveyResponse.data as ApiErrorsResponse : null);
      setSurvey(errorResponse ? null : surveyResponse.data as Survey);
    }
  }, [survey]);
}

interface HookParameters {
    api: Api;
    survey: Survey | null;
    errorResponse: ApiErrorsResponse | null;
    setErrorResponse: React.Dispatch<React.SetStateAction<ApiErrorsResponse | null>>;
    setSurvey: React.Dispatch<React.SetStateAction<Survey | null>>;
}
