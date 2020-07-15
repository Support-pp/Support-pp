import { Track } from "../interfaces/Track"
import { User } from "../interfaces/User"
import { Channel } from "../interfaces/Channel"
import { Client } from "../interfaces/Client"

/*export enum BackendType {
  ts3 = "ts3",
  discord = "discord"
}*/

/*export enum LogLevel {
  off = 0,
  errors = 1,
  warnings = 2,
  information = 3,
  verbose = 10,
  all = 11
}*/

export module Engine {

  /**
   * returns the instances unique identifier
   */
  export function getInstanceID(): string

  /**
   * returns the current bots unique identifier
   */
  export function getBotID(): string

  /**
   * returns the name of the used backend (e.g. "ts3" or "discord")
   */
  export function getBackend(): "ts3"|"discord"

  /**
   * sets the log level of the instance
   * level | what gets logged
   * ------|-----------------
   *   0   | no log messages
   *   1   | errors only
   *   2   | errors and warnings
   *   3   | errors, warnings, information
   *   4   | ...
   *  10   | most verbose
   *  11   | most verbose + external backends
   */
  export function setInstanceLogLevel(level: number): boolean

  /**
   * sets the log level of the bot
   * level | what gets logged
   * ------|-----------------
   *   0   | no log messages
   *   1   | errors only
   *   2   | errors and warnings
   *   3   | errors, warnings, information
   *   4   | ...
   *  10   | most verbose
   *  11   | most verbose + external backends
   */
  export function setBotLogLevel(level: number): boolean

  /**
   * returns the log level of the instance
   */
  export function getInstanceLogLevel(): number

  /**
   * returns the log level of the bot
   */
  export function getBotLogLevel(): number

  /**
   * reloads all scripts
   * requires the corresponding setting in the config.ini to be enabled
   */
  export function reloadScripts(): boolean

  /**
   * returns the configured nickname - to get the actual nickname, use the backend module
   */
  export function getNick(): string

  /**
   * sets the nick to a new value and updates it on the server
   */
  export function setNick(nick: string): boolean

  /**
   * returns the default channel id
   */
  export function getDefaultChannelID(): string

  /**
   * sets the default channel id
   */
  export function setDefaultChannelID(channelID: string): boolean

  /**
   * returns true if the backend of this instance has been started
   */
  export function isRunning(): boolean

  /**
   * sends a notification to all users that are currently using the webinterface
   * use this for startup errors
   */
  export function notify(message: string): void

  /**
   * stores the given object as configuration for the current script
   */
  export function saveConfig(config: Record<string, any>): boolean

  /**
   * logs to stdout / instance log
   * Note:
   * For some classes this may print {} because the values are returned by functions and not stored as properties.
   * In recent versions numbers and some other types may be logged as <nil>. To get the actual value in the log you need to convert it to a string first.
   */
  export function log(...args: any[]): void

  /**
   * @param format the template string
   * @param args arguments which get replaced within the template string
   */
  export function logf(format: string, ...args: any[]): void

  /**
   * Exports an object, so other Scripts are able to use functions or values of the Script
   * Note: Since SinusBot v1.0.0 you can now use the standard module.exports = {...}; instead
   */
  function _export(obj: any): void
  export { _export as export }

  /**
   * removes the current avatar image
   */
  export function removeAvatar(): boolean

  /**
   * sets the avatar image to the album art of a given track
   */
  export function setAvatarFromTrack(track: Track): boolean

  /**
   * sets the avatar image to the manually uploaded image
   */
  export function setDefaultAvatar(): boolean

  /**
   * sets the avatar to the rendered output of a banner template
   */
  export function setAvatarFromBanner(bannerName: string): boolean

  /**
   * sets the avatar to the given image as URL
   */
  export function setAvatarFromURL(url: string): boolean

  /**
   * gets the users of the SinusBot
   */
  export function getUsers(): User[]

  /**
   * gets a sinusbot user by his id
   */
  export function getUserByID(id: string): User|undefined

  /**
   * gets a sinusbot user by his name
   */
  export function getUserByName(name: string): User|undefined

  /**
   * adds a user
   */
  export function addUser(username: string): User|undefined

  /**
   * sets the command prefix
   */
  export function setCommandPrefix(prefix: string): void

  /**
   * gets the command prefix
   */
  export function getCommandPrefix(): string

  /**
   * returns the sinusbot version
   * e.g. "1.0.0-alpha.7-a20212b"
   */
  export function version(): string

  /**
   * returns the operating system
   * e.g. "linux"
   */
  export function os(): string

  /**
   * disables the register command
   */
  export function disableRegistration(): void

  /**
   * enables the register command
   */
  export function enableRegistration(): void

  /**
   * checks if sub mode is active
   */
  export function isSubscriptionMode(): boolean

  export function getChannelSubscriptions(): Channel[]

  /**
   * checks if sub mode is active
   */
  export function getClientSubscriptions(): Client[]

  export function setChannelSubscription(channel: Channel, bool: boolean): void

  export function setChannelSubscription(client: Client, bool: boolean): void

  export function getIgnoreCommandsFromPrivateChat(): boolean
  export function getIgnoreCommandsFromChannelChat(): boolean
  export function getIgnoreCommandsFromServerChat(): boolean

}