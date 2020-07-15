import { Bytes } from "../interfaces/Bytes"


export interface NetConnectParams {

  /**
   * host to connect to
   */
  host?: string,

  /**
   * port to use
   */
  port?: number,

  /**
   * websocket url to use if protocol is "ws"
   */
  url?: string,

  /**
   * the protocol to use, either udp, tcp or ws
   */
  protocol: "udp"|"tcp"|"ws"
}

/**
 * if an error occured, exactly one parameter containing the error will be handed to the callback
 */
export function NetConnectCallback(error?: string): void

export module Net {
  export function connect(params: NetConnectParams, callback: typeof NetConnectCallback): NetClient
}

export namespace Net {
  export interface NetClient {

    /**
     * sends data over this connection
     */
    write(bytes: string|Bytes|number[], format?: string): void
  
    /**
     * registers a new event handler
     * gets fired whenever data is received
     */
    on(event: "data", callback: (data: Bytes) => void): void
  
    /**
     * registers a new event handler
     * gets fired when the connection gets closed
     */
    on(event: "close", callback: () => void): void
  
    /**
     * registers a new event handler for errors
     * gets fired whenever an error occured
     */
    on(event: "error", callback: (...args: any[]) => void): void
  
    /**
     * closes the current connection
     */
    close(): void
  }
}