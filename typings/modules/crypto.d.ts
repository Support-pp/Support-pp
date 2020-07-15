import { BytesWriter } from "../interfaces/BytesWriter"

export module Crypto {

  /**
   * generates a new {@see CryptoKeypair}
   */
  export function generateKeypair(): CryptoKeypair

  /**
   * loads a keypair from bytes and returns it as a {@see CryptoKeypair}.
   */
  export function loadKeypair(keypair: BytesWriter): CryptoKeypair

  /**
   * encrypts a message with given secret
   */
  export function seal(secret: BytesWriter, message: BytesWriter): BytesWriter

  /**
   * decrypts a message with the given secret
   */
  export function open(secret: BytesWriter, message: BytesWriter): BytesWriter

  /**
   * 
   * @param hname 
   * @param password the master password from which a derived key is generated
   * @param salt 
   * @param iterations number of iterations
   * @param keylength desired bit-length of the derived key
   */
  export function pbkdf2(hname: string, password: BytesWriter, salt: BytesWriter, iterations: number, keylength: number): BytesWriter

  /**
   * returns a given number of random bytes
   * @param number number of random bytes to return
   */
  export function randomBytes(number: number): BytesWriter
}


export namespace Crypto {
  
  export interface CryptoKeypair {

    /**
     * returns the keypair bytes
     */
    export(): BytesWriter

    /**
     * returns the shared key
     */
    sharedKey(pair: BytesWriter): BytesWriter
  }

}