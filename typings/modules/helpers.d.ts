import { BytesWriter } from "../interfaces/BytesWriter"

export module Helpers {

  /**
   * returns a random numbers between zero and max
   */
  export function getRandom(max: number): number

  /**
   * returns a random permutation of numbers between zero and max
   */
  export function getRandPerm(max: number): Array<number>

  /**
   * creates an empty BytesWriter
   */
  export function newBytes(): BytesWriter

  /**
   * returns a BytesWriter for a given string
   */
  export function bytesFromString(value: string): BytesWriter

  /**
   * returns a BytesWriter for a given hex-string
   */
  export function bytesFromHex(value: string): BytesWriter

  /**
   * returns a BytesWriter for a given base64-string
   */
  export function bytesFromBase64(value: string): BytesWriter

  /**
   * encodes a string to base64
   */
  export function base64Encode(input: string): string

  /**
   * decodes a string from base64
   */
  export function base64Decode(input: string): string

  /**
   * encodes a string to hex
   */
  export function hexEncode(input: string): string

  /**
   * decodes a string from hex
   */
  export function hexDecode(input: string): string

  /**
   * generate a hex-encoded md5 checksum of the given input
   */
  export function MD5Sum(input: string): string

  /**
   * generate a hex-encoded sha1 checksum of the given input
   */
  export function SHA1Sum(input: string): string

  /**
   * generate a hex-encoded sha256 checksum of the given input
   */
  export function SHA256Sum(input: string): string

  /**
   * gets the string representation of an object
   * @deprecated
   */
  export function toString(input: any): string

  /**
   * returns the documentation of an interface
   * @param name name of the object to display
   * @param object the object to document
   */
  export function document(name: string, object: any): string

  /**
   * NOT POSSIBLE TO DOCUMENT SINCE TYPEOF IS A RESERVED KEYWORD
   * checks the type of a input value und returns its name
   * @param data the type to check
   */
  function _typeof(data: any): string
  export { _typeof as typeof }
  

}