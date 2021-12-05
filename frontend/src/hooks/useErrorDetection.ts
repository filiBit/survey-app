import { useEffect } from 'react'
import { Question, ValidationError } from '../../models'

export function useErrorDetection({ setError, validationErrors, question, value }: HookParameters) {
  useEffect(() => {
    setError(validationErrors.find((ve) => ve.source?.pointer == question.questionId))
  }, [value, validationErrors, question.questionId])
}

interface HookParameters {
  setError: React.Dispatch<React.SetStateAction<ValidationError | undefined>>
  validationErrors: ValidationError[]
  question: Question
  value: string | number
}
