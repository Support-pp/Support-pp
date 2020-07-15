export module Store {

  /**
   * retrieves a key
   * only available for the current script, but shared between instances of it
   */
  export function get(key: string): any

  /**
   * sets a key with the given value
   * only available for the current script, but shared between instances of it
   */
  export function set(key: string, value: any): boolean

  /**
   * unsets a key
   * only available for the current script, but shared between instances of it
   */
  export function unset(key: string): void

  /**
   * returns an array of all set key the values
   * all keys for the current script, but shared between instances of it
   */
  export function getKeys(): any[]

  /**
   * gets all stored keys with a key value map
   * all keys for the current script, but shared between instances of it
   */
  export function getAll(): { [key: string]: any }

  /**
   * retrieves a key
   * the values stored are available for every script in every instance
   */
  export function getGlobal(key: string): any

  /**
   * sets a key with the given value
   * the values stored are available for every script in every instance
   */
  export function setGlobal(key: string, value: any): boolean

  /**
   * unsets a key
   * the values stored are available for every script in every instance
   */
  export function unsetGlobal(key: string): void

  /**
   * returns an array of all set key the values
   * the values stored are available for every script in every instance
   */
  export function getKeysGlobal(): any[]

  /**
   * gets all stored keys with a key value map
   * the values stored are available for every script in every instance
   */
  export function getAllGlobal(): { [key: string]: any }

  /**
   * retrieves a key
   * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
   */
  export function getInstance(key: string): any

  /**
   * sets a key with the given value
   * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
   */
  export function setInstance(key: string, value: any): boolean

  /**
   * unsets a key
   * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
   */
  export function unsetInstance(key: string): void

  /**
   * returns an array of all set key the values
   * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
   */
  export function getKeysInstance(): any[]

  /**
   * gets all stored keys with a key value map
   * the values stored are available only for the current instance of the script (not shared between instances and / or other scripts)
   */
  export function getAllInstance(): { [key: string]: any }
}