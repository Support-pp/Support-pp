///<reference path="../node_modules/sinusbot-scripting-engine/tsd/types.d.ts" />

/***
 *  Welcome to Support++ v3. 
 */

registerPlugin(Config.getScriptConfig(), function (sinusbot: any, config: any, info: any) {

    const engine = require('engine');

    
    engine.log(`    > Start Support++ <${Config.getScriptConfig().version}>`);
    engine.log('Hallo Welt!');
    
});