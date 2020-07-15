///<reference path="../typings/global.d.ts"/>
///<reference path="./config.ts"/>



/***
 *  Welcome to Support++ v3. 
 */

interface PluginEntry {
    url: string
    name: string
    description: string
    version: string
    author: string 
    
    getUrl() : string
    getName() : string
    getDescription() : string
    getVersion() : string
    getAuthor() : string

    unload() : Promise<boolean>
  }




registerPlugin(Config.getScriptConfig() as Manifest, function (sinusbot: any, config: any, info: any) {

    const command = require("command")
    const engine = require('engine');
    if (!command) throw new Error("Error (500) :: https://meta.support-pp.de/t/500-command-js/56")


    const scmd = command.createCommandGroup("plugin")
        .help("Support++ Plugins")

    scmd.addCommand("list")
        .help("list all installed Support++ plugins.")

    scmd.addCommand("install")
        .addArgument(args => args.string.setName("url"))
        .help("install a support++ plugin.")

    engine.log(`    > Starting Support++`);
    
   
   

    /**PLUGIN REGISTER */



 }
    

    
});