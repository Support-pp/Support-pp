/// <reference path="../languages/en.ts"/>
/// <reference path="../languages/de.ts"/>
// [!] Add the language filed manuell. 

class LanguageHandler {
    public static getLanguage(lang: string): ILanguageBase {
        let language: ILanguageBase;

        switch (lang) {
            case "en":
                language = LanguageEN.getTranslation();
                break;
            case "de":
                language = LanguageDE.getTranslation();
                break;
            default:
                language = LanguageEN.getTranslation();
                break;
        }

        return language;
    }
}