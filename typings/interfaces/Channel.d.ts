import { Client } from "./Client"
import { ChannelGroup } from "./ChannelGroup"
import { Permission } from "./Permission"

export type ChannelCreateParams = 
  Pick<ChannelParams,"name"> &
  Partial<Omit<ChannelParams,"name">>

export interface ChannelParams {
  //display name of the channel, mandatory on create
  name: string
  //parent channel (you can also use the channelId)
  //ignored on update, mandatory on create
  parent: number|string
  description: string
  topic: string
  password?: string
  //see codec types for explanation
  codec: number
  codecQuality: number
  encrypted?: boolean
  permanent: boolean
  semiPermanent: boolean
  position: string
  //set to `-1` for unlimited clients
  maxClients: number
  //whether the channel is the default channel 
  default: boolean
  neededTalkPower: number
  deleteDelay: number
  icon: number
}

export interface DiscordMessageQuery {

  /**
   * get messages around this message id
   */
  around?: string,

  /**
   * get messages before this message ID
   */
  before?: string,

  /**
   * get messages after this message ID
   */
  after?: string,

  /**
   * max number of messages to return (1-100, default: 50)
   */
  limit?: number

}

/*export enum ChannelType {
  "voice" = 0,
  "text" = 1
}*/

export interface Channel {
  
  /**
   * returns the id of the channel
   */
  id(): string
  
  /**
   * returns the name of the channel
   */
  name(): string
  
  /**
   * returns the parent channel if it has one
   */
  parent(): Channel|undefined
  
  /**
   * return the order / position of the channel
   * for ts3 this is a numeric value determining the order in which channels are displayed below their parent
   */
  position(): number
  
  /**
   * sets the new order / position of the channel
   */
  setPosition(pos: number): void
  
  /**
   * deletes the current channel
   */
  delete(): boolean
  
  /**
   * moves the channel to a new parent with the given position value
   */
  moveTo(parent: string|Channel, position: number): void
  
  /**
   * sets a new channel name
   */
  setName(name: string): void
  
  /**
   * returns the type of the channel
   */
  type(): "voice"|"text"
  
  /**
   * retrurns the channels topic
   */
  topic(): string
  
  /**
   * sets the topic of the channel
   */
  setTopic(topic: string): void
  
  /**
   * returns the channels description
   */
  description(): string
  
  /**
   * sets the description of the channel
   */
  setDescription(description: string): void
  
  /**
   * returns the codec of the channel
   */
  codec(): number
  
  /**
   * sets the codec of the channel
   */
  setCodec(codec: number): void
  
  /**
   * returns the codec quality of the channel
   */
  codecQuality(): number
  
  /**
   * sets the codec quality of the channel
   */
  setCodecQuality(quality: number): void
  
  /**
   * returns the max clients the channel can hold
   * -1 for unlimited
   */
  maxClients(): number
  
  /**
   * sets the amount of clients the channel can hold
   * -1 for unlimited
   */
  setMaxClients(maxClients: number): void
  
  /**
   * retrieves the amount of clients this and his subchannels can hold
   * -1 for unlimited
   */
  maxFamilyClients(): number
  
  /**
   * sets the amount of clients this and his subchannels can hold
   * -1 for unlimited
   */
  setMaxFamilyClients(maxFamilyClients: number): void
  
  /**
   * checks wether the client is a permanent channel
   */
  isPermanent(): boolean
  
  /**
   * (un)sets the channel permanent flag
   */
  setPermanent(flag: boolean): void
  
  /**
   * checks wether the client is a semi permanent channel
   */
  isSemiPermanent(): boolean
  
  /**
   * (un)sets the channel semi permanent flag
   */
  setSemiPermanent(flag: boolean): void
  
  /**
   * checks wether the channel is the default channel
   */
  isDefault(): boolean
  
  /**
   * sets the channel as default
   */
  setDefault(): void
  
  /**
   * checks wether the channel is passworded
   */
  isPassworded(): boolean
  
  /**
   * sets the channels password
   */
  setPassword(password: string): void
  
  /**
   * checks wether the channel is encrypted
   */
  isEncrypted(): boolean
  
  /**
   * (un)sets the channels encryption flag
   */
  setEncrypted(flag: boolean): void
  
  /**
   * Compares two channels and checks if they are the same
   */
  equals(otherChannel: Channel): boolean
  
  /**
   * sends a chat message to the channel
   */
  chat(message: string): boolean
  
  /**
   * retrieve the clients which are in the channel
   */
  getClients(): Client[]
  
  /**
   * retrieves the amount of clients in this channel
   */
  getClientCount(): number
  
  /**
   * enables/disables subscription for this channel
   * requires subscription mode
   */
  setSubscription(flag: boolean): void
  
  /**
   * updates multiple channel properties at once
   */
  update(props: ChannelParams): void
  
  /**
   * assigns a client to a channelgroup
   */
  setChannelGroup(client: Client, group: ChannelGroup): void
  
  /**
   * gets the permissions for the channel from the server
   * this is an expensive call as the permissions are not cached
   */
  getPermissions(): Permission[]
  
  /**
   * adds/sets a new permission on the channel
   * you need to use the setters and then call save() to apply
   * can also be used to remove a permission by delete() afterwards
   */
  addPermission(name: string): Permission
  
  /**
   * returns the channel url from a teamspeak channel
   */
  getURL(): string
  
  /**
   * subscribes to the channel
   * requires subscription mode
   */
  subscribe(flag: boolean): void
  
  /**
   * gets the messages of a discord channel
   */
  getMessages(
    query: DiscordMessageQuery,
    callback: (error: Error, messages: any[]) => void
  ): boolean

}