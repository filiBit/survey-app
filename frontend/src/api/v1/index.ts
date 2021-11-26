import { Survey } from '../../../models';
import buildGetSurvey from './getSurvey';
import buildPostSurvey from './postSurvey';

export default function buildApiV1(surveys: Survey[]) {
  const getSurvey = buildGetSurvey(surveys);
  const postSurvey = buildPostSurvey(surveys);

  return {
    get: getSurvey,
    post: postSurvey,
  };
}
