import { Permission } from "./Permission"
import { Client } from "./Client"

export interface ChannelGroup {
  
  /**
   * returns the id of the channelgroup
   */
  id(): string
  
  /**
   * returns the name of the channelgroup
   */
  name(): string
  
  /**
   * returns the id of the icon used for the channelgroup
   */
  icon(): string
  
  /**
   * gets the permissions for the channelgroup from the server
   * this is an expensive call as the permissions are not cached
   */
  getPermissions(): Permission[]
  
  /**
   * Adds/sets a new permission to the channelgroup
   * you need to use the setters and then call save() to apply
   * can also be used to remove a permission by delete() afterwards
   */
  addPermission(id: string): Permission
}