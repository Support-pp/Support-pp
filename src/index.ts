///<reference path="./config.ts"/>
///<reference path="../node_modules/sinusbot-scripting-engine/tsd/types.d.ts" />


/***
 *  Welcome to Support++ v3. 
 */
//DEV:: tsc && sudo mv ./dist/support.js /opt/sinusbot/scripts/support-pp.js && docker restart 1607214b898a

registerPlugin(Config.getScriptConfig(), function (sinusbot: any, config: any, info: any) {

    const engine = require('engine');
    const helpers = require('helpers');
    const net = require('net');
    var cloud : Cloud;

    class logtag
    {
        static DEBUG = "DEBUG";
        static ERROR = "ERROR";
        static SYSTEM = "SYSTEM";
        static INFO = "INFO";
        static SOCKET = "WSS";
    }

    interface command {
        command: string;
        data: string;
        checksum: string;
    }

    //CLOUD class
    class Cloud{

        conn: any
        /***
         * Define a list of allowed Support++ Cloud websocket interfaces.
         * If the checksum changes, the version is not compitable with this version.
         * Or we revoke ist, because there is a secturity issues.
         * And can not be automatic updated. You need to update manually!
         * 
         * Please don't change this version manuelly. Trust us this is a bad idea.
         * We don't change the MD5 Hashes for fun: D
         * 
         * Here is a list of all versions: https://meta.support-pp.de/t/support-cloud-v3-x-version-interface/62
         */
        allowedVersions: string[] = [
            "9b09f6edbb5288db2bc3f17f86704408", //v3.x
            "638b1e92abd10e954549466735baa564" // v3.x#369
        ];

        // Always the same checksum - "Accept the terms of use and privacy policy? [y/n]"
        acceptTosRequest: string = "f876d1ef938a72238c8874cc09bc1977";

        acceptTos: boolean = false;

        isInit: boolean = false;

        sendMessage(msg){
           this.log(msg, logtag.SOCKET);
            this.conn.write(msg)   
        }

        isConnected() : boolean{
            return this.conn ? true : false;
        }

        connect() : boolean{
            this.conn = net.connect({
                url: 'ws://0.tcp.ngrok.io:15721',
                protocol: "ws"
            });
            return this.isConnected()
        }
        disconnect() : boolean{
            this.conn.close()
            this.conn = undefined;
            return !this.isConnected()
        }

        reconnect() : boolean{
            this.disconnect()
            this.connect()
            return this.isConnected();
        }

        log(args: any, lvl: logtag){
            engine.log(`[${lvl}] CLOUD :: ${args}`)
        }
    }

    /**
     * Sorry Flyth, but we got used to it somehow :D
     * console class to use console.log()
     */
    class console{
        public static log(msg: any, lvl?: logtag){
            var logLvl: logtag = lvl;
            if (lvl == undefined)
                logLvl = logtag.DEBUG
            cloud.log(msg, logLvl)
        }
    }

    /**
     * Here start the magic!
     * 
     * Welcome to Support++ Cloud v3
     * 
     * @Lapotor @GamerboomTv @Elias @Nxtmaster @Jniklas2 @VerHext
     */


    cloud = new Cloud();
    cloud.connect();

    cloud.conn.on('data', data => {

        /**
         * INIT and ACCEPT TOS
         */
        const msgMD5 = helpers.MD5Sum(data.toString())

        if (!cloud.acceptTos && !cloud.isInit){
            if (cloud.allowedVersions.includes(msgMD5)){
                cloud.isInit = true;
            }else{
                cloud.disconnect()
                cloud.log("> SUPPORT++ CLOUD INTERFACE OUTDATED! UPDATE VERSION!", logtag.ERROR)
            }
            return;
        }
        //Accept the terms of use and privacy policy. Without you can't use the Support++ Cloud Version 3.x
        if (!cloud.acceptTos && cloud.isInit && msgMD5 == cloud.acceptTosRequest){
            cloud.sendMessage("y");
            cloud.acceptTos = true;
            cloud.sendMessage(JSON.stringify({
                "command": "stats"
            }));
            return;
        }
        /**
         * CONNECTION TO CLOUD SUCCESFUL
         */
        console.log(`MESSAGE :: ${data.toString()}`, logtag.SOCKET)

        try{
            const cmd = JSON.parse(data.toString()) as command;
            switch(cmd.command){
                case "install": {
                    console.log("install plugins")
                }

            }
        }catch(e){
            console.log(e, logtag.ERROR)
        }

      

    })        
    
});