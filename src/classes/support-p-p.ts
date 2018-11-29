import {ILanguageBase} from "../interfaces/ILanguageBase";
import {LanguageHandler} from "./language-handler";
import {ManifestConfig} from "./manifest-config";

export class SupportPP {
    event: Event;
    engine: Engine;
    backend: Backend;
    media: Media;
    audio: Audio;
    store: Store;
    db: DB;
    helpers: Helpers;
    lang: ILanguageBase;

    constructor(private sinusbot: any, private config: any, private info: any) {
        this.importModules();
        this.checkConfig();
    }

    private importModules() {
        this.event = require('event');
        this.engine = require('engine');
        this.backend = require('backend');
        this.media = require('media');
        this.audio = require('audio');
        this.store = require('store');
        this.db = require('db');
        this.helpers = require('helpers');
        this.lang = LanguageHandler.getLanguage(this.config.spLanguage);
        ManifestConfig.setLang(this.lang);
    }

    private checkConfig() {
        if (!this.config)
            this.config = {};
        if (!this.config.spSupportUserNoMessage) {
            this.config.poke = this.lang.manifest.spSupportUserNoMessage;
            this.engine.saveConfig(this.config);
        }
        if (!this.config.spSupportUserIgnoreMessage) {
            this.config.poke = this.lang.manifest.spSupportUserIgnoreMessage;
            this.engine.saveConfig(this.config);
        }
    }
}