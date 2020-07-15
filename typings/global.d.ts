import { Engine } from "./modules/engine"
import { Backend } from "./modules/backend"
import { Store } from "./modules/store"
import { Event } from "./modules/event"
import { Media } from "./modules/media"
import { Format } from "./modules/format"
import { Helpers } from "./modules/helpers"
import { Net } from "./modules/net"
import { Http } from "./modules/http"
import { Audio } from "./modules/audio"
import { Ws } from "./modules/ws"
import { Db } from "./modules/db"
import { Fs } from "./modules/fs"
import { Graphics } from "./modules/graphics"
import { Crypto } from "./modules/crypto"
//import { console as Console } from "./modules/console"

import { Command } from "./external/command"

import type { SinusbotMeta } from "./meta"

export interface Module {
  exports: any
}

declare global {
  /**
   * ```typescript
   * registerPlugin({
   *  name: "Example",
   *  version: "1.0.0",
   *  description: "simple showcase",
   *  author: "John Doe <john.doe@example.com>"
   * }, () => {
   *  const engine = require("engine")
   *  engine.log("Hello World!")
   * })
   * ```
   * @param meta basic script informations
   * @param callback script environment
   */
  function registerPlugin<T>(
    meta: SinusbotMeta,
    callback: (sinusbot: null, config: T, meta: SinusbotMeta) => void
  ): void

  /** enumerations */

  function clearInterval(interval: number): void
  function clearTimeout(interval: number): void
  function setInterval(callback: (...args: any[]) => void, interval: number, ...args: any[]): number
  function setTimeout(callback: (...args: any[]) => void, timeout: number, ...args: any[]): number

  //const console: typeof Console
  const module: Module

  function require(name: "engine"): typeof Engine
  function require(name: "backend"): typeof Backend
  function require(name: "store"): typeof Store
  function require(name: "event"): typeof Event
  function require(name: "media"): typeof Media
  function require(name: "audio"): typeof Audio
  function require(name: "format"): typeof Format
  function require(name: "helpers"): typeof Helpers
  function require(name: "http"): typeof Http
  function require(name: "net"): typeof Net
  function require(name: "ws"): typeof Ws
  function require(name: "db"): typeof Db
  function require(name: "fs"): typeof Fs
  function require(name: "graphics"): typeof Graphics
  function require(name: "crypto"): typeof Crypto

  /** 3rd party scripts */
  function require(name: "command"): typeof Command

  function require(name: string): any
}