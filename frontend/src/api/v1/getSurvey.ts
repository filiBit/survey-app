import { ApiGetResponse, Survey } from '../../../models';

export default function buildGetSurvey(surveys: Survey[]) {
  return function getSurvey(): ApiGetResponse {
    return { data: surveys[surveys.length - 1] };
  };
}
