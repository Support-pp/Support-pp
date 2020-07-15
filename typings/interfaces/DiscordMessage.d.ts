import { Client } from "./Client"
import { Channel } from "./Channel"

export interface DiscordMessage {

  /**
   * returns the id of the message
   */
  ID(): string

  /**
   * returns the author of the message
   */
  author(): Client

  /**
   * returns the author id of the message
   */
  authorID(): string

  /**
   * returns the channel where this message has been sent
   */
  channel(): Channel

  /**
   * returns the channel id where this message has been sent
   */
  channelID(): string

  /**
   * returns the messages content
   */
  content(): string

  /**
   * returns the id of the guild the message was sent in
   */
  guildID(): string

  /**
   * checks if it was a tts message
   */
  isTTS(): boolean

  /**
   * returns the timestamp when this message has been sent
   */
  timestamp(): Date

  /**
   * returns the timestamp when the message has been edited last
   */
  timestampEdited(): Date

  /**
   * creates a reaction for the message.emoji takes the form of name:id for custom guild emoji or unicode characters
   * requires the READ_MESSAGE_HISTORY permission
   * if nobody else has added the emoji yet you also need the ADD_REACTIONS permission
   */
  createReaction(emoji: string, callback: (...args: any[]) => void): boolean

  /**
   * deletes the message
   */
  delete(callback: (...args: any[]) => void): boolean

  /**
   * deletes all reactions on this message
   * requires MANAGE_MESSAGES permission
   */
  deleteAllReactions(callback: (...args: any[]) => void): boolean

  /**
   * deletes a own reaction the bot has made to this message
   */
  deleteOwnReaction(emoji: string, callback: (...args: any[]) => void): boolean

  /**
   * deletes a reaction that a given user has mode for the message
   */
  deleteUserReaction(emoji: string, user: Client|string, callback: (...args: any[]) => void): boolean

  /**
   * edits the text of the message
   */
  editContent(content: string, callback: (...args: any[]) => void): boolean

  /**
   * replies to the message with given text
   */
  reply(ttext: string, callback?: (...args: any[]) => void): boolean
}