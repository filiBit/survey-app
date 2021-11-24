export interface InternalServerErrorResponse {
  errors: Array<{title: string, detail: string}>;
}
