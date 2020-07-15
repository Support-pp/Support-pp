import { PlaylistTrack } from "./PlaylistTrack"

export interface Playlist {

  /**
   * returns the id of the playlist
   */
  id(): string

  /**
   * returns the name of the playlist
   */
  name(): string

  /**
   * returns an array of tracks in the playlist
   */
  getTracks(): PlaylistTrack[]

  /**
   * sets the playlist to active
   * will continue playing songs from this playlist
   */
  setActive(): boolean

}