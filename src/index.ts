///<reference path="../node_modules/sinusbot-scripting-engine/tsd/types.d.ts" />
import {ManifestConfig} from "./classes/manifest-config";

registerPlugin(ManifestConfig.getManifest(), function (sinusbot: any, config: any, info: any) {
    const engine = require('engine');
    engine.log('Hallo Welt!');
    // new SupportPP(sinusbot, config, info);
});