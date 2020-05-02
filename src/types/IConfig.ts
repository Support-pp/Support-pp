interface ScriptConfig {
    name: string
    author: string
    description: string
    version: string
    //optional fields
    autorun?: boolean
    enableWeb?: boolean,
    engines?: EngineVersion,
    requiredmodules?: string[] 
    vars?: [],
}



enum EngineVersion{
    ">= 0.10.7",
    ">= 1.0.0",
    ">= 1.1.1"
}