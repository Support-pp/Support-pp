import { Client } from "../interfaces/Client"
import { Channel } from "../interfaces/Channel"
import { DiscordMessage } from "../interfaces/DiscordMessage"

export module Command {

  /**
   * creates a new command Instance with the given command Name
   * @example
   * command.createCommand("ping")
   *  .help("responds with pong")
   *  .exec((_, _, reply) => reply("pong"))
   */
  export function createCommand(cmd: string, overrides?: "YES_I_KNOW_THAT_I_SHOULD_NOT_USE_COMMANDS_WITH_LENGTH_OF_ONE"): Command

  export function createArgument(type: "client"): ClientArgument
  export function createArgument(type: "number"): NumberArgument
  export function createArgument(type: "string"): StringArgument
  export function createArgument(type: "rest"): RestArgument

  /**
   * creates a new instance of command group
   */
  export function createCommandGroup(name: string): CommandGroup

  /**
   * creates a new instance of command group
   */
  export function createGroupedArgument(type: "and"|"or"): GroupArgument

  /**
   * returns the currently used command prefix
   */
  export function getCommandPrefix(): string

  /**
   * creates a new Throttle instance
   */
  export function createThrottle(): Throttle

  /**
   * retrieves the semantic version of this script
   */
  export function getVersion(): string

  export const collector: CommandCollector
}

export namespace Command {
  export interface MessageEvent {
    text: string
    client: Client
    channel: Channel 
    mode: 0|1|2|3,
    message: DiscordMessage
  }
  
  export function replyCallback(message: string): void
  export function execCallback(client: Client, args: any, reply: typeof replyCallback, event: MessageEvent): void
  export function checkPermissionCallback(client: Client): boolean
  
  export class CommandDisabledError extends Error {}
  export class ThrottleError extends Error {}
  export class ParseError extends Error {}
  export class TooManyArguments extends Error {
    parseError: ParseError
  }
  export class SubCommandNotFound extends Error {}
  export class PermissionError extends Error {}
  
  
  export type ArgumentCreator = (args: {
    string: StringArgument
    number: NumberArgument
    client: ClientArgument
    rest: RestArgument
    or: GroupArgument
    and: GroupArgument
  }) => Argument<any>


  /*export enum GroupArgumentType {
    OR = "or",
    AND = "and"
  }*/
  
  /*export enum ArgumentType {
    CLIENT = "client",
    NUMBER = "number",
    STRING = "string",
    REST = "rest"
  }*/
  
  /*export enum OverrideType {
    YES_I_KNOW_THAT_I_SHOULD_NOT_USE_COMMANDS_WITH_LENGTH_OF_ONE = "YES_I_KNOW_THAT_I_SHOULD_NOT_USE_COMMANDS_WITH_LENGTH_OF_ONE"
  }*/
  
  
  
  export class CommandCollector {
    /**
     * checks if the command uses a valid command name
     * @param name the name which should be checked
     * @param allowSingleChar wether it should allow single char commands as name
     */
    static validateCommandName(name: string, allowSingleChar: boolean): boolean
  
    /**
     * searches for one or multiple enabled commands with its prefix
     * @param cmd the command with its prefix
     */
    getAvailableCommandsWithPrefix(cmd: string): Command[]
  
    /**
     *  checks if the input string might be a valid command
     * @param cmd the input string from a message
     */
    isPossibleCommand(cmd: string): boolean
  
    /**
     * Returns all possible prefixes
     */
    getPrefixes(): string[]
  
    /**
     * Registers a new Command
     * @param cmd the command which should be registered
     */
    registerCommand(cmd: Command): Command
  
    /**
     * gets all available commands
     * @param client the sinusbot client for which the commands should be retrieved if none has been omitted it will retrieve all available commands
     * @param cmd the command which should be searched for
     */
    getAvailableCommands(client?: Client, cmd?: string): Command
  
