import { Bytes } from "../interfaces/Bytes"

export interface HttpConfig {
  /**
   * request method to use (GET, POST, PUT, DELETE, ...)
   */
  method?: string

  /**
   * the url endpoint which should be called
   */
  url: string

  /**
   * timeout in milliseconds
   */
  timeout?: number

  /**
   * request body
   */
  body?: string

  /**
   * request headers
   */
  headers?: Record<string, string>
}

export interface HttpResponse {
  data: Bytes
  headers: Record<string, string>
  status: string
  statusCode: number
}

export function simpleRequestCallback(error: string, response: HttpResponse): void

export module Http {

  /**
   * creates an http request
   */
  export function simpleRequest(config: HttpConfig, callback: typeof simpleRequestCallback): string

}