import { Api, ApiErrorsResponse, ApiPostRequest } from '../../models'
import data from './data'
import buildApiV1 from './v1'

const apiV1 = buildApiV1(data.surveys)

export default {
  get() {
    let response
    try {
      response = apiV1.get()
    } catch (exception) {
      console.error(exception)
      response = makeInternalServerErrorResponse()
    }
    return JSON.stringify(response)
  },
  post(id: string, payload: ApiPostRequest) {
    let response
    try {
      response = apiV1.post(id, payload)
    } catch (exception) {
      console.error(exception)
      response = makeInternalServerErrorResponse()
    }
    return JSON.stringify(response)
  }
} as Api

function makeInternalServerErrorResponse(): ApiErrorsResponse {
  return {
    errors: [
      {
        title: 'Internal Server Error',
        detail: "Something went wrong. We're working on it!"
      }
    ]
  }
}
