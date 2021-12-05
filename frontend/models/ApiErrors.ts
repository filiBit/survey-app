export interface ApiGenericError {
  title?: string
  detail: string
}

export interface ValidationError {
  source?: { pointer: string }
  detail: string
}
