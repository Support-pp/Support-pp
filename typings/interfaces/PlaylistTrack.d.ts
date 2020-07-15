export interface PlaylistTrack {
  
  /**
   * returns the title of the track
   */
  title(): string
  
  /**
   * returns the artist of the track
   */
  artist(): string
  
  /**
   * returns the album of the track
   */
  album(): string
  
  /**
   * returns the url of the track
   */
  url(): string
  
  /**
   * plays the track
   */
  play(): boolean
}