import { Bytes } from "./Bytes"

export interface BytesWriter {

  /**
   * adds data to the current ByteWriter
   */
  append(data: BytesWriter): void

  /**
   * returns the current bytes
   */
  bytes(): Bytes

  /**
   * returns the length of bytes
   */
  length(): number

  /**
   * @todo
   */
  newReader(): Bytes

  /**
   * returns a base64 representation of the current payload
   */
  toBase64(): string

  /**
   * returns an hex string representation of the current payload
   */
  toHex(): string

  /**
   * returns the raw string representation of the current payload
   */
  toString(): string

  /**
   * @todo
   */
  writeString(str: string): void

  /**
   * @todo
   */
  writeCString(str: string): void

  writeInt8(int: number): void
  writeInt16be(int: number): void
  writeInt16le(int: number): void
  writeInt32be(int: number): void
  writeInt32le(int: number): void
  writeInt64be(int: number): void
  writeInt64le(int: number): void
  writeUint8(int: number): void
  writeUint16be(int: number): void
  writeUint16le(int: number): void
  writeUint32be(int: number): void
  writeUint32le(int: number): void
  writeUint64be(int: number): void
  writeUint64le(int: number): void
}