export interface SinusbotMeta {
  name: string,
  version: string,
  description: string,
  author: string,
  hidden?: boolean,
  requiredModules?: ModulesWithSpecialPermission[],
  backends?: Backends[],
  engine?: string,
  vars?: ConfigEntries[],
  autorun?: boolean,
  enableweb?: boolean
}

export type ModulesWithSpecialPermission = "http"|"net"|"ws"|"db"|"fs"|"graphic"
export type Backends = "ts3"|"discord"

export type ConfigEntries = 
  StringEntry |
  StringsEntry |
  PasswordEntry |
  MultilineEntry |
  NumberEntry |
  TrackEntry |
  TracksEntry |
  ChannelEntry |
  CheckboxEntry |
  SelectEntry |
  ArrayEntry

export type ConfigTypes =
  "string" |
  "strings" |
  "password" |
  "multiline" |
  "number" |
  "track" |
  "tracks" |
  "channel" |
  "checkbox" |
  "select" |
  "array"

export interface BaseConfig<T> {
  readonly type: ConfigTypes
  /** key name in the config object */
  readonly name: string,
  /** display name in the webinterface */
  readonly title: string,
  /** default variable if nothing has been set */
  readonly default: T,
  /** placeholder data in the webinterface */
  readonly placeholder?: string
  readonly indent?: number,
  //displays a config option depending on the config name and the value
  readonly conditions?: {
    readonly field: string,
    readonly value: any
  }[]
}

export interface StringEntry extends BaseConfig<string> {
  readonly type: "string"
}

export interface StringsEntry extends BaseConfig<string[]> {
  readonly type: "strings"
}

export interface PasswordEntry extends BaseConfig<string> {
  readonly type: "password"
}

export interface MultilineEntry extends BaseConfig<string> {
  readonly type: "multiline"
}

export interface NumberEntry extends BaseConfig<number> {
  readonly type: "number"
}

export interface TrackEntry extends BaseConfig<string> {
  readonly type: "track"
}

export interface TracksEntry extends BaseConfig<string> {
  readonly type: "tracks"
}

export interface ChannelEntry extends BaseConfig<string> {
  readonly type: "channel"
}

export interface CheckboxEntry extends BaseConfig<Boolean> {
  readonly type: "checkbox"
}

export interface SelectEntry extends BaseConfig<string> {
  readonly type: "select"
  readonly options: string[]
}

export interface ArrayEntry extends BaseConfig<any[]> {
  readonly type: "array"
  readonly vars: ConfigEntries[]
}