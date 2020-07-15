export interface Bytes {

  /**
   * returns an array of bytes
   */
  bytes(): number[]

  /**
   * @todo
   */
  string(length: number): string

  /**
   * @todo
   */
  cString(): string

  /**
   * @todo
   */
  length(): number

  /**
   * @todo
   */
  pos(): number

  /**
   * returns the bit at pos
   */
  seek(pos: number): boolean

  /**
   * returns a base64 representation of the bytes
   */
  toBase64(): string

  /**
   * returns a hex representation of the bytes
   */
  toHex(): string

  /**
   * returns a string representation of the bytes
   */
  toString(): string

  int16be(): number
  int16le(): number
  int32be(): number
  int32le(): number
  uint8(): number
  uint16be(): number
  uint16le(): number
  uint32be(): number
  uint32le(): number
}