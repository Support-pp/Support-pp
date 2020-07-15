import { Client } from "../interfaces/Client"
import { User } from "../interfaces/User"
import { Channel } from "../interfaces/Channel"
import { Track } from "../interfaces/Track"
import { ServerGroup } from "../interfaces/ServerGroup"
import { Bytes } from "../interfaces/Bytes"
import { DiscordMessage } from "../interfaces/DiscordMessage"
import { TeamSpeakExtendedServerInfo } from "../interfaces/Extended"

export module Event {

  export function on(name: string, callback: (...args: any[]) => void): void

  /**
   * gets fired whenever a client sends a textmessage
   */
  export function on(name: "chat", callback: (event: chatEvent) => void): void

  /**
   * gets fired whenever a client sends a textmessage (only available on discord)
   */
  export function on(name: "message", callback: (event: DiscordMessage) => void): void

  /**
   * gets fired whenever the bot receives a poke message
   */
  export function on(name: "poke", callback: (event: chatEvent) => void): void

  /**
   * gets fired whenever the bot detects a client typing
   */
  export function on(name: "typing", callback: (client: Client) => void): void

  /**
   * gets fired whenever a new track starts
   */
  export function on(name: "track", callback: (track: Track) => void): void

  /**
   * gets fired whenever a track changes its information (like radio stations)
   */
  export function on(name: "trackInfo", callback: (track: Track) => void): void

  /**
   * gets fired whenever a track was successfully downloaded via ytdl
   */
  export function on(name: "ytdl.success", callback: (event: youtubedlEvent) => void): void

  /**
   * gets fired whenever a track was successfully downloaded via ytdl
   */
  export function on(name: "ytdl.error", callback: (event: youtubedlEvent) => void): void

  /**
   * gets fired whenever a connection with the server has been established
   */
  export function on(name: "connect", callback: () => void): void

  /**
   * gets fired whenever the bot is unable to connect to a server
   */
  export function on(name: "connectionFailed", callback: (reason: string) => void): void

  /**
   * gets fired when the bot disconnects from a server
   */
  export function on(name: "disconnect", callback: () => void): void

  /**
   * gets fired whenever a client moves to a different channel
   * Note: 
   * on client disconnect toChannel is empty
   * on client connect fromChannel is empty
   */
  export function on(name: "clientMove", callback: (event: clientMoveEvent) => void): void

  /**
   * gets fired whenever a clients nickname is changed
   */
  export function on(name: "clientNick", callback: (client: Client) => void): void

  /**
   * gets fired whenever a client becomes visible to the bot
   */
  export function on(name: "clientVisible", callback: (event: clientMoveEvent) => void): void

  /**
   * gets fired whenever a client becomes invisible to the bot
   */
  export function on(name: "clientInvisible", callback: (event: clientMoveEvent) => void): void

  /**
   * gets fired whenever a client gets kicked from the server
   */
  export function on(name: "clientKicked", callback: (event: clientMoveEvent) => void): void

  /**
   * gets fired whenever a client gets kicked from a channel
   */
  export function on(name: "clientKickedFromChannel", callback: (event: clientMoveEvent) => void): void

  /**
   * gets fired whenever a clients IP address changes or has initially been fetched
   */
  export function on(name: "clientIPAddress", callback: (client: Client) => void): void

  /**
   * gets fired whenever a client sets himself as away
   */
  export function on(name: "clientAway", callback: (client: Client) => void): void

  /**
   * gets fired whenever a client removes himself as away
   */
  export function on(name: "clientBack", callback: (client: Client) => void): void

  /**
   * gets fired whenever a client starts recording
   */
  export function on(name: "clientRecord", callback: (client: Client) => void): void

  /**
   * gets fired whenever a client stops recording
   */
  export function on(name: "clientRecordStop", callback: (client: Client) => void): void

  /**
   * gets fired whenever a client mutes his microphone
   */
  export function on(name: "clientMute", callback: (client: Client) => void): void

  /**
   * gets fired whenever a client unmutes his microphone
   */
  export function on(name: "clientUnmute", callback: (client: Client) => void): void

  /**
   * gets fired whenever a client mutes his sound
   */
  export function on(name: "clientDeaf", callback: (client: Client) => void): void

  /**
   * gets fired whenever a client unmutes his sound
   */
  export function on(name: "clientUndeaf", callback: (client: Client) => void): void

