import { Bytes } from "../interfaces/Bytes"
import { BytesWriter } from "../interfaces/BytesWriter"

export module Fs {
  
  /**
   * checks if a file exists
   * @param path path to the file
   */
  export function exists(path: string): boolean 
  
  /**
   * reads the content of a file
   * @param path path to the file
   */
  export function readFile(path: string): Bytes
  
  /**
   * writes data to a file
   * @param path path to the file
   * @param data data as Bytes, e.g. created by helpers.bytesFromString() or similar functions
   * @param mode file mode bits
   */
  export function writeFile(path: string, data: BytesWriter, mode: number): boolean
  
  /**
   * returns information about a file
   * @param path path to the file
   */
  export function stat(path: string): FileInfo
  
  /**
   * returns information about all files in a dirictory
   * @param path path to the file
   */
  export function readDir(path: string): Array<FileInfo>
  
  /**
   * deletes a file or directory
   * @param path path to the file
   */
  export function remove(path: string): boolean 
  
  /**
   * creates a directory
   * @param path path to the file
   */
  export function mkDir(path: string): boolean 
  
  /**
   * creates every missing directory in a path
   */
  export function mkDirAll(path: string): boolean
  
  /**
   * renames a file or directory
   * @param path path to the file or directory
   * @param path new path to the file or directory
   */
  export function rename(path: string, newPath: string): boolean

}

export namespace Fs {
  export interface FileInfo {

    /**
     * returns the base name of the file
     */
    name(): string
  
    /**
     * returns the length in bytes for regular files
     * system dependent for others
     */
    size(): number
  
    /**
     * returns the file mode bits
     */
    mode(): number
  
    /**
     * returns the last modification time
     */
    modTime(): Date
  
    /**
     * checks wether the file is a directory
     */
    isDir(): boolean
  }
}