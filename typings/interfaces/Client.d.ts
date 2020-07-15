import { ServerGroup } from "./ServerGroup"
import { ChannelGroup } from "./ChannelGroup"
import { Channel } from "./Channel"

/*export enum ClientType {
  query = 0,
  normal = 1
}*/

export interface Client {

  /**
   * returns the nickname of the client
   */
  name(): string

  /**
   * returns the nickname of the client
   * alias of name()
   */
  nick(): string

  /**
   * returns the phonetic name of the client
   * useful for tts
   */
  phoneticName(): string

  /**
   * returns the clients temporary id
   */
  id(): string

  /**
   * returns the clients unique id
   */
  uniqueId(): string

  /**
   * returns the clients unique id
   * alias of uniqueId()
   */
  uid(): string

  /**
   * returns database id of a teamspeak client
   */
  databaseID(): string

  /**
   * returns database id of a teamspeak client
   * alias of databaseID()
   */
  databaseId(): string

  /**
   * returns the clients country
   */
  country(): string

  /**
   * returns the clients description
   */
  description(): string

  /**
   * sets the clients description
   */
  setDescription(description: string): boolean

  /**
   * sets the clients description with a hex string
   */
  setDescriptionHex(description: string): boolean

  /**
   * returns true when this client is the bot itself
   */
  isSelf(): boolean

  /**
   * checks if the client is recording
   */
  isRecording(): boolean

  /**
   * checks if the client is muted
   */
  isMuted(): boolean

  /**
   * checks if the client is deaf
   */
  isDeaf(): boolean

  /**
   * checks if the client is away
   */
  isAway(): boolean

  /**
   * returns the clients servergroups
   */
  getServerGroups(): ServerGroup[]

  /**
   * returns the clients channelgroup
   */
  getChannelGroup(): ChannelGroup

  /**
   * returns the away message (if set)
   */
  getAwayMessage(): string

  /**
   * returns the clients last ping time (latency)
   */
  getPing(): number

  /**
   * returns the clients ip address (if available)
   */
  getIPAddress(): string

  /**
   * returns the clients onlinetime in milliseconds
   */
  getOnlineTime(): number

  /**
   * returns the clients idle time in milliseconds
   */
  getIdleTime(): number

  /**
   * returns the clients packet loss in percentage
   */
  getPacketLoss(): number

  /**
   * returns the clients amount of received data
   */
  getBytesReceived(): number

  /**
   * returns the clients amount of sent data
   */
  getBytesSent(): number

  /**
   * returns the total number of connection from the client on teamspeak
   */
  getTotalConnections(): number

  /**
   * returns the time the client has been created / was first seen on the teamspeak server
   */
  getCreationTime(): number

  /**
   * returns an array of all channels the client is in
   * even if teamspeak only uses one channel for a client at a time, others might provide serveral
   */
  getChannels(): Channel[]

  /**
   * returns the current audio channel of the client
   */
  getAudioChannel(): Channel

  /**
   * returns the clients url
   * e.g. "client://${client_id}//${client_uid}~${client_nickname}"
   */
  getURL(): string

  /**
   * compares two clients
   */
  equals(otherClient: Client): boolean 

  /**
   * sends a message to the client
   */
  chat(message: string): boolean

  /**
   * pokes the client with a message
   */
  poke(message: string): void

  /**
   * bans the client from the server
   * @param time ban time in seconds (-1 for permanent)
   * @param message
   */
  ban(time: number, message: string): void

  /**
   * kicks the client from the server
   */
  kickFromServer(message: string): void

  /**
   * kicks the client from the server
   * alias to kickFromServer
   */
  kick(message: string): void

  /**
   * kicks the client from the channel
   */
  kickFromChannel(message?: string): void

  /**
   * adds the client to a specific servergroup
   */
  addToServerGroup(group: ServerGroup|string|number): void 

  /**
   * removes the client from a specific servergroup
   */
  removeFromServerGroup(group: ServerGroup|string|number): void 

  /**
   * moves the client to a different channel
   */
  moveTo(target: Channel, password?: string): void

  /**
   * enables/disabless subscription for this client
   * requires subscription mode
   */
  setSubscription(flag: boolean): void 

  /**
   * returns the clients platform
   * e.g. "Windows", "Linux", "MacOS"
   */
  getPlatform(): string

  /**
   * returns the clients version
   */
  getVersion(): string

  /**
   * returns the type of the client
   */
  type(): 0|1 

  /**
   * subscribes to the client
   */
  subscribe(sub: boolean): void
}