import { ApiPostRequest } from '.';

export interface Api {
    get(): string;
    post(id: string, payload: ApiPostRequest): string;
}
