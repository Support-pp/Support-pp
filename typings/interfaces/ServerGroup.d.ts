import { Permission } from "./Permission"
import { Client } from "./Client"

export interface ServerGroup {
  
  /**
   * returns the id of the servergroup
   */
  id(): string
  
  /**
   * returns the name of the servergroup
   */
  name(): string
  
  /**
   * returns the id of the icon used for the servergroup
   */
  icon(): string
  
  /**
   * adds a client to the servergroup
   * @param client database id or client object
   */
  addClientByDatabaseId(client: Client|string|number): boolean
  
  /**
   * gets the permissions for the servergroup from the server
   * this is an expensive call as the permissions are not cached
   */
  getPermissions(): Permission[]
  
  /**
   * Adds/sets a new permission to the servergroup
   * you need to use the setters and then call save() to apply
   * can also be used to remove a permission by delete() afterwards
   */
  addPermission(id: string): Permission
}