import { useEffect } from 'react'
import { Answer, Survey } from '../../models'

export function useAnswersInitialization({ setAnswers, survey }: HookParameters) {
  useEffect(() => {
    if (survey != null) {
      setAnswers(
        survey.attributes.questions.map((q) => ({
          questionId: q.questionId,
          answer: ''
        }))
      )
    }
  }, [survey?.id])
}

interface HookParameters {
  setAnswers: React.Dispatch<React.SetStateAction<Answer[]>>
  survey: Survey | null
}
