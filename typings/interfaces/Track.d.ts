export interface Track {
  
  /**
   * returns the unique id of the track
   */
  id(): string
  
  /**
   * returns the unique url of the track
   */
  url(): string
  
  /**
   * returns the type of the file
   */
  type(): string
  
  /**
   * returns the title of the track
   */
  title(): string
  
  /**
   * returns the artist of the track
   */
  artist(): string
  
  /**
   * returns the temporary title of the track
   * e.g. when playing a radio station
   */
  tempTitle(): string 
  
  /**
   * returns the temporary artist of the track
   * e.g. when playing a radio station
   */
  tempArtist(): string 
  
  /**
   * returns the album of the track
   */
  album(): string
  
  /**
   * returns the genre of the track
   */
  genre(): string 
  
  /**
   * returns the duration of the track in milliseconds
   */
  duration(): number
  
  /**
   * returns the tracknumber of the track
   */
  trackNumber(): number
  
  /**
   * returns the path to the thumbnail if available
   */
  thumbnail(): string
  
  /**
   * returns the original filename
   */
  filename(): string
  
  /**
   * starts to play this track
   */
  play(): boolean
  
  /**
   * adds the track to the queue
   */
  enqueue(): boolean
  
  /**
   * adds the track as the first entry in the queue
   */
  addNext(): boolean
  
  /**
   * sets a new thumbnail from given url
   */
  setThumbnailFromUrl(url: string): void
  
  /**
   * removes the thumbnail of the track
   */
  removeThumbnail(): void
  
  /**
   * returns the source url
   */
  sourceURL(): void
}