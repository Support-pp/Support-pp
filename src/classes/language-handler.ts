import {ILanguageBase} from "../interfaces/ILanguageBase";
import {LanguageDE} from "../languages/de";
import {LanguageEN} from "../languages/en";

export class LanguageHandler {
    public static getLanguage(lang: number): ILanguageBase {
        let language: ILanguageBase;

        switch (lang) {
            case 0:
                language = LanguageDE.getLanguage().lang;
                break;
            case 1:
                language = LanguageEN.getLanguage().lang;
                break;
            default:
                language = LanguageEN.getLanguage().lang;
                break;
        }

        return language;
    }
}