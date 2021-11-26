import { Answer, Relationships } from '.';

export interface SurveyAnswers {
    type: 'surveyAnswers';
    id: string;
    attributes: {
        answers: Answer[]
    };
    relationships: Relationships;
}
