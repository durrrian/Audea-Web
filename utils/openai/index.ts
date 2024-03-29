import { Configuration, OpenAIApi } from 'openai'
import { PUBLIC_OPEN_AI_SECRET } from '../constant'

const configuration = new Configuration({
  apiKey: PUBLIC_OPEN_AI_SECRET as string,
})

const openai = new OpenAIApi(configuration)

export default openai

export interface IGPTResponse {
  id: string
  object: string
  created: number
  model: string
  usage: {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
  }
  choices: {
    message: {
      role: 'assistant'
      content: string
    }
    finish_reason: string
    index: number
  }[]
}

export interface IWhisperResponse {
  text: string
}
