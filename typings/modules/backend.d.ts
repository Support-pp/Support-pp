import { Client } from "../interfaces/Client"
import { Channel, ChannelCreateParams } from "../interfaces/Channel"
import { ServerGroup } from "../interfaces/ServerGroup"
import { ChannelGroup } from "../interfaces/ChannelGroup"
import { Extended } from "../interfaces/Extended"

export module Backend {
  /**
   * connects to the server
   */
  export function connect(): boolean
  
  /**
   * disconnects from the server
   */
  export function disconnect(): boolean
  
  /**
   * checks wether the backend is connected to a server
   */
  export function isConnected(): boolean
  
  /**
   * currents bot unique identifier
   */
  export function getBotClientID(): string
  
  /**
   * returns the client representation of the bot
   */
  export function getBotClient(): Client
  
  /**
   * returns the actual nickname of the bot
   */
  export function getNick(): string
  
  /**
   * returns a channel by its id if found
   */
  export function getChannelByID(id: string): Channel
  
  /**
   * returns the primary channel the bot is in
   */
  export function getCurrentChannel(): Channel
  
  /**
   * returns a channel by its name if found
   */
  export function getChannelByName(name: string): Channel 
  
  /**
   * returns channels matching the given name
   */
  export function getChannelsByName(name: string): Channel[]
  
  /**
   * returns the total number of channels
   */
  export function getChannelCount(): number 
  
  /**
   * returns all channels
   */
  export function getChannels(): Channel[]
  
  /**
   * returns all clients
   */
  export function getClients(): Client[]
  
  /**
   * returns a client by its id if found
   */
  export function getClientByID(id: string): Client
  
  /**
   * returns a client by its name if found
   */
  export function getClientByName(name: string): Client
  
  /**
   * returns a client by its nick if found
   * alias to getClientByNick()
   */
  export function getClientByNick(nick: string): Client
  
  /**
   * returns a client by its uid if found
   */
  export function getClientByUniqueID(uniqueID: string): Client
  
  /**
   * returns a client by its uid if found
   * alias t o getClientByUniqueID
   */
  export function getClientByUID(uid: string): Client
  
  /**
   * sends a message to the server
   */
  export function chat(message: string): void
  
  /**
   * creates a new channel
   */
  export function createChannel(properties: ChannelCreateParams): Channel
  
  /**
   * returns a servergroup by its id if found
   */
  export function getServerGroupByID(id: string): ServerGroup
  
  /**
   * returns a channelgroup by its id if found
   */
  export function getChannelGroupByID(id: string): ChannelGroup
  
  /**
   * returns all known servergroups
   */
  export function getServerGroups(): ServerGroup[] 
  
  /**
   * returns all known channelgroups
   */
  export function getChannelGroups(): ChannelGroup[]
  
  /**
   * 
   */
  export function extended(): Extended
  
  /**
   * sets the client status with a reason
   */
  export function setAway(flag: boolean, reason?: string): boolean

}