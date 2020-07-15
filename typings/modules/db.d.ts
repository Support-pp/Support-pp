/*export enum DatabaseDriver {
  sqlite3 = "sqlite3",
  mysql = "mysql",
  postgres = "postgres"
}*/



/**
 * if an error occured, exactly one parameter containing the error will be handed to the callback
 */
export function DatabaseConnectCallback(error?: string): void

export module Db {

  /**
   * connects to a database
   */
  export function connect(params: DatabaseConnectParams, callback: typeof DatabaseConnectCallback): DBConn

}

export namespace Db {
  export interface DatabaseConnectParams {

    /**
     * driver to use
     * SQLITE driver is currently in memory only
     */
    driver: "sqlite3"|"mysql"|"postgres"
    host?: string
    username?: string
    password?: string
    port?: string
    database?: string
  }

  export interface DBConn {

    /**
     * Use this, if you expect a result set
     * Note: strings will be returned as byte arrays to be binary safe
     * to convert to actual strings, please use helpers.toString(column)
     * @todo
     */
    query(queryString: string, parameters?: any[], callback?: (err: Error, data: any) => void): void
  
    /**
     * use this instead of query if you dont expect a result
     * @todo
     */
    exec(queryString: string, parameters?: any[], callback?: (err: Error) => void): void
  }
}