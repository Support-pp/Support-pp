
/*
Copyright (C) 2017 VerHext <support@allesverhext.de>

This work is licensed under the Creative Commons 

Attribution-NonCommercial-ShareAlike 4.0

International License. To view a copy of this license, 
visit http://creativecommons.org/licenses/by-nc-sa/4.0/.
*/

registerPlugin({

    name: 'Support++',
    version: '0.1',
    description: 'Erweitertes Support Script + Ticket System + Telegram Benachichtigung + Channel umbenennen',
    author: 'VerHext <support@allesverhext.de>',
    translator: 'LEpEX',
    engines: '>= 0.9.16'

    vars: [{
        name: 'spSupporterId',
        title: 'Supporter Servergruppen ID - Mit Komma trennen [Kein LEERZEICHEN]',
        placeholder: '44,9,11 (usw..)',
        type: 'string'
    }, {
        name: 'spIgnoreId',
        title: 'Ignorierte Servergruppen - Mit Komma trennen [Kein LEERZEICHEN]',
        placeholder: '44,9,11 (usw..)',
        type: 'string'
    }, {
        name: 'spSupportChannel',
        title: 'Wähle den Support-Channel aus.',
        type: 'channel'
    }, {
        name: 'spSupportUserMessage',
        title: 'Nachricht an den User, beim betreten des Suppurt Channels. [Variable &u = Username]',
        placeholder: 'Hey &u, ein Supporter wurde soebend informiert mit (!T) kannst du ein Ticket Erstellen!',
        type: 'string'
    }, {
        name: 'spSupportMessage',
        title: 'Nachricht an den Supporter, wenn ein User den Support Channel betritt. [Variable &u = Username]',
        placeholder: 'Der User u% benötigt Support, bitte kümmere dich um ihn!',
        type: 'string'
    }, {
        name: 'spSupportUserNoMessage',
        title: 'Nachricht wenn kein Supporter Online ist. [Variable &u = Username]',
        placeholder: 'Hi &u, leider ist momentan kein Supporter online [WENN EINGESTELLT] (mit dem Befehl !t kannst du ein Ticket erstellen)!',
        type: 'string'
    }, {
        name: 'spSupportUserIgnoreMessage',
        title: 'Nachricht wenn der User keinen Support bekommt. [Variable &u = Username]',
        placeholder: 'Hi %u, du bekommst leider Keinen Support, bitte verlasse den Channel.',
        type: 'string'
    }, {
        name: 'spTicketCommand',
        title: 'Befehl um ein Ticket zu  erstellen(z.B. !ticket)',
        placeholder: '!t | !ticket | !tr ...',
        type: 'string'
    }, {
        name: 'spTicketSendMsg',
        title: 'Nachricht wenn das Ticket erfolgreich versendet wurde. [Variable &u = Username]',
        placeholder: 'Dein Ticket wurde erfolgreich versendet',
        type: 'string'
    }, {
        name: 'spNewTicketMsg',
        title: 'Nachricht an den Supporter wenn ein Neues Ticket erstellt wurde. [Variable &u = Username]',
        placeholder: 'Ein Neues Ticket von u% !',
        type: 'string'
    }, {
        name: 'spMsgMode',
        title: 'Benachrichtigungsmodus',
        type: 'select',
        options: ['Anstupsen', 'Nachricht (Chat)']
    }, {
        name: 'spEmailModeTicket',
        title: 'Ticket Benachigtigunsmodus mit Telegram',
        type: 'select'
        options: ['Immer', 'Kein Supporter Online!', 'Nie']
    }, {
        name: 'spEmailModeSupport',
        title: 'Support Channel Benachigtigunsmodus mit Telegram',
        type: 'select'
        options: ['Immer', 'Kein Supporter Online!', 'Nie']
    }, {
        name: 'spTelegramID',
        title: 'Telegram Id, öffne den Link:  https://telegram.me/tssupport_bot . Schreibe Ihn mit /id an. Du bekomst deine Id!',
        placeholder: '123456789 (Nicht weitergeben...)',
        type: 'string'
    }, {
        name: 'spTelegramToken',
        title: 'Telegram Token, öffne den Link:  https://telegram.me/tssupport_bot . Schreibe Ihn mit /id an. Du bekomst deineen Token!',
        placeholder: '987654321 (Nicht weitergeben...)',
        type: 'string'
    }, {
        name: 'spTelegrammTextSupport',
        title: 'Support | Telegramm Nachricht wenn ein user den Support-Channel betritt. [Variables: &u = username]',
        placeholder: 'Hey Support Team,\n\n der User &u  hat den Support-Channel betretenund und benötigt Support.\n\n Bitte Hilfe ihm wenn möglich!\n Danke ;)',
        type: 'multiline'
    }, {
        name: 'spTelegrammTextTicket',
        title: 'Ticket | Telegramm Nachricht vom Ticket [Variables: &u = Username | &msg = Nachricht]',
        placeholder: 'Hi Supporter,\n\n neues Ticket von :\nName: &u\nNachricht: &msg\n\n Bitte bearbeite das Ticket. Danke ;)',
        type: 'multiline'
    }, {
        name: 'spSupportChannelRenameMode',
        title: 'Channel umbennen?'
        type: 'select'
        options: ['Ja', 'Nein']
    }, {
        name: 'spSupportChannelNameOnlineMsg',
        title: 'Channel Name wenn der Support-Channel geöffnet ist. (!online)',
        placeholder: '[cspacer]Support [Online]',
        type: 'string'
    }, {
        name: 'spSupportChannelNameOfflineMsg',
        title: 'Channel Name wenn der Support-Channel geschlossen ist. (!offline)',
        placeholder: '[cspacer]Support [Offline]',
        type: 'string'
    }, {
        name: 'spSupportChannelNameChange',
        title: 'Wähle den Channel aus welche umbenannt werden soll.',
        type: 'channel'
    }],

}, function(engine, config, info) {

    //NOTE: Engine 2 Variablen
    var event = require('event');
    var engine = require('engine');
    var backend = require('backend');

    //NOTE: Variablen
    var spIgnoreId = config.spIgnoreId.split(',');
    var spSupporterId = config.spSupporterId.split(',');


    event.on('clientMove', function(ev) {

        //NOTE: Check Support Channel
        ev.client.getChannels().forEach(function(channel) {
            if (channel.id() == config.spSupportChannel) {
                //NOTE: Check Ignore user
                var ignore = false;

                ev.client.getServerGroups().forEach(function(group) {
                    spIgnoreId.forEach(function(group2) {
                        if (group.id() == group2) {
                            ignore = true;
                        }
                    })
                });
                if (!(ignore)) {
                    var SupporterOnline = false;
                    backend.getClients().forEach(function(client) {
                        client.getServerGroups().forEach(function(group) {
                            spSupporterId.forEach(function(group2) {
                                if (group.id() == group2) {
                                    SupporterOnline = true;
                                    if (config.spMsgMode == 0) {
                                        client.poke('[B]Support | [/B]' + config.spSupportMessage.replace("&u", ev.client.name()));
                                    } else {
                                        client.chat('[B]Support | [/B]' + config.spSupportMessage.replace("&u", ev.client.name()));
                                    }
                                }
                            })
                        })
                    });


                    //NOTE: Needed Supporter Notification....
                    if (SupporterOnline) {
                        var spTelegrammTextSupport = config.spTelegrammTextSupport.replace("&u", ev.client.name());

                        if (config.spMsgMode == 0) {
                            ev.client.poke('[B]Support | [/B]' + config.spSupportUserMessage.replace("&u", ev.client.name()));
                        } else {
                            ev.client.chat('[B]Support | [/B]' + config.spSupportUserMessage.replace("&u", ev.client.name()));
                        }

                        if (config.spEmailModeTicket == 0) {
                            http({

                                url: "https://api.allesverhext.de/extern/sinusbot/support/check.php?id=" + config.spTelegramID + "&token=" + config.spTelegramToken + "&msg=" + encodeURIComponent(spTelegrammTextSupport),
                                "timeout": 60000,
                            });
                            engine.log('Telegramm msg was sent....')
                        }
                    } else {
                        if (config.spMsgMode == 0) {
                            ev.client.poke('[B]Support | [/B]' + config.spSupportUserNoMessage.replace("&u", ev.client.name()));
                        } else {
                            ev.client.chat('[B]Support | [/B]' + config.spSupportUserNoMessage.replace("&u", ev.client.name()));
                        }
                        if (config.spEmailModeTicket == 0 || config.spEmailModeTicket == 1) {
                            var spTelegrammTextSupport = config.spTelegrammTextSupport.replace("&u", ev.client.name());
                            http({

                                url: "https://api.allesverhext.de/extern/sinusbot/support/check.php?id=" + config.spTelegramID + "&token=" + config.spTelegramToken + "&msg=" + encodeURIComponent(spTelegrammTextSupport),
                                "timeout": 60000,
                            });
                            engine.log('Telegramm msg was sent....')
                        }
                    }
                } else {
                    if (config.spMsgMode == 0) {
                        ev.client.poke('[B]Support | [/B]' + config.spSupportUserIgnoreMessage.replace("&u", ev.client.name()));
                    } else {
                        ev.client.chat('[B]Support | [/B]' + config.spSupportUserIgnoreMessage.replace("&u", ev.client.name()));
                    }
                }
            };
        });
    });

    //###################################################### { Ticket } #####################################################################################

    event.on('chat', function(ev) {


        if (ev.text.indexOf(config.spTicketCommand) != -1) {
            var rTicket = ev.text.replace(config.spTicketCommand, '');
            engine.log(rTicket)
            var SupporterOnline = false;
            backend.getClients().forEach(function(client) {
                client.getServerGroups().forEach(function(group) {
                    spSupporterId.forEach(function(group2) {
                        if (group.id() == group2) {
                            SupporterOnline = true;

                            if (SupporterOnline) {
                                if (config.spMsgMode == 0) {
                                    client.poke('[B]Ticket | [/B]' + config.spNewTicketMsg.replace("&u", ev.client.name()));
                                } else {
                                    client.chat('[B]Ticket | [/B]' + config.spNewTicketMsg.replace("&u", ev.client.name()));
                                }
                                client.chat('[B]Ticket | [/B]' + rTicket);

                                if (config.spEmailModeTicket == 0) {
                                  var spTelegrammTextTicket = config.spTelegrammTextTicket.replace("&u", ev.client.name());
                                  var spTelegrammTextTicket = spTelegrammTextTicket.replace("&msg", rTicket);
                                  http({

                                      url: "https://api.allesverhext.de/extern/sinusbot/support/check.php?id=" + config.spTelegramID + "&token=" + config.spTelegramToken + "&msg=" + encodeURIComponent(spTelegrammTextTicket),
                                      "timeout": 60000,
                                  });
                                  engine.log('Telegramm msg was sent....')

                                }
                            }
                        }
                    })
                })
            });
            if (config.spMsgMode == 0) {
                ev.client.poke('[B]Ticket | [/B]' + config.spTicketSendMsg.replace("&u", ev.client.name()));
            } else {
                ev.client.chat('[B]Ticket | [/B]' + config.spTicketSendMsg.replace("&u", ev.client.name()));
            }

            if (SupporterOnline == false) {
                if (config.spEmailModeTicket == 0 || config.spEmailModeTicket == 1) {
                  var spTelegrammTextTicket = config.spTelegrammTextTicket.replace("&u", ev.client.name());
                  var spTelegrammTextTicket = spTelegrammTextTicket.replace("&msg", rTicket);
                  http({

                      url: "https://api.allesverhext.de/extern/sinusbot/support/check.php?id=" + config.spTelegramID + "&token=" + config.spTelegramToken + "&msg=" + encodeURIComponent(spTelegrammTextTicket),
                      "timeout": 60000,
                  });
                  engine.log('Telegramm msg was sent....')
              }
            }
        }
        //NOTE: Remove this watermarket ist deny! Reed the GNU!
        if (ev.text == '!help' || ev.text == '!info') {
            ev.client.chat('Support++ by VerHext. Thanks for use. (translation [DE] by LEpEX)')
        }
        if (config.spSupportChannelRenameMode == 0) {
            if (ev.text == '!offline') {
                backend.getClients().forEach(function(client) {
                    client.getServerGroups().forEach(function(group) {
                        spSupporterId.forEach(function(group2) {
                            if (group.id() == group2) {
                                channelUpdate(config.spSupportChannelNameChange, {
                                    name: (config.spSupportChannelNameOfflineMsg)
                                });
                            }
                        })
                    })
                });
            }
            if (ev.text == '!online') {
                backend.getClients().forEach(function(client) {
                    client.getServerGroups().forEach(function(group) {
                        spSupporterId.forEach(function(group2) {
                            if (group.id() == group2) {
                                channelUpdate(config.spSupportChannelNameChange, {
                                    name: (config.spSupportChannelNameOnlineMsg)
                                });
                            }
                        })
                    })
                });
            }
        }
    });

});
