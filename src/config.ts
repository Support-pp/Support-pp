/// <reference path="./handler/LanguageHandler.ts"/>
/// <reference path="./types/IConfig.ts"/>
/// <reference path="./types/ILanguageBase.ts"/>

class Config{

    //Define the language - required manuel change at the moment.
    public static VERSION = "3.0.x";

    private static LANG: ILanguageBase;

    public static setLanguage(lang: ILanguageBase) {
        this.LANG = lang;
    }

    public static getScriptConfig() : ScriptConfig{
          
        if (!this.LANG){
            this.setLanguage(LanguageHandler.getLanguage("de"))
        }

        return {
            name: this.LANG.scriptConfig.name,
            author: this.LANG.scriptConfig.author,
            description: this.LANG.scriptConfig.description,
            version: this.VERSION,
            backends: ["ts3", "discord"],
            requiredmodules: ["net", "fs", "db"]
    
        }
     
    }

}