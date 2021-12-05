import { useState } from 'react'
import { Question, ValidationError } from '../../../models'
import { useErrorDetection } from '../../hooks'

const BasicInput = function BasicInput({ question, value = '', updateValue, validationErrors }: ComponentProperties) {
  const [error, setError] = useState<ValidationError>()
  const [isTouched, setIsTouched] = useState<boolean>(false)

  useErrorDetection({
    setError,
    validationErrors,
    question,
    value
  })

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value: newValue } = event.target

    const newValueParsed = question.questionType === 'integer' ? (newValue === '' ? '' : Number(newValue)) : newValue

    updateValue(question.questionId, newValueParsed)
    setIsTouched(true)
  }

  return (
    <div className="my-10 w-full md:w-1/2">
      <label className="inline-block mb-1 text-xl pl-2" htmlFor="tt">
        {question.label}
      </label>
      <input
        className="block p-2 w-full border-2 rounded-md text-xl"
        name={question.questionId}
        type={question.questionType == 'string' ? 'text' : 'number'}
        value={value}
        onChange={handleChange}
      />
      <span className="text-red-600 text-xl pl-2">{isTouched && error?.detail}</span>
    </div>
  )
}

export default BasicInput

interface ComponentProperties {
  question: Question
  value: string | number
  updateValue: (questionId: string, updatedValue: string | number) => void
  validationErrors: ValidationError[]
}
