export module Format {

  /**
   * apply color if the backend supports it
   */
  export function color(text: string, color: string): string

  /**
   * apply italic formatting to text
   */
  export function italic(text: string): string

  /**
   * apply bold formatting to text
   */
  export function bold(text: string): string

  /**
   * apply underlined formatting to text
   */
  export function underline(text: string): string

  /**
   * formats text as code
   */
  export function code(text: string): string

}