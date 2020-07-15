export module Audio {

  /**
   * applies a ffmpeg filter to the audio output
   * Warning: This method is curretly not safe to use and leads to crashes!
   */
  export function setAudioFilter(filter: string): boolean

  /**
   * enables or disables audio return channel; required for speech recognition engine / recording
   */
  export function setAudioReturnChannel(flags: number): boolean

  /**
   * @todo
   */
  export function getAudioReturnChannel(): number

  /**
   * starts recording to a file
   */
  export function startRecording(): boolean

  /**
   * stops recording to a file
   */
  export function stopRecording(): boolean

  /**
   * streams audio output to an icecast-server
   * @param url endpoint to stream to
   * @param username username for authentication
   * @param password password for authentication
   */
  export function streamToServer(url: string, username: string, password: string): boolean

  /**
   * stops streaming started with streamToServer
   */
  export function stopStream(): boolean

  /**
   * returns the state of repeat-mode
   */
  export function isRepeat(): boolean 

  /**
   * sets the state of repeat-mode
   */
  export function setRepeat(state: boolean): void

  /**
   * returns the state of shuffle-mode
   */
  export function isShuffle(): boolean

  /**
   * starts playing the next song
   */
  export function playNext(): boolean

  /**
   * starts playing the previous song
   */
  export function playPrevious(): boolean

  /**
   * stops one or more playing songs
   */
  export function stop(tracks?: string[]): boolean

  /**
   * sets the state of shuffle-mode
   */
  export function setShuffle(state: boolean): void

  /**
   * returns the current volume (0-100)
   */
  export function getVolume(): number

  /**
   * sets the volume (0-100)
   */
  export function setVolume(volume: number): boolean

  /**
   * returns the position of the current track
   */
  export function getTrackPosition(): number

  /**
   * seeks to a specific position
   * @param pos new position in seconds
   */
  export function seek(pos: number): void

  /**
   * returns if the audio output has been muted
   */
  export function isMute(): boolean 

  /**
   * enables/disables mute
   */
  export function setMute(mute: boolean): boolean

  /**
   * returns whether the bot is playing music
   */
  export function isPlaying(): boolean

  /**
   * plays audio returned from the text-to-speech engine
   */
  export function say(text: string, locale?: string): void

  /**
   * sets the volume of a specific stream (0-100)
   */
  export function setStreamVolume(streamid: string, volume: number): boolean

}