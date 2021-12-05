import { Question } from '.'

export interface Survey {
  type: string
  id: string
  attributes: {
    title: string
    description: string
    questions: Question[]
  }
}
