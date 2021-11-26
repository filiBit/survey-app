export interface ApiGenericError {
    title: string;
    detail: string;
  }

export interface ApiValidationError
    {
      source: { pointer: string };
      detail: string;
    }
