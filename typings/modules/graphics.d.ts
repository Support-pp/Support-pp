export interface BannerSettings {
  /**
   * file format ("png", "jpeg", "gif", ...)
   */
  format: string

  /**
   * width in pixel
   */
  width: number

  /**
   * height in pixel
   */
  height: number

  /**
   * @todo
   */
  layers: Array<BannerLayer>
}

/**
 * @todo
 */
export interface BannerLayer {
  [key: string]: any
}

export module Graphics {

  /**
   * removes the avatar of sinusbot
   */
  export function removeBanner(): boolean

  /**
   * sets the avatar of sinusbot
   * @param filename without ending
   */
  export function setBanner(filename: string, bannerSettings: BannerSettings, callback: Function): boolean
}