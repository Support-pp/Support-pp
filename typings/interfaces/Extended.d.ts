export interface Extended {

}

/**
 * @todo
 */
interface DiscordStatus {

}

interface ExtendedDiscord {
  
  /**
   * @todo
   */
  getGuild(guildId: string, callback: (err: Error, data: { [key: string]: any }) => void): void
  
  /**
   * @todo
   */
  modifyGuild(): void
  
  /**
   * @todo
   */
  setStatus(status: DiscordStatus): void
  
  /**
   * @todo
   */
  getChannel(channelId: string, callback: (err: Error, data: { [key: string]: any }) => void): void
  
  /**
   * @todo
   */
  modifyChannel(channelId: string, data: { [key: string]: any }, callback?: (err: Error, data: { [key: string]: any }) => void): void
  
  /**
   * @todo
   */
  deleteChannel(channelId: string, callback: (err: Error, data: { [key: string]: any }) => void): void
  
  /**
   * @todo
   */
  getChannelMessages(channelId: number, callback?: (err: Error, data: { [key: string]: any }) => void): void
  
  /**
   * @todo
   */
  getChannelMessage(channelId: number, callback?: (err: Error, data: { [key: string]: any }) => void): void
  
  /**
   * @todo
   */
  createMessage(channelId: string, data: { [key: string]: any }, callback?: (err: Error, data: { [key: string]: any }) => void): void
  
  /**
   * @todo
   */
  rawCommand(method: string, path: string, data: { [key: string]: any }, callback?: (err: Error, data: { [key: string]: any }) => void): void

}

/**
 * @todo
 */
interface TeamSpeakServerInfo {

}

/**
 * @todo
 */
interface TeamSpeakExtendedServerInfo {

}

interface ExtendedTeamSpeak {
  
  /**
   * returns informations about the teamspeak server
   */
  getServerInfo(): TeamSpeakServerInfo
  
  /**
   * returns extended informations about the teamspeak server
   */
  requestExtendedServerInfo(): TeamSpeakExtendedServerInfo
}