  /**
   * gets fired whenever a client got added to a server group
   */
  export function on(name: "serverGroupAdded", callback: (event: clientServerGroupEvent) => void): void

  /**
   * gets fired whenever a client got removed from a server group
   */
  export function on(name: "serverGroupRemoved", callback: (event: clientServerGroupEvent) => void): void

  /**
   * gets fired whenever a channel is created
   */
  export function on(name: "channelCreate", callback: (event: channelEvent) => void): void

  /**
   * 
   */
  export function on(name: "channelUpdate", callback: (event: channelEvent) => void): void

  /**
   * event which gets fired when a channel gets deleted
   * invoker might be empty when its a temporary channel
   */
  export function on(name: "channelDelete", callback: (channel: Channel, invoker?: Client) => void): void

  /**
   * gets fired whenever the bot recognizes a voice command that the script registered
   * assuming: 
   * 1) SpeechRecognition was installed
   * 2) SpeechRecognition is enabled in the config.ini
   * 3) The voice command was registered by the script in registerPlugin
   * 4) AudioReturnChannel is set to 2
   */
  export function on(name: "speech", callback: (event: speechEvent) => void): void

  /**
   * gets fired whenever the number of users that are currently talking in the channel changes
   */
  export function on(name: "talkerCount", callback: (count: number) => void): void

  /**
   * gets fired whenever the script is going to be unloaded or reloaded; use this to clean up or save stuff
   */
  export function on(name: "unload", callback: () => void): void

  /**
   * gets fired when all scripts have been loaded
   */
  export function on(name: "load", callback: () => void): void

  /**
   * this event gets triggered whenever a discord event got received
   * every event will be emitted in uppercase and the spaces will be replaced by underscores
   * all available discord events can be found in the discord documentation https://discordapp.com/developers/docs/topics/gateway#events
   */
  export function on(name: "discord:", callback: (event: any) => void): void

  /**
   * gets fired whenever a new client connects to the websocket server
   */
  export function on(name: "ws.connect", callback: (id: string) => void): void

  /**
   * gets fired whenever a client disconnects from the websocket server
   */
  export function on(name: "ws.close", callback: (id: string) => void): void

  /**
   * gets fired whenever the websocket encounters an error
   */
  export function on(name: "ws.error", callback: (event: wsErrorEvent) => void): void

  /**
   * gets fired whenever the websocket server encounters an error
   */
  export function on(name: "ws.data", callback: (event: wsDataEvent) => void): void

  /**
   * gets fired when calling backend.extended().requestExtendedServerInfo()
   */
  export function on(name: "serverinfo_int", callback: (event: TeamSpeakExtendedServerInfo) => void): void

  /**
   * emits a custom event to the instance
   */
  export function emit(name: string, data: any): void

  /**
   * emits a custom event to all instances
   */
  export function broadcast(name: string, data: any): void
}

export namespace Event {
  export interface ApiEvent {

    /**
     * returns the name of the event
     */
    name(): string
  
    /**
     * returns the json body
     */
    data(): any
  
    /**
     * returns the User which called the event
     */
    user(): User|undefined
  
    /**
     * returns the remote address which triggered the call
     */
    remoteAddr(): string
  
    /**
     * gets the parameters inside the url
     */
    queryParams(): { [key: string]: string }
  }

  /*export enum ChatMode {
    PRIVATE = 1,
    CHANNEL = 2,
    SERVER = 3,
  }*/

  export interface chatEvent {
    text: string,
    channel: Channel,
    client: Client,

    /**
     * PRIVATE = 1
     * CHANNEL = 2
     * SERVER = 3
     */
    mode: 1|2|3
  }

  export interface youtubedlEvent {
    url: string,
    jobId: string,
    trackId: string
  }

  export interface clientMoveEvent {
    fromChannel?: Channel
    toChannel?: Channel
    client: Client,
    invoker?: Client
  }

  /**
  export interface clientNickEvent {
    client: Client,
    oldNick: string
  }
  */

  export interface clientServerGroupEvent {
    client: Client,
    invoker: Client,
    serverGroup: ServerGroup
  }

  export interface channelEvent {
    channel: Channel,
    invoker: Client
  }

  export interface speechEvent {
    client: Client,
    text: string
  }

  export interface wsErrorEvent {
    id: string,
    error: string
  }

  export interface wsDataEvent {
    id: string,
    type: number,
    data: Bytes
  }
}