interface ScriptConfig {
    name: string
    author: string
    description: string
    version: string
    //optional fields
    autorun?: boolean
    enableWeb?: boolean,
    engines?: EngineVersion,
    requiredmodules?: string[] ,
    backends: string[]
    vars?: [],
}

enum Backends{
    "ts3",
    "discord"
}

enum EngineVersion{
    ">= 0.10.7",
    ">= 1.0.0",
    ">= 1.1.1"
}