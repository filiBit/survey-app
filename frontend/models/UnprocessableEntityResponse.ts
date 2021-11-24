export interface UnprocessableEntityResponse {
errors: Array<{source: { pointer: string }, detail: string}>;
}
