export interface Permission {

  /**
   * returns the permissions id
   */
  id(): string

  /**
   * returns the permissions name
   */
  name(): string

  /**
   * returns the permissions value
   */
  value(): number

  /**
   * checks wether the skip flag has been set or not
   * only available on servergroups
   */
  skip(): boolean

  /**
   * checks wether the negate flag has been set or not
   * only available on servergroups
   */
  negated(): boolean

  /**
   * sets/unsets the negate flag of the permission
   * only available on servergroups
   * you need to call save() to apply changes
   */
  setNegated(value: boolean): boolean

  /**
   * sets/unsets the skip flag of the permission
   * only available on servergroups
   * you need to call save() to apply changes
   */
  setSkip(value: boolean): boolean

  /**
   * sets the value of the permission
   * you need to call save() to apply changes
   */
  setValue(value: number): boolean

  /**
   * saves the permission
   */
  save(): boolean

  /**
   * deletes the permission
   */
  delete(): boolean
}