    /**
     *
     * @param name the name which should be searched for
     */
    getCommandByName(name: string): Command
  }
  
  
  
  export class Throttle {
    /**
     * defines how fast points will get restored
     * @param duration time in ms how fast points should get restored
     */
    tickRate(duration: number): Throttle
  
    /**
     * the amount of points a command request costs
     * @param amount the amount of points that should be reduduced
     */
    penaltyPerCommand(amount: number): Throttle
  
    /**
     * the amount of points that should get restored per tick
     * @param amount the amount that should get restored
     */
    restorePerTick(amount: number): Throttle
  
    /**
     * sets the initial points a user has at beginning
     * @param initial the initial amount of Points a user has
     */
    initialPoints(initial: number): Throttle
  
    /**
     * reduces the given points for a command for the given client
     * returns true or false depending if the client has reached the throttle limit
     * @param client the client which points should be removed
     */
    throttle(client: Client): boolean
  
    /**
     * Checks if the given Client is affected by throttle limitations
     * @param client the sinusbot client that should get checked
     */
    isThrottled(client: Client): boolean
  
    /**
     * returns the time in milliseconds until a client can send his next command
     * @param client the client which should be checked
     */
    timeTillNextCommand(client: Client): number
  }
  
  
  
  export class Argument<T> {
    /**
     * sets an Argument as optional
     * if the argument has not been parsed successful,
     * it will use the first argument which has been given inside this method
     * @param fallback the default value which should be set if this parameter has not been found
     * @param displayDefault wether it should display the default value when called with the #getUsage method
     */
    optional(fallback?: any, displayDefault?: boolean): T
  
    /**
     * retrieves the default value if it had been set
     */
    getDefault(): any
  
    /**
     * checks if the Argument has a default value
     */
    hasDefault(): boolean 
  
    /**
     * gets the manual of a command
     */
    getManual(): string
  
    /**
     * checks if the argument is optional
     */
    isOptional(): boolean
  
    /**
     * sets a name for the argument to identify it later when the command gets dispatched
     * this name will be used when passing the parsed argument to the exec function
     * @param name sets the name of the argument
     * @param display sets a beautified display name which will be used when the getManual command gets executed, if none given it will use the first parameter as display value
     */
    setName(name: string, display?: string): T
  
    /**
     * retrieves the name of the Argument
     */
    getName(): string
  }
  
  
  
  export class GroupArgument extends Argument<GroupArgument> implements ArgumentInterface {
    /**
     * Validates the given String to the GroupArgument
     * @param {string} args the remaining args
     */
    validate(args: string): any
  
    /**
     * Adds one or multiple argument to the validation chain
     * @param {...string} args the arguments to use
     */
    addArgument(...args: ArgumentInterface[]): GroupArgument
  }
  
  
  
  export class ClientArgument extends Argument<ClientArgument> implements ArgumentInterface {
    validate(args: string): any
  }
  
  
  
  export class StringArgument extends Argument<StringArgument> implements ArgumentInterface {
    validate(args: string): any
    match(regex: RegExp): StringArgument
    max(len: number): StringArgument
    min(regex: number): StringArgument
    forceUpperCase(): StringArgument
    forceLowerCase(): StringArgument
    whitelist(words: string[]): StringArgument
  }
  
  
  
  export class NumberArgument extends Argument<NumberArgument> implements ArgumentInterface {
    validate(args: string): any
    match(regex: RegExp): NumberArgument
    max(len: number): NumberArgument
    min(regex: number): NumberArgument
    integer(): NumberArgument
    positive(): NumberArgument
    negative(): NumberArgument
  }
  
  
  
  export class RestArgument extends Argument<RestArgument> implements ArgumentInterface {
    validate(args: string): any
  }
  
  
  
  export class Command {
    /**
     * returns the current command name
     */
    getCommandName(): string
  
    /**
     * returns the current command name with its prefix
     */
    getFullCommandName(): string
  
    /**
     * Forces a different Prefix then given by the Instance Settings
     * THIS SHOULD ONLY BE USED WHEN HAVING A GOOD REASON TO DO SO
     * @param prefix the prefix for this command
     */
    forcePrefix(prefix: string): Command
  
    /**
     * returns the current prefix for which the command listens to
     */
    getPrefix(): string
  
    /**
     * sets a short help text for the help command (used inside the !help command)
     * This should be a very brief description of what the command does
     * @param text the short text for the help command
     */
    help(text: string): Command
  
    /**
     * checks if the command has a help text
     */
    hasHelp(): boolean
  
    /**
     * returns the short help command
     */
    getHelp(): string
  
    /**
     * adds an Instance of the throttle class
     */
    throttle(throttle: typeof Throttle): Command
  
    /**
     * disables the command
     * it can be enabled again with #enable()
     */
    disable(): Command
  
    /**
     * enables the command
     */
    enable(): Command
  
    /**
     * checks if the command is currently enabled
     */
    isEnabled(): boolean
  
    /**
     * sets the function which should get executed when a command gets triggered
     */
    exec(callback: typeof execCallback): Command
  
    /**
     * dispatches a command
     */
    dispatchCommand(args: any, ev: MessageEvent): Command
  
    /**
     * sets a detailed manual command on how to use the command the manual command can be called multiple times
     * for every call it will add it as a new line use this to create a detailed documentation for your command
     * @param text sets a line of the manual text
     */
    manual(text: string): Command
  
    /**
     * checks if the command has a manual text
     */
    hasManual(): boolean
  
    /**
     * returns the Manual text
     */
    getManual(): string
  
    /**
     * returns the usage of the command with its parameterized names
     */
    getUsage(): string
  
    /**
     * checks if the client has permissions to execute this command takes a function as argument
     * which will be called on every permission test the function will receive the sinusbot client object as first parameter,
     * the callback should return a true value when the client is allowed to execute the command
     */
    checkPermission(callback: typeof checkPermissionCallback): Command
  
    /**
     * checks if a Client is allowed to use the command
     */
    isAllowed(client: Client): boolean
  
    /**
     * runs a command
     */
    run(args: string, ev: MessageEvent): Promise<void>
  
    /**
     * validates the command with the given arguments
     */
    validate(args: string): { [key: string]: any }
  
    /**
     * validates the given input string to all added arguments
     */
    validateArgs(args: string): any
  
    /**
     * adds an argument to the command
     */
    addArgument(argument: Argument<any>|ArgumentCreator): Command
  
    /**
     * retrieves all available arguments
     */
    getArguments(): Argument<any>[]
  }
  
  
  
  export class CommandGroup extends Command {
  
    /**
     * adds a new sub Commmand to the group
     * @param name the sub command name which should be added
     */
    addCommand(name: string): SubCommand
  
    /**
     * returns a subcommand by its command name
     * @param name the name which should be searched for
     */
    findSubCommandByName(name: string): SubCommand
  
    /**
     * retrievel all available subcommands
     * @param client the sinusbot client for which the commands should be retrieved if none has been omitted it will retrieve all available commands
     * @param cmd the command which should be searched for
     */
    getAvailableSubCommands(client?: Client, cmd?: string): SubCommand[]
  
    /**
     * Checks if a Client is allowed to use the GroupArgument and at least one of the sub commands
     * When the GroupArgument Permission check returns false then every the client is not allowed to access any sub command
     * @param client the sinusbot client object to check against
     */
    isAllowed(client: Client): boolean
  
    /**
     * Runs a command
     * @param args the raw argument string
     * @param ev the raw event
     */
    run(args: string, ev: MessageEvent): Promise<void>
  
  }
  
  export class SubCommand extends Command { }
  
  
  export interface ArgumentInterface {
    validate(args: string): any
    getName(): string
    getManual(): string
    getDefault(): any
    isOptional(): boolean
  }
}