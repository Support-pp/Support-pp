/*export enum Privilege {
  LOGIN =           1 <<  0,
  LIST_FILE =       1 <<  1,
  UPLOAD_FILE =     1 <<  2,
  DELETE_FILE =     1 <<  3,
  EDIT_FILE =       1 <<  4,
  CREATE_PLAYLIST = 1 <<  5,
  DELETE_PLAYLIST = 1 <<  6,
  ADDTO_PLAYLIST =  1 <<  7,
  STARTSTOP =       1 <<  8,
  EDITUSERS =       1 <<  9,
  CHANGENICK =      1 << 10,
  BROADCAST =       1 << 11,
  PLAYBACK =        1 << 12,
  ENQUEUE =         1 << 13,
  ENQUEUENEXT =     1 << 14,
  EDITBOT =         1 << 15,
  EDITINSTANCE =    1 << 16,
}*/

export interface User {
  
  /**
   * returns the id of the user
   */
  id(): string
  
  /**
   * returns the name of the user
   */
  name(): string
  
  /**
   * returns the privileges of the user
   */
  privileges(): number
  
  /**
   * returns the teamspeak or discord unique id if bound to a client
   */
  tsUid(): string
  
  /**
   * returns the teamspeak or discord unique id if bound to a client
   * alias to tsUid
   */
  uid(): string
  
  /**
   * returns the teamspeak or discord group id if bound to a group or role
   */
  tsGroupId(): string
  
  /**
   * returns the teamspeak or discord group id if bound to a group or role
   * alias to tsGroupId
   */
  groupId(): string
  
  /**
   * checks if a user is an admin
   */
  isAdmin(): boolean
  
  /**
   * sets a new password to the user
   */
  setPassword(password: string): boolean 
  
  /**
   * sets a new teamspeak/discord unique id to the user
   */
  setTSUid(uid: string): boolean
  
  /**
   * sets a new group role to the user
   */
  setGroupId(groupId: string): boolean
  
  /**
   * sets the privileges to a user
   */
  setPrivileges(privileges: number): boolean 
  
  /**
   * adds a privilege to the user
   */
  addPrivilege(privilege: number): boolean 
  
  /**
   * removes a privilege from the user
   */
  removePrivilege(privilege: number): boolean
  
  /**
   * deletes the user
   */
  delete(): boolean
}