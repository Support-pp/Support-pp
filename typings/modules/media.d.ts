import { Track } from "../interfaces/Track"
import { Playlist } from "../interfaces/Playlist"

export module Media {

  /**
   * plays a track via internal url
   * @param url Internal Track-URL (see Track#url , something like track://...)
   */
  export function playURL(url: string): boolean

  /**
   * returns the current track
   */
  export function getCurrentTrack(): Track

  /**
   * returns the track with the given ID (or null if none was found)
   */
  export function getTrackByID(id: string): Track

  /**
   * returns all tracks
   */
  export function getTracks(): Track[]

  /**
   * searches for tracks matching the search term, returns 20 entries at most
   */
  export function search(pattern: string): Track[]

  /**
   * adds the given url to the queue
   * @param url Internal Track-URL (see Track#url , something like track://...)
   */
  export function enqueue(url: string): boolean

  /**
   * adds the given url as the first entry in the queue
   * @param url Internal Track-URL (see Track#url , something like track://...)
   */
  export function playAsNext(url: string): boolean

  /**
   * Plays the next track of the queue / playlist
   */
  export function playNext(): boolean

  /**
   * plays the next previous of the queue / playlist
   */
  export function playPrevious(): boolean

  /**
   * stops playback completely
   * @param trackID the track to stop - if not present, all tracks will be stopped
   */
  export function stop(trackID?: string): boolean

  /**
   * returns all tracks of the queue
   */
  export function getQueue(): Track[]

  /**
   * returns all playlists
   */
  export function getPlaylists(): Playlist[]

  /**
   * returns the playlists with the given id
   */
  export function getPlaylistByID(id: string): Playlist

  /**
   * returns the currently active playlist
   */
  export function getActivePlaylist(): Playlist

  /**
   * removes the track at a given position from the queue
   */
  export function removeFromQueue(index: number): boolean

  /**
   * removes all entries from the queue
   */
  export function clearQueue(): boolean

  /**
   * clears the current playlist (if set) so that playback won't continue inside that playlist
   */
  export function clearPlaylist(): boolean

  /**
   * plays a file via youtube-dl.
   * @param url url that youtube-dl supports
   * @returns track-id (last part of Track-URL: track:// )
   */
  export function yt(url: string): string

  /**
   * streams something via youtube-dl
   * @param url url that youtube-dl supports
   */
  export function ytStream(url: string): boolean

  /**
   * downloads a file via youtube-dl, optionally plays it
   * @param url url that youtube-dl supports+
   * @param play determines if the track should be played after downloading
   * @returns track-id (last part of Track-URL: track:// )
   */
  export function ytdl(url: string, play: boolean): string

  /**
   * enqueues a stream via youtube-dl
   * @param url url that youtube-dl supports
   * @returns track-id (last part of Track-URL: track:// )
   */
  export function enqueueYt(url: string): string

  /**
   * downloads a file via youtube-dl, then enqueues it
   * @param url url that youtube-dl supports
   * @returns track-id (last part of Track-URL: track:// )
   */
  export function enqueueYtdl(url: string): string

}