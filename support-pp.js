//2.0.4.5
/*
Copyright (C) 2017 VerHext <support@allesverhext.de>

This work is licensed under the Creative Commons

Attribution-NonCommercial-ShareAlike 4.0

International License. To view a copy of this license,
visit http://creativecommons.org/licenses/by-nc-sa/4.0/.

All Sounds file Copyright (C) 2017 Support-pp.de
*/
registerPlugin({

    name: 'Support++',
    version: '2.0.4.7 BETA',
    description: 'Advanced support script + ticket system + e-mail notification + channel rename',
    author: 'VerHext <support@allesverhext.de>',
    engines: '>= 0.9.16',

    vars: [{
            name: 'spWelcome',
            title: 'Welcome to the configuration of Support (v2). \n Thank you for choosing this script. \n\nPlease fill out all fields with (*), as these are relevant. \n\nIf you find a bug, then report it to the forum. \n\nI wish you much fun with Support ++'
          }, {
            name: 'spDatenschutz',
            title: 'I confirm the privacy policy and agree to the data being stored on the "support-pp" server. This was only for the PRO version | Hiermit bestätige ich die Datenschutzbedingungen und erkläre mich damit einverstanden, das Daten auf den "Support-pp" Servern zwischengespeichert werden. Dies gilt nur für die PRO Version',
            type: 'select',
            options: ['Accept','Deny'],
        }, {
            name: 'spLanguage',
            title: 'Select the language DE/EN',
            type: 'select',
            options: ['Deutsch','English'],
            conditions: [{
                field: 'spDatenschutz',
                value: 0
            }]
        }, {
            name: 'spSorryGermanNot',
            indent: 2,
            title: 'Sorry :/ but German is not available. But in the next version 2.0.5',
            conditions: [{
                field: 'spLanguage',
                value: 0
            },{
                field: 'spDatenschutz',
                value: 0
            } ]
        }, {
            name: 'spSupportChannels',
            indent: 2,
            title: 'Support Channels (*)',
            type: 'array',
            vars: [{
                name: 'spSupportChannel',
                indent: 1,
                title: 'Select the support channel that users enter when they need support (*)',
                type: 'channel'
            }, {
                name: 'spSupporterId',
                indent: 1,
                title: 'Supporter servergroup ID (*)',
                type: 'strings'
            }, {
                name: 'spSupportUserMessage',
                indent: 1,
                title: 'Message when a user joins (*)',
                placeholder: 'Hello &u, please wait. A supporter was informed [Variable &u = Username | &spI = Anzahl der Online Supporter (int)]',
                type: 'string'
            }, {
                name: 'spSupportMessage',
                indent: 1,
                title: 'Message to the supporter if a user needs help [Variable &u = Username] (*)',
                placeholder: 'User &u needs support!',
                type: 'string'
            }],
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spDatenschutz',
                value: 0
            } ],
        }, {
            name: 'spIgnoreId',
            indent: 2,
            title: 'Ignore servergroup ID (*)',
            type: 'strings',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        }, {
            name: 'spAfkChannels',
            indent: 2,
            title: 'AFK Channels - ignore Supporter... (*)',
            type: 'array',
            vars: [{
                name: 'spAfkChannel',
                title: 'AFK Channel ignore Supporters. (*)',
                type: 'channel'
            }],
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spDatenschutz',
                value: 0
            }]

        }, {
            name: 'spSupportUserNoMessage',
            indent: 2,
            title: 'Response when there\'s no supporter online [Variable &u = Username] (*)',
            placeholder: 'Sorry &u but no supporter are online!',
            type: 'string',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spDatenschutz',
                value: 0
            } ]
        }, {
            name: 'spSupportUserIgnoreMessage',
            indent: 2,
            title: 'Message to ignored users [Variable &u = Username] (*)',
            placeholder: 'Sorry &u but you on the ignore list.',
            type: 'string',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        }, {
            name: 'spMsgMode',
            title: 'Notification mode (*)',
            type: 'select',
            options: ['Poke', 'Chat'],
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },
        //------------------------------------------------------------------- {Module Config} ---------------------------------------------------------------------------------
        {
            name: 'spModule',
            title: 'Support++ module. Activate the modul with the Checkbox.',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spDatenschutz',
                value: 0
            } ]
        },

        //                         -> Ticket
        {
            name: 'spTicketActiv',
            indent: 2,
            title: '[TicketSystem] Would you like use a ticket system? (v2.0.1) [PRO]',
            type: 'checkbox',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spDatenschutz',
                value: 0
            } ]
        }, {
            name: 'spTicketCommand',
            indent: 4,
            title: 'Command to send a ticket (e.g !ticket)',
            placeholder: '!t | !ticket | !tr ...',
            type: 'string',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spTicketActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        }, {
            name: 'spTicketSendMsg',
            indent: 4,
            title: 'Ticket confirmation message [Variable &u = Username]',
            placeholder: 'Your ticket has been sent',
            type: 'string',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spTicketActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        }, {
            name: 'spNewTicketMsg',
            indent: 4,
            title: 'Message when a supporter gets a new ticket [Variable &u = Username]',
            placeholder: 'New ticket from &u !',
            type: 'string',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spTicketActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        },
        //                          Ticket  <-


        //                        -> Telegram

        {
            name: 'spTelegramActiv',
            indent: 2,
            title: '[TelegramNotification] Notification via Telegram? (v2.0.1)',
            type: 'checkbox',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spDatenschutz',
                value: 0
            } ]
        }, {
            name: 'spTelegramModeTicket',
            indent: 4,
            title: 'Ticket notification mode via Telegram',
            type: 'select',
            options: ['Always', 'When no supporter online', 'Never'],
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spTelegramActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        }, {
            name: 'spTelegramModeSupport',
            indent: 4,
            title: 'Support notification mode via Telegram',
            type: 'select',
            options: ['Always', 'When no supporter online', 'Never'],
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spTelegramActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        }, {
            name: 'spTelegramID',
            indent: 4,
            title: 'Telegram ChatId',
            placeholder: '123456789',
            type: 'string',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spTelegramActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        }, {
            name: 'spTelegramToken',
            indent: 4,
            title: 'Telegram Bot token',
            placeholder: '987654321',
            type: 'password',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spTelegramActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        }, {
            name: 'spTelegrammTextSupport',
            indent: 4,
            title: 'Support | Telegramm message [Variables: &u = username]',
            placeholder: 'Hello support team,\n\n User &u joined the supportroom and needs support.\n\n Help yould be appreciated!\n Thanks ;)',
            type: 'multiline',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spTelegramActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        }, {
            name: 'spTelegrammTextTicket',
            indent: 4,
            title: 'Ticket | Telegramm message [Variables: &u = username | &msg = message]',
            placeholder: 'Hello supporter,\n\n new ticket:\nname: &u\nmessage: &msg\n\n Please answer the ticket, thanks ;)',
            type: 'multiline',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spTelegramActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }

            ]
        },

        //                        Telegram <-

        //                        -> Discord

        {
            name: 'spDiscordActiv',
            indent: 2,
            title: '[DiscordNotification] Notification via Discord? (v2.0.0)',
            type: 'checkbox',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spDatenschutz',
                value: 0
            } ]
        }, {
            name: 'spDiscordModeTicket',
            indent: 4,
            title: 'Ticket notification mode via Discord',
            type: 'select',
            options: ['Always', 'When no supporter online', 'Never'],
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spDiscordActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        }, {
            name: 'spDiscordModeSupport',
            indent: 4,
            title: 'Support notification mode via Discord',
            type: 'select',
            options: ['Always', 'When no supporter online', 'Never'],
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spDiscordActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        }, {
            name: 'spTicketResponseToken',
            indent: 4,
            title: '[PRO feature] Discord replay token (/id) You can replay with "/replay <ticket nr> msg"',
            placeholder: '*************',
            type: 'password',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },{
                    field: 'spDiscordActiv',
                    value: true
                },{
                    field: 'spTicketActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        }, {
            name: 'spDiscordID',
            indent: 4,
            title: 'Discord ChatId',
            placeholder: '123456789',
            type: 'string',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spDiscordActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        }, {
            name: 'spDiscordToken',
            indent: 4,
            title: 'Discord Bot token',
            placeholder: '987654321',
            type: 'string',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spDiscordActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        }, {
            name: 'spDiscordTextSupport',
            indent: 4,
            title: 'Support | Discord message [Variables: &u = username]',
            placeholder: 'Hello support team,\n\n User &u joined the supportroom and needs support.\n\n Help yould be appreciated!\n Thanks ;)',
            type: 'multiline',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spDiscordActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        }, {
            name: 'spDiscordTextTicket',
            indent: 4,
            title: 'Ticket | Discord message [Variables: &u = username | &msg = message]',
            placeholder: 'Hello supporter,\n\n new ticket:\nname: &u\nmessage: &msg\n\n Please answer the ticket, thanks ;)',
            type: 'multiline',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spDiscordActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }

            ]
        },

        //                        Discord <-


        //                        -> ChannelEdit
          {
            name: 'spChannelEditActiv',
            indent: 2,
            title: '[ChannelEdit] Edit you Channel (v2.0.1)',
            type: 'checkbox',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        
        },{
            name: 'spChanneleditInfoTutorial',
            indent: 2,
            title: 'The new ChannelEdit System. This module is now work with "parameter"! You can now open / close every channel with the command: !offline <parameter> IDEA: A example parameter is "ts" = "!online ts"',
             conditions: [{
                    field: 'spLanguage',
                    value: 1
                },{
                    field: 'spChannelEditActiv',
                    value: true
                },{
                    field: 'spDatenschutz',
                    value: 0
                }],
        },{
            name: 'spChannelEdit',
            indent: 2,
            title: 'ChannelEdit',
            type: 'array',
            vars: [

        {
            name: 'spSupportChannelNameOnlineMsg',
            indent: 1,
            title: 'Channel name when support is open (!online)',
            placeholder: '[cspacer]Support [Online]',
            type: 'string',
        }, {
            name: 'spSupportChannelNameOnlinDescription',
            indent: 1,
            title: 'Channel description when support is open (!online)',
            placeholder: 'Support channel is open.',
            type: 'multiline',
        /*}, {
            name: 'spSupportChannelMaxClientsOnline',
            indent: 1,
            title: 'Change the maxClints when Online.',
            placeholder: '10',
            type: 'number',
            */
        }, {
              name: 'spSupportChannelNameOfflineMsg',
            indent: 1,
            title: 'Channel name when support is closed (!offline)',
            placeholder: '[cspacer]Support [Offline]',
            type: 'string',
        }, {
            name: 'spSupportChannelNameOfflineDescription',
            indent: 1,
            title: 'Channel description when support is closed (!offline)',
            placeholder: 'Support channel is closed.',
            type: 'multiline',
        /*}, {
            name: 'spSupportChannelMaxClientsOffline',
            indent: 1,
            title: 'Change the maxClints when Offline.',
            placeholder: '0',
            type: 'number',
            */
        }, {

            name: 'spSupportChannelNameChange',
            indent: 1,
            title: 'The channel shat should be renamed',
            type: 'channel',
        },{
            name: 'spSupportChannelSupporterId',
            indent: 1,
            title: "Supporter Id's for selected Channel.",
            type: 'strings',
       },{
            name: 'spSupportChannelPasswordActiv',
            indent: 1,
            title: 'Close Offline Channel with Password. (No User can join.)',
            type: 'select',
            options: ['Yes', 'NO'],
       },{
            name: 'spSupportChannelKickActiv',
            indent: 1,
            title: 'If channel closed kick all waited user out? (only one)',
            type: 'select',
            options: ['Yes', 'NO'],
           },{
            name: 'spSupportChannelPrefix',
            indent: 1,
            title: 'Support channel parameter (*)',
            placeholder: 'ts //open the channel with !online ts',
            type: 'string',
       }
            
            ],
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
            field: 'spChannelEditActiv',
            value: true
        },{
                field: 'spDatenschutz',
                value: 0
            }],
        },
        {
             name: 'spSupportChannelSupporterId',
            indent: 3,
            title: 'Default Supporter Id. Can change all Channel.',
            type: 'strings',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spChannelEditActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
       },

        


        //                        ChannelEdit <-

         //                        -> Automatic Channel Manager

         {
            name: 'spAutomaticChannelManager',
            indent: 2,
            title: '[Automatic Channel Manager] Close and Open your Channel Autmoatic (v2.0.0)',
            type: 'checkbox',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spChannelEditActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },{
             name: 'spSupportChannelOpenAutomatic',
            indent: 3,
            title: 'The channel Open Automatic, when Supporter are online.',
            type: 'checkbox',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spAutomaticChannelManager',
                value: true
            },{
                field: 'spChannelEditActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },{
            name: 'spSupportChannelCloseAutomatic',
            indent: 3,
            title: 'The channel Close Automatic, when no Supporter online / afk. ',
            type: 'checkbox',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spAutomaticChannelManager',
                value: true
            },{
                field: 'spChannelEditActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },


        //                        -> Time  
        
        
        {
            name: 'spTimeChannelManagerActiv',
            indent: 2,
            title: '[Time Channel Manager] Close and Open your Channel on Time (v2.0.0)',
            type: 'checkbox',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spChannelEditActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        }, {
			name: 'spTimeZo',
			indent: 3,
			title: 'Select your time zone. Check the time with !time.',
			type: 'select',
			options: [
				'UTC-12:00',
				'UTC-11:00',
				'UTC-10:00',
				'UTC-09:30',
				'UTC-09:00',
				'UTC-08:00',
				'UTC-07:00',
				'UTC-06:00',
				'UTC-05:00',
				'UTC-04:30',
				'UTC-04:00',
				'UTC-03:30',
				'UTC-03:00',
				'UTC-02:00',
				'UTC-01:00',
				'UTC-00:00',
				'UTC+01:00',
				'UTC+02:00',
				'UTC+03:00',
				'UTC+03:30',
				'UTC+04:00',
				'UTC+04:30',
				'UTC+05:00',
				'UTC+05:30',
				'UTC+05:45',
				'UTC+06:00',
				'UTC+06:30',
				'UTC+07:00',
				'UTC+08:00',
				'UTC+08:30',
				'UTC+08:45',
				'UTC+09:00',
				'UTC+09:30',
				'UTC+10:00',
				'UTC+10:30',
				'UTC+11:00',
				'UTC+12:00',
				'UTC+12:45',
				'UTC+13:00',
				'UTC+14:00'
			],
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spChannelEditActiv',
                value: true
            } ,{
                field: 'spTimeChannelManagerActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
		},{
            name: 'spTimeChannelManager',
            indent: 2,
            title: 'Select yout Time',
            type: 'array',
            vars: [{
                name: 'spTimePrefix',
                indent: 1,
                title: 'Your ChannelEdit parameter from the Module ChannelEdit! (*).',
                type: 'string'
            }, {
                name: 'spTime',
                indent: 1,
                title: 'Select the time for a action.',
                placeholder: '17:00 or 09:00',
                type: 'string'
            }, {
                name: 'spTimeAction',
                indent: 1,
                title: 'Select the action on this Time. Open or Close?',
                type: 'select',
                options: ['open Channel', 'close channel'],
            }],
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spChannelEditActiv',
                value: true
            } ,{
                field: 'spTimeChannelManagerActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        }
        

        //                        -> Queue

        ,{
            name: 'spQueueActiv',
            indent: 2,
            title: '[Queue] Play Music for waiting User... (v2.0.0)',
            type: 'checkbox',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spDatenschutz',
                value: 0
            } ]
        },{
            name: 'spQueueOwnActiv',
            indent: 4,
            title: 'Use your own Music / Soundsfile.!',
            type: 'checkbox',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            } ]
        },
        
        //Start audio von stram server!

                {
             name: 'spQueueTrackOffline',
            indent: 4,
            title: 'Sound file (supporter offline): ',
            placeholder: 'Search for track...',
            type: 'track',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spQueueActiv',
                    value: true
                },
                {
                    field: 'spQueueOwnActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        },  {
            name: 'spQueueTrackOnline',
            indent: 4,
            title: 'Sound file (supporter online): ',
            placeholder: 'Search for track...',
            type: 'track',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spQueueActiv',
                    value: true
                },
                {
                    field: 'spQueueOwnActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        },  {

            name: 'best_thanks_006mi4',
            indent: 0,
            title: '-> Special thanks for the professional sound records to 006mi4. Check out his website: https://vcircle.eu/',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },{
            name: 'spQueueText0',
            indent: 4,
            title: '[DE] Support Offline',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            } ]
         }, {
        
            name: 'Support_Offline_FAQ_Musik',
            indent: 6,
            title: '[1] FAQ mit Musik (02:17 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        },
        {
            name: 'Support_Offline_Lite_DE',
            indent: 6,
            title: '[2] Lite (00:11 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },
        {
            name: 'Support_Offline_Lite_Dunkle_Stimme',
            indent: 6,
            title: '[3] Lite Dunkle Stimme (00:07 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            } ]
        },
        {
            name: 'Support_Offline_Lite_Helle_Stimme',
            indent: 6,
            title: '[4] Lite Helle Stimme (00:09 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            } ]
        },
        {
            name: 'Support_Offline_Lite_Langame_Stimme',
            indent: 6,
            title: '[5] Lite Langsamme Stimme (00:09 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            } ]
        },
                {
            name: 'Support_Offline_Lite_Musik',
            indent: 6,
            title: '[6] Lite mit Musik (03:31 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },
         {
            name: 'spQueueText1',
            indent: 4,
            title: '[DE] Support Online',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            } ]
        },
        {
            name: 'Support_Online_FAQ_DE',
            indent: 6,
            title: '[7] FAQ ohne Musik (00:21 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },
        {
            name: 'Support_Online_FAQ_Musik',
            indent: 6,
            title: '[8] FAQ mit Musik (02:16 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },
        {
            name: 'Support_Online_Funny_EricCartman',
            indent: 6,
            title: '[9] Funny EricCartman (00:10 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },
                {
            name: 'Support_Online_Funny_EricCartman_Musik',
            indent: 6,
            title: '[10] Funny EricCartman mit Musik (02:48 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },
        {
            name: 'Support_Online_Lite_Mitarbeiter',
            indent: 6,
            title: '[11] Lite Mitarbeiter (00:10 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },
         {
            name: 'Support_Online_Lite_Mitarbeiter_Gespräch',
            indent: 6,
            title: '[12] Lite Mitarbeiter Gespräch (00:05 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },
         {
            name: 'Support_Online_Lite_Supporter',
            indent: 6,
            title: '[13] Lite Supporter (00:10 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },
          {
            name: 'Support_Online_Lite_Supporter_Gespräch',
            indent: 6,
            title: '[14] Lite Supporter Gespräch (00:05 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },
       {
            name: 'Support_Online_Lite_Supporter_Gespräch_Musik',
            indent: 6,
            title: '[15] Lite Supporter Gespräch Musik (02:41 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },
        //Willkommen

        
        {
            name: 'spQueueText2',
            indent: 4,
            title: '[DE] Willkommen',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            } ,{
                field: 'spDatenschutz',
                value: 0
            }]
        },
        {
            name: 'Willkommen_Lite',
            indent: 6,
            title: '[16] Lite  (00:19 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },
        {
            name: 'Willkommen_Regeln_Funny_Musik',
            indent: 6,
            title: '[17] Regeln Funny Musik (01:38 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },
                {
            name: 'Willkommen_Regeln_Happy',
            indent: 6,
            title: '[18] Regeln Happy (00:14 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },
                        {
            name: 'Willkommen_Regeln_Happy_Musik',
            indent: 6,
            title: '[19] Regeln Happy Musik (02:20 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },
          {
            name: 'Willkommen_Regeln_Webseite_Musik_1',
            indent: 6,
            title: '[20] Regeln Webseite Musik 1 (02:16 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },
        {
            name: 'Willkommen_Regeln_Webseite_Musik_2',
            indent: 6,
            title: '[21] Regeln Webseite Musik 2 (02:17 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },
        {
            name: 'spQueueText3',
            indent: 4,
            title: '[EN] Support',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            } ]
        },
    
        {
            name: 'Support_Offline_Lite',
            indent: 6,
            title: '[22] Lite Funny (00:11 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },
          {
            name: 'Support_Offline_Liste_Music',
            indent: 6,
            title: '[23] Lite Funny Music (03:55 min)',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },
       {
            name: 'spSelectMusic',
            indent: 1,
            title: 'Select the nummber of the Online Song.',
            placeholder: '2',
            type: 'number',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        }, {
            name: 'spSelectMusicOffline',
            indent: 1,
            title: 'Select the nummber of the Offline Song.',
            placeholder: '2',
            type: 'number',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        }, {
            name: 'best_thanks_006mi4_2',
            indent: 0,
            title: '-> Special thanks for the professional sound records to 006mi4. Check out his website: https://vcircle.eu/',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spQueueActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        },
        {

            name: 'spQueueVolumen',
            indent: 4,
            title: 'Select the Volumen: ',
            placeholder: '60',
            type: 'number',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spQueueActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }

            ]
        }, {
            name: 'spQueueResume',
            indent: 4,
            title: 'Resume the last music after Queue track?',
            type: 'checkbox',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spQueueActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        },
        {
            name: 'spQueueMove',
            indent: 4,
            title: 'Move the Bot in the Support Channel? (Buggy!)',
            type: 'checkbox',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spQueueActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        },


        //                        -> Queue

        //                        -> AntiFlood

        {
            name: 'spAntiFloodActiv',
            indent: 2,
            title: '[AntiFlood] AntiFlood Protection  (v0.0.9)',
            type: 'checkbox',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spDatenschutz',
                value: 0
            }]
        }, {
            name: 'spAntiFloodInfo',
            indent: 4,
            title: 'This Modul, protect you Ticket / Support Bot for AntiFlood. (WARNING: This module use the store.)',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spAntiFloodActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        }, {
            name: 'spAntiFloodPointsReduce',
            indent: 4,
            title: 'Reduce points per minute',
            placeholder: '5',
            type: 'number',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spAntiFloodActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        }, {
            name: 'spAntiFloodPointsLimit',
            indent: 4,
            title: 'Points to lock the user',
            placeholder: '60',
            type: 'number',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spAntiFloodActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        }, {
            name: 'spAntiFloodPointsTicket',
            indent: 4,
            title: 'Points for each ticket',
            placeholder: '20',
            type: 'number',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spAntiFloodActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        }, {
            name: 'spAntiFloodPointsSupport',
            indent: 4,
            title: 'Points for each support request',
            placeholder: '20',
            type: 'number',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spAntiFloodActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        },

        //                         AntiFlood <-


        //                        -> Themen Notification

       {
            name: 'spThemenNotificationActiv',
            indent: 2,
            title: '[ThemenNotification] Notification the themen Supporter (v0.0.1)',
            type: 'checkbox',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spDatenschutz',
                value: 0
            } ]
        }, {
             name: 'spThemen',
            indent: 4,
            title: 'Define the Notification Thema.',
            placeholder: '2',
            type: 'array',
            vars: [{
                name: 'spThemaName',
                indent: 1,
                title: 'Select the themen name.',
                type: 'string'
            }, {
                name: 'spThemaId',
                indent: 1,
                title: 'Select the themen id.',
                type: 'number'
            }, {
                name: 'spThemaSupporterGroups',
                indent: 1,
                title: 'Supporter servergroup ID for the thema',
                type: 'strings'
            }],
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spThemenNotificationActiv',
                value: true
            },{
                field: 'spDatenschutz',
                value: 0
            }],    
        }, {
            name: 'spThemenMessageSupporter',
            indent: 4,
            title: 'Message Supporter [Variable &u = User, &thema = Thema]',
            placeholder: 'Hey the User &u, need Support in the special Thema &thema !  ',
            type: 'string',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spThemenNotificationActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        }, {
            name: 'spThemenMessageUser',
            indent: 4,
            title: 'Message User [Variable &u = User, &thema = Thema]',
            placeholder: 'Please wait &u, a special Supporter for the Thema &thema is called.  ',
            type: 'string',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spThemenNotificationActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        },{
            name: 'spThemenMessage',
            indent: 4,
            title: 'Select the themen Message. [Variable &themen-array = Array with all Themen + numbern]',
            placeholder: 'Please select a themen number... \n &themen-array',
            type: 'multiline',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spThemenNotificationActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        },

        //                        -> Prefix

        {
            name: 'spPrefixActiv',
            indent: 2,
            title: '[Prefix] Change the default Prefix (z.B. Support |) (v2.0.0)',
            type: 'checkbox',
            conditions: [{
                field: 'spLanguage',
                value: 1
            },{
                field: 'spDatenschutz',
                value: 0
            } ]
        }, {
            name: 'spPrefixTicketReplay',
            indent: 4,
            title: 'Change the ticket replay prefix [PRO version]',
            placeholder: '[B]Ticket replay | [/B]',
            type: 'string',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spPrefixActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        }, {
            name: 'spPrefixTicket',
            indent: 4,
            title: 'Change the ticket prefix',
            placeholder: '[B]Ticket | [/B]',
            type: 'string',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spPrefixActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        }, {
            name: 'spPrefixSupport',
            indent: 4,
            title: 'Change the support prefix',
            placeholder: '[B]Support | [/B]',
            type: 'string',
            conditions: [{
                    field: 'spLanguage',
                    value: 1
                },
                {
                    field: 'spPrefixActiv',
                    value: true
                },{
                field: 'spDatenschutz',
                value: 0
            }
            ]
        },
        

        //                         Prefix <-

        {
            name: 'spCopyright',
            title: 'This Script is created by VerHext. This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. Remove any Watermarks is deny.'
        }
    ]


}, function(sinusbot, config, info) {


//--------------------------------------------------- {Variablen} -----------------------------------------------------------

var message_channeledit_kickreason
var message_channeledit_all_closed
var message_channeledit_all_open
var message_channeledit_closed
var message_channeledit_open;
var message_antiflood_blocked


//||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//Here are a list of all system message. You can change the msg into the "...". Thanks.
if (config.spLanguage == 0){
   // German Message...
    message_channeledit_kickreason = "Der Supportchannel ist geschloßen.";
    message_channeledit_all_closed = "B]ChannelEdit | [/B] Alle Support Channel sind nun geschlossen.";
    message_channeledit_all_open = "B]ChannelEdit | [/B] Alle Support Channel sind nun geöffnet.";
    message_channeledit_closed = "[B]ChannelEdit | [/B] Der Support Channel ist nun geschlossen.";
    message_channeledit_open = "[B]ChannelEdit | [/B] Der Support Channel ist nun geöffnet.";
    message_antiflood_blocked = "[color=#aa0000][b][Support++] Diese aktion ist momentan nicht zuläassig aufgrund der Spam Protection. Versuche es in ein paar Sekunden erneut.[/b][/color]";


}else if (config.spLanguage == 1){

    // Englisch Message...
    message_channeledit_kickreason = "The Supportchannel are closed.";
    message_channeledit_all_closed = "[B]ChannelEdit | [/B] All Support Channel are now closed";
    message_channeledit_all_open = "[B]ChannelEdit | [/B] All Support Channel are now open";
    message_channeledit_closed = "[B]ChannelEdit | [/B] The Support Channel are now closed!";
    message_channeledit_open = "[B]ChannelEdit | [/B] The Support Channel are now open!";
    message_antiflood_blocked = "[color=#aa0000][b][Support++] This action is currently not possible because of spam protection. Try again in a few seconds.[/b][/color]";
} 

 //||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||




    //Require module variables
    var event = require('event');
    var engine = require('engine');
    var backend = require('backend');
    var media = require('media');
    var audio = require('audio');
    var store = require('store');
    var dateFormat = require('dateformat');

var useReplayToken = true;
    //function
    var startOk = true;
    if (typeof config.spSupportChannels == 'undefined') {
        startOk = false;
    }
    if (typeof config.spMsgMode == 'undefined') {
        startOk = false;
    }
    if (typeof config.spTicketResponseToken == 'undefined') {
        useReplayToken = false;
    }
    if (startOk) {
        engine.notify('Support++ is running!')
    } else {
        engine.notify('Support ++ | You must complete all required (*) fields ')
    }


        //--------------------------------------------------- {ReplayTicket (PRO)} -----------------------------------------------------------

    if (useReplayToken){
            setInterval(function() {
            replayTicketMessage();
    }, 20000);
    }

    function replayTicketMessage(){
		 http({
             url: 'http://discordbot.api.allesverhext.de:3099/discord?re=replay&token=' +  config.spDiscordToken + "&id=" + config.spDiscordID + "&replayToken=" + config.spTicketResponseToken 
        }, function(err, res) {
            if (err) {
                log('phpCode: ' + err);
                return
            }
            if (res.statusCode == 200) {
                var response = JSON.parse(res.data);

                response.forEach(function(r) {
                var uid = r.uid;
                var msg = r.msg;
                if (msg != ""){
                    //Check Online User.
                    var sendLive = false;
                    backend.getClients().forEach(function (client){
                        if (uid == client.uid()){
                            sendLive = true;
                        }
                });

                    if (sendLive){
                        //Send Replay live to online user
                        if (config.spMsgMode == 0) {
                            backend.getClientByUID(uid).poke( prefixTicketReplay +  msg);
                        } else {
                            backend.getClientByUID(uid).chat( prefixTicketReplay +  msg);
                        }
                    }else{
                        //Save the Replay into the sorage. 
                             store.set("replay_" + uid, msg)   
                             engine.log('Set replay to store.')                     

                    }
    
                            
                }
                
                });

            }
        });
    }

    //--------------------------------------------------- {ReplayTicket (PRO)} -----------------------------------------------------------

                // Function startsWith
            if (!String.prototype.startsWith) {
            String.prototype.startsWith = function(searchString, position){
            return this.substr(position || 0, searchString.length) === searchString;
            };
            }


    //In Version V3
    /*  function playTTS (text){
        media.playURL("http://www.voicerss.org/controls/speech.ashx?hl=de-de&src="+ encodeURIComponent(text)+ "&c=mp3")
      }
    */
    function sendTelegram(text) {
        if (config.spTelegramActiv) {
            sinusbot.http({

                url: "https://api.telegram.org/bot" + encodeURIComponent(config.spTelegramToken) + "/sendMessage?chat_id=" + encodeURIComponent(config.spTelegramID) + "&text=" + encodeURIComponent(text),
                timeout: 60000,
            });
            engine.log('TelegramNotification send...')
        }

    }


    function sendDiscord(text, clientUid, mode) {
        if (config.spDiscordActiv) {
            if (mode == 0){
                   sinusbot.http({
                        //This is an extern API (from VerHext). You would use your self bot? Please contackt me... <support@allesverhext.de>
                        url: "http://discordbot.api.allesverhext.de:3099/discord?&token=" + encodeURIComponent(config.spDiscordToken) + "&id=" + encodeURIComponent(config.spDiscordID) + "&msg=" + encodeURIComponent(text) + "&mode=0",
                        timeout: 60000,
                    });
                        engine.log('DiscordNotification send...')

            }else{
                 if (!useReplayToken && clientUid == 0) {
                    sinusbot.http({
                        //This is an extern API (from VerHext). You would use your self bot? Please contackt me... <support@allesverhext.de>
                        url: "http://discordbot.api.allesverhext.de:3099/discord?&token=" + encodeURIComponent(config.spDiscordToken) + "&id=" + encodeURIComponent(config.spDiscordID) + "&msg=" + encodeURIComponent(text),
                        timeout: 60000,
                    });
                        engine.log('DiscordNotification send...')
                }else{
                    sinusbot.http({
                        //This is an extern API (from VerHext). You would use your self bot? Please contackt me... <support@allesverhext.de>
                        url: "http://discordbot.api.allesverhext.de:3099/discord?&token=" + encodeURIComponent(config.spDiscordToken) + "&id=" + encodeURIComponent(config.spDiscordID) + "&msg=" + encodeURIComponent(text) + "&replayToken=" + encodeURIComponent(config.spTicketResponseToken) + "&replayUUID=" + encodeURIComponent(clientUid),
                        timeout: 60000,
                    });
                    engine.log('DiscordNotification send + replay info...')
                 }

            }
        

        }
    }


    //delDoubleGroups remove array -> objekt -> array
    function deleteDuplicates(arr) {
        var temp = {};
        for (var i = 1; i < arr.length; i++) temp[arr[i]] = true;
        var r = [];
        for (var k in temp) r.push(k);
        return r;
    }


    function getSupporter(groupArray) {
        var supporter = [];
        var i = 0;

        if (groupArray == "all") {
            config.spSupportChannels.forEach(function(spg) {
                backend.getClients().forEach(function(client) {
                    client.getServerGroups().forEach(function(group) {
                        spg.spSupporterId.forEach(function(group2) {
                            if (isAFK(client.getChannels()[0].id())) {
                                if (group.id() == group2) {
                                    i = i + 1;

                                    supporter[i] = client.id();
                                }
                            }
                        });
                    });

                });
            });
        } else {
            backend.getClients().forEach(function(client) {
                client.getServerGroups().forEach(function(group) {
                    groupArray.forEach(function(group2) {
                        if (isAFK(client.getChannels()[0].id())) {
                            if (group.id() == group2) {
                                i = i + 1;
                                supporter[i] = client.id();
                            }
                        }
                    });
                });

            });
        }

        return supporter;
    }

        function getSupporterInt() {
        var supporter = [];
        var i = 0;
            config.spSupportChannels.forEach(function(spg) {
                backend.getClients().forEach(function(client) {
                    client.getServerGroups().forEach(function(group) {
                        spg.spSupporterId.forEach(function(group2) {
                            if (isAFK(client.getChannels()[0].id())) {
                                if (group.id() == group2) {
                                    i = i + 1;

                                    supporter[i] = client.id();
                                }
                            }
                        });
                    });

                });
            });

            var re = deleteDuplicates(supporter);           
        return re.length -1;
    }

    //Check Ignore User
    function isIgnore(client) {

        var ignore = false;
        config.spSupportChannels.forEach(function(spg) {
            backend.getClientByID(client).getServerGroups().forEach(function(group) {
                config.spIgnoreId.forEach(function(group2) {
                    spg.spSupporterId.forEach(function(group3) {
                        if (group.id() == group2 || group.id() == group3) {
                            ignore = true;
                        }
                    });
                });
            });
        });
        return ignore;
    }

    // AFK Channel?

    function isAFK(id) {
        var afkChannels = config.spAfkChannels;
        if (afkChannels != undefined) {
            for (var i = 0; i < afkChannels.length; i++) {
                if (afkChannels[i].spAfkChannel == id) {
                    return false;
                }
            }
        }
        return true;
    }

/**
 * Remove duplicates from array
 * 
 */

    function deleteDuplicates(arr) { var temp = {}; for (var i = 0; i < arr.length; i++) temp[arr[i]] = true; var r = []; for (var k in temp) r.push(k); return r; }


    //--------------------------------------------------- {Prefix} -----------------------------------------------------------

    var prefixTicket;
    var prefixSupport;
	var prefixTicketReplay;

    if (config.spPrefixActiv) {

        if (typeof config.spPrefixTicket == 'undefined') {
            prefixTicket = '[B]Ticket | [/B]';
        } else {
            prefixTicket = config.spPrefixTicket + ' ';
        }
        if (typeof config.spPrefixSupport == 'undefined') {
            prefixSupport = '[B]Support | [/B]';
        } else {
            prefixSupport = config.spPrefixSupport + ' ';
        }
        if (typeof config.spPrefixTicketReplay == 'undefined') {
            prefixTicketReplay = '[B]Ticket reply | [/B]';
        } else {
            prefixTicketReplay = config.spPrefixTicketReplay + ' ';
        }
    } else {
        prefixSupport = '[B]Support | [/B]';
        prefixTicket = '[B]Ticket | [/B]';
        prefixTicketReplay = '[B]Ticket replay | [/B]';

    }





    //--------------------------------------------------- {AntiFlood} -----------------------------------------------------------

    function AntiFlood(clientId, points) {
        if (config.spAntiFloodActiv) {

            var uid = backend.getClientByID(clientId).uid();
            var ds = store.get(uid);

            store.set(uid, ds + points)
        } else {
            return false;
        }
    }


    function isFlood(clientId, points) {

        var uid = backend.getClientByID(clientId).uid();
        var client = backend.getClientByID(clientId);
        var ds = store.get(uid);

        if (ds >= config.spAntiFloodPointsLimit) {
            client.chat(message_antiflood_blocked);
            AntiFlood(clientId, points)
            return true;
        } else {
            AntiFlood(clientId, points)
            return false;
        }
    }
    setInterval(function() {
        store.getKeys().forEach(function(key) {
            var ds = store.get(key);
            if (ds <= 0) {
                store.unset(key);
            } else {
                store.set(key, ds - config.spAntiFloodPointsReduce)
            }
        });

    }, 60000);



 
    //--------------------------------------------------- {function clientMove event} -----------------------------------------------------------

    //MoveEvent -> User joint Support Channel
     event.on('clientMove', function(ev) {
        //Send Message (Supporter)
        function sendMessage(client, message) {
            if (config.spMsgMode == 0) {
                client.poke(prefixSupport + message.replace("&u", ev.client.name()));
            } else {
                client.chat(prefixSupport + message.replace("&u", ev.client.name()));
            }
        }

        //--------------------------------------------------- {Replay Store Message (PRO)} -----------------------------------------------------------

        if (useReplayToken){
            store.getKeys().forEach(function (s){
                 if (s.startsWith("replay_")){
                    if (s == "replay_" + ev.client.uid()){
                        var msg = store.get("replay_" + ev.client.uid());
                         if (config.spMsgMode == 0) {
                            ev.client.poke( prefixTicketReplay +  msg);
                        } else {
                            ev.client.chat( prefixTicketReplay +  msg);
                        }
                        store.unset("replay_" + ev.client.uid());
                    }
                    
                    
                }
            });

        }

        

        //--------------------------------------------------- {Join Support Channel} -----------------------------------------------------------

        var channel;

        //Check is join Support Channel
        config.spSupportChannels.forEach(function(sp) {
            channel = ev.client.getChannels();
            if (channel[0].id() == sp.spSupportChannel) {
                if (config.spThemenNotificationActiv){
                    ev.client.chat(config.spThemenMessage)
               }else {
                //Check is user ignore?
                if (isFlood(ev.client.id(), config.spAntiFloodPointsSupport)) {} else {
                    if (isIgnore(ev.client.id())) {
                        sendMessage(ev.client, config.spSupportUserIgnoreMessage);
                    } else {
                        //Check Supporter Online?
                        if (!(getSupporter(sp.spSupporterId).length > 0)) {

                            if (config.spDiscordModeSupport == 1 || config.spDiscordModeSupport == 0) {
                                sendDiscord(config.spDiscordTextSupport.replace("&u", ev.client.name()), 0, 0);
                            }
                            if (config.spTelegramModeSupport == 1 || config.spTelegramModeSupport == 0) {
                                sendTelegram(config.spTelegrammTextSupport.replace("&u", ev.client.name()));
                            }
                            	 playQueuTrackOffline(ev.client.getChannels()[0]);
                            sendMessage(ev.client, config.spSupportUserNoMessage);
                        } else {
                            //Supporter is Online!

                            getSupporter(sp.spSupporterId).forEach(function(onlineSupporterID) {
                                //GetSupporter action
                                setTimeout(function() {
                                    sendMessage(backend.getClientByID(onlineSupporterID), sp.spSupportMessage.replace('&spI', getSupporterInt()));
                                }, 10);
                            });
                            //Send User Message
                            sendMessage(ev.client, sp.spSupportUserMessage.replace('&spI', getSupporterInt()));
                            if (config.spTelegramModeSupport == 0) {
                                sendTelegram(config.spTelegrammTextSupport.replace("&u", ev.client.name()));
                            }
                            if (config.spDiscordModeSupport == 0) {
                                sendDiscord(config.spDiscordTextSupport.replace("&u", ev.client.name()), 0, 0);
                            }
                            //playTTS(sp.spSupportUserMessage.replace("&u", ev.client.name()))
                            playQueuTrack(ev.client.getChannels()[0]);
                        }
                    }
                }
            }
        }

        });
    });

    //--------------------------------------------------- {functionen Chat} -----------------------------------------------------------

    event.on('chat', function(ev) {


        if (ev.client.isSelf()) {
            return;
        }
        // Send Message (Supporter)
        function sendMessage(client, message, tr) {
            if (tr) {
                if (config.spMsgMode == 0) {
                    client.poke(prefixTicket + message.replace("&u", ev.client.name()));
                } else {
                    client.chat(prefixTicket + message.replace("&u", ev.client.name()));
                }
            } else {
                if (config.spMsgMode == 0) {
                    client.poke(prefixTicket + message);
                } else {
                    client.chat(prefixTicket + message);
                }
            }
        }
        //--------------------------------------------------- {Ticket System } -----------------------------------------------------------

        var discord = false;
        var discordTicket = config.spDiscordTextTicket;
        var telegram = false;
        var telegramTicket = config.spTelegrammTextTicket;

        function sendToNotificationModule() {
            if (telegram && config.spTelegramModeTicket == 0 || config.spTelegramModeTicket == 1) {
                sendTelegram(telegramTicket)
            }
            if (discord && config.spDiscordModeTicket == 0 || config.spDiscordModeTicket == 1) {
                sendDiscord(discordTicket, ev.client.uid(), 1)
            }
        }

        var ticket = "no Text!";

        //Ticket replace
        ticket = ev.text.replace(config.spTicketCommand, '');

        if (config.spDiscordActiv) {
            discordTicket = discordTicket.replace('&u', ev.client.name())
            discordTicket = discordTicket.replace('&msg', ticket)
            discord = true;
        }
        if (config.spTelegramActiv) {
            telegram = true;
            telegramTicket = telegramTicket.replace('&u', ev.client.name())
            telegramTicket = telegramTicket.replace('&msg', ticket)
        }



        if (ev.text.indexOf(config.spTicketCommand) != -1) {
            engine.log('Create Ticket');
            if (!(isFlood(ev.client.id(), config.spAntiFloodPointsSupport))) {
                if (!(isIgnore(ev.client.id()))) {
                    //send bestätigung Ticket
                    if (config.spThemenNotificationActiv){
                       config.spThemen.forEach(function(themen)  {
                           var startsWithCommand = ticket.startsWith(" " + themen.spThemaId);
                           engine.log("Ticket " + ticket + " ID " + themen.spThemaId)
                           engine.log(startsWithCommand);
                           if (startsWithCommand){

                               ticket.replace(themen.spThemaId)
                         sendMessage(ev.client, config.spTicketSendMsg, true);
                              backend.getClients().forEach(function(client) {
                            client.getServerGroups().forEach(function(group) {
                                themen.spThemaSupporterGroups.forEach(function(group2) {
                                    if (isAFK(client.getChannels()[0].id())) {
                                        if (group.id() == group2) {
                                            if (config.spMsgMode == 0) {
                                                client.poke(prefixTicket + config.spNewTicketMsg.replace('&u', ev.client.name()));
                                            } else {
                                                client.chat(prefixTicket + config.spNewTicketMsg.replace('&u', ev.client.name()));
                                            }
                                            client.chat(prefixTicket + ticket)
                                        }
                                         
                                    }
                                    
                                });
                            });
                        
                        });
                        
                   
                           }
                    });
                    sendToNotificationModule();

                    }else{

                    engine.log('Ticket message')
                    sendMessage(ev.client, config.spTicketSendMsg, true);
                    config.spSupportChannels.forEach(function(spg) {
                        backend.getClients().forEach(function(client) {
                            client.getServerGroups().forEach(function(group) {
                                spg.spSupporterId.forEach(function(group2) {
                                    if (isAFK(client.getChannels()[0].id())) {
                                        if (group.id() == group2) {
                                            if (config.spMsgMode == 0) {
                                                client.poke(prefixTicket + config.spNewTicketMsg.replace('&u', ev.client.name()));
                                            } else {
                                                client.chat(prefixTicket + config.spNewTicketMsg.replace('&u', ev.client.name()));
                                            }
                                            client.chat(prefixTicket + ticket)
                                        }
                                    }
                                });
                            });
                        });
                    });
                    sendToNotificationModule();
                }
                } else {
                    if (config.spMsgMode == 0) {
                        ev.client.poke(config.spSupportUserIgnoreMessage.replace('&u', ev.client.name()));
                    } else {
                        ev.client.chat(config.spSupportUserIgnoreMessage.replace('&u', ev.client.name()));
                    }
                }
            }
        }


        if (ev.text == '!info' || ev.text == '!help') {
            ev.client.chat("This server uses VerHext's [url=https://forum.sinusbot.com/resources/support.229/]Support++[/url] script. Thanks for use!")
        }
        if (ev.text == '!version') {
            ev.client.chat("[Support++] [url=https://forum.sinusbot.com/resources/support.229/] 2.0.4.7[/url]")
        }
        if (ev.text == '!time')
        {
            ev.client.chat("Your Time: " + time())
        }


//--------------------------------------------------- { Themen Module } -----------------------------------------------------------

        function sendMessage(client, message) {
            if (config.spMsgMode == 0) {
                client.poke(prefixSupport + message.replace("&u", ev.client.name()));
            } else {
                client.chat(prefixSupport + message.replace("&u", ev.client.name()));
            }
        }

        //Themen Module
       
        if (config.spThemenNotificationActiv){
             var inSupportChannelThema = false;
               config.spSupportChannels.forEach(function(sp) {
                    channel = ev.client.getChannels();
                        if (channel[0].id() == sp.spSupportChannel) {
                            //User is in Support Channel
                            inSupportChannelThema = true;
                            
                            }
                        });
                if (inSupportChannelThema){
                    config.spThemen.forEach(function(thema) {
                            if (ev.text == thema.spThemaId){
                                
                            
       //
                if (isFlood(ev.client.id(), config.spAntiFloodPointsSupport)) {} else {
                    if (isIgnore(ev.client.id())) {
                        sendMessage(ev.client, config.spSupportUserIgnoreMessage);
                    } else {

                        //Check Supporter Online?
                        if (!(getSupporter(thema.spThemaSupporterGroups).length > 0)) {
                            //Supporter is Offline
                           

                            if (config.spDiscordModeSupport == 1 || config.spDiscordModeSupport == 0) {
                                sendDiscord(config.spDiscordTextSupport.replace("&u", ev.client.name()), 0, 0);
                            }
                            if (config.spTelegramModeSupport == 1 || config.spTelegramModeSupport == 0) {
                                sendTelegram(config.spTelegrammTextSupport.replace("&u", ev.client.name()));
                            }

                            sendMessage(ev.client, config.spSupportUserNoMessage );
                             playQueuTrackOffline(ev.client.getChannels()[0]);
                           

                        } else {
                            //Supporter is Online!

                            getSupporter(thema.spThemaSupporterGroups).forEach(function(onlineSupporterID) {
                                //GetSupporter action
                                setTimeout(function() {
                                    sendMessage(backend.getClientByID(onlineSupporterID), config.spThemenMessageSupporter.replace("&thema", thema.spThemaName));
                                }, 10);
                            });
                            //Send User Message getSupporter(sp.spSupporterId).length
                          
                            sendMessage(ev.client, config.spThemenMessageUser.replace("&thema", thema.spThemaName))
                            if (config.spTelegramModeSupport == 0) {
                                sendTelegram(config.spTelegrammTextSupport.replace("&u", ev.client.name()).replace("&thema", thema.spThemaName));
                            }
                            if (config.spDiscordModeSupport == 0) {
                                sendDiscord(config.spDiscordTextSupport.replace("&u", ev.client.name()).replace("&thema", thema.spThemaName), 0, 0);
                            }
                            //playTTS(sp.spSupportUserMessage.replace("&u", ev.client.name()))
                            playQueuTrack(ev.client.getChannels()[0]);
                        }
                    }
                }
                                //

        
                            }
                        });
                     
               
                }

        }


        //--------------------------------------------------- {ChannelEdit} -----------------------------------------------------------



     //Channel Edit for Channel with prefix   

        if (ev.text.indexOf('online') == 1 && config.spChannelEditActiv && ev.text != "!online") {
            var parameter = ev.text.replace('!online ', "");

            if (issupporter(ev.client.id(), parameter)) {
                
                    ev.client.chat(message_channeledit_open);
              
                openSupportChannel(parameter);
            }
        }



        if (ev.text.indexOf('offline') == 1 && config.spChannelEditActiv) {
             var parameter = ev.text.replace("!offline ", "");
            if (issupporter(ev.client.id(), parameter)) {
       
                    ev.client.chat(message_channeledit_closed);
     
                    closeSupportChannel(parameter);
            }
        }

        if (ev.text == "!online"){
            var allowChangeAllChannel = false

            ev.client.getServerGroups().forEach(function(gr1){
                config.spSupportChannelSupporterId.forEach(function(gr2){

                    if (gr1.id() == gr2){
                        allowChangeAllChannel = true;
                    }
                });
              });

              if (allowChangeAllChannel){
            config.spChannelEdit.forEach(function(channelEdit){
                    openSupportChannel(channelEdit.spSupportChannelPrefix);
                     });
                      ev.client.chat(message_channeledit_all_open);
                 }
        }

                if (ev.text == "!offline"){
            var allowChangeAllChannel = false

            ev.client.getServerGroups().forEach(function(gr1){
                config.spSupportChannelSupporterId.forEach(function(gr2){

                    if (gr1.id() == gr2){
                        allowChangeAllChannel = true;
                    }
                });
              });

              if (allowChangeAllChannel){
            config.spChannelEdit.forEach(function(channelEdit){
                    closeSupportChannel(channelEdit.spSupportChannelPrefix);
                     });
                 
                    ev.client.chat(message_channeledit_all_closed);
            
              }
        }
     });


            function issupporter(clientId, prefix) {
        var isSupporter = false;
            config.spChannelEdit.forEach(function(channelEdit){
                    backend.getClientByID(clientId).getServerGroups().forEach(function(group){
                        channelEdit.spSupportChannelSupporterId.forEach(function(group2){
                            if (channelEdit.spSupportChannelPrefix == prefix){
                                if (group2 == group.id()){
                                isSupporter = true;
                            }
                            }
                    });
                    });
                });
                        return isSupporter;
    }

    
            function issupporterOnline(prefix) {
          var issupporterOnline = false;
        
            config.spChannelEdit.forEach(function(channelEdit){
                if (prefix == channelEdit.spSupportChannelPrefix){
                    backend.getClients().forEach(function(clients){
                     if (isAFK(clients.getChannels()[0].id())) {
                        clients.getServerGroups().forEach(function(groups){
                            
                        channelEdit.spSupportChannelSupporterId.forEach(function(group2){
                                if (group2 == groups.id()){
                                issupporterOnline = true;
                            
                            }
                        
                    });
                    });
                     }
                });
                }
                });
                        return issupporterOnline;
    }

            function isDefaultsupporter(clientId) {
                var isSupporter = false;
                if (!config.spSupportChannelSupporterId){
                    return isSupporter; 
                }
        
            config.spSupportChannelSupporterId.forEach(function(group){
                    backend.getClientByID(clientId).getServerGroups().forEach(function(group){

                                if (group2 == group.id()){
                                isSupporter = true;
                            
                            }
                    });
                });
                        return isSupporter;
    }
    

    function generatePassword(length)
    {
        var result = "";
        var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for( var i=0; i < length; i++ )
            result += charset.charAt(Math.floor(Math.random() * charset.length));
        return result;
    }

     function closeSupportChannel(parameter) {
         
         config.spChannelEdit.forEach(function(channelEdit){

            var channel = backend.getChannelByID(channelEdit.spSupportChannelNameChange);
        if (channelEdit.spSupportChannelPrefix == parameter){
         if (channelEdit.spSupportChannelPasswordActiv == 0){
         
                    backend.getChannelByID(channelEdit.spSupportChannelNameChange).update({
                    name: channelEdit.spSupportChannelNameOfflineMsg,
                    password: generatePassword(20),
                    description: channelEdit.spSupportChannelNameOfflineDescription
                });  
            }else{
                     backend.getChannelByID(channelEdit.spSupportChannelNameChange).update({
                    name: channelEdit.spSupportChannelNameOfflineMsg,
                    description: channelEdit.spSupportChannelNameOfflineDescription
                });  
            }

                //Update: maxClients: channelEdit.spSupportChannelMaxClientsOffline  
        }
   
        if (channelEdit.spSupportChannelKickActiv == 0){
                  
            var ch = channel.getClients();
                ch.forEach(function(client){
                    if (!client.isSelf()){
                       client.kickFromChannel(message_channeledit_kickreason);
                    } 
                 });
            
        }
   
            });
            pw = "";
    }

     function openSupportChannel(parameter) {
    config.spChannelEdit.forEach(function(channelEdit){
        if (channelEdit.spSupportChannelPrefix == parameter){
        backend.getChannelByID(channelEdit.spSupportChannelNameChange).update({
        name: channelEdit.spSupportChannelNameOnlineMsg,
        password: "",
        description: channelEdit.spSupportChannelNameOnlinDescription
    });
    //Update: maxClients: channelEdit.spSupportChannelMaxClientsOnline,
        }
    });
    }

       


 //--------------------------------------------------- { Automatic SupportChannel Manager} -----------------------------------------------------------
          event.on('clientMove', function(ev) {
        config.spAfkChannels.forEach(function(afkCh){
            if ((ev.fromChannel == null && config.spSupportChannelOpenAutomatic && ev.toChannel.isDefault()) || (ev.fromChannel.id() == afkCh.spAfkChannel && config.spSupportChannelOpenAutomatic)){
                engine.log("Open: " + afkCh.spAfkChannel + " | "  + ev.toChannel.id() );
                config.spChannelEdit.forEach(function(channelEdit){
                    ev.client.getServerGroups().forEach(function(group){
                        channelEdit.spSupportChannelSupporterId.forEach(function(group2){
                            if (group.id() == group2){
                                engine.log("Supporter " + ev.client.name() + " joint Server! Check Suppport Channel..")
                                    openSupportChannel(channelEdit.spSupportChannelPrefix)
                            }
                        });
                    });
                });
            }
        });

 config.spAfkChannels.forEach(function(afkCh){
            if (ev.toChannel == null  && config.spSupportChannelCloseAutomatic) {
                config.spChannelEdit.forEach(function(channelEdit){
                    ev.client.getServerGroups().forEach(function(group){
                        channelEdit.spSupportChannelSupporterId.forEach(function(group2){
                            if (group.id() == group2){
                                engine.log("Supporter " + ev.client.name() + " leave Server! Check Suppport Channel..")
                                     if (!(issupporterOnline(channelEdit.spSupportChannelPrefix)))
                                         {
                                             closeSupportChannel(channelEdit.spSupportChannelPrefix)
                                        }else{
                                        }
                                    }
                                     });
                                      });

                });
            }else if (ev.toChannel.id() == afkCh.spAfkChannel && config.spSupportChannelCloseAutomatic) {
                config.spChannelEdit.forEach(function(channelEdit){
                    ev.client.getServerGroups().forEach(function(group){
                        channelEdit.spSupportChannelSupporterId.forEach(function(group2){
                            if (group.id() == group2){
                                engine.log("Supporter " + ev.client.name() + " leave Server! Check Suppport Channel..")
                                     if (!(issupporterOnline(channelEdit.spSupportChannelPrefix)))
                                         {
                                             closeSupportChannel(channelEdit.spSupportChannelPrefix)
                                        }else{
                                        }
                                    }
                                     });
                                      });

                });
            }
        });

       

    });


 //--------------------------------------------------- { Time SupportChannel Manager} -----------------------------------------------------------

    var tz = [-11,-10,-9,-8.5,-8,-7,-6,-5,-4,-3.5,-3,-2.5,-2,-1,0,1,2,3,4,4.5,5,5.5,6,6.5,6.75,7,7.5,8,9,9.5,9.75,10,10.5,11,11.5,12,13,13.75,14,15];

    	function time() {
		var nonutc = new Date();
        var utc = nonutc.getTime() + (nonutc.getTimezoneOffset() * 60000);
		var now = new Date(utc + (3600000*tz[config.spTimeZo]));
		var h = now.getHours();
		var m = now.getMinutes();
		
		if (m<10) {
			m = "0" + m;
		}
		
		return ntime = h + ":" + m;
	}


       if (config.spTimeChannelManagerActiv)
       {
        setInterval(function() {
            var timeNow = time(); 
            config.spTimeChannelManager.forEach(function(timeManager){
                if (timeNow == timeManager.spTime){
                    
                      if (timeManager.spTimeAction == 0)
                      {
                          openSupportChannel(timeManager.spTimePrefix)
                           engine.log("Support channel " + timeManager.spTimePrefix + " are open by time." )
                      }
                      else
                      {
                        closeSupportChannel(timeManager.spTimePrefix)
                        engine.log("Support channel " + timeManager.spTimePrefix + " are close by time." )
                      }
               
                }

            });

           
        }, 50000);
       }



        //--------------------------------------------------- {ChannelEdit} -----------------------------------------------------------
   

    //--------------------------------------------------- {Queue play track} -----------------------------------------------------------

    //For this module, I would like to thank TS3Index. I have been inspired by the "welcome sound" script...

    var resumePlayback = false;
    var resumeTrack = false;
    var resumePlaylist = false;
    var resumePos = 0;
    var securejoin = true;
    var spQueueVolumen;
    var oldVolumen;
    var currentTrack;
    var posTrack;
    var queueChannel;
    var queueClient;

    var connectUrl = "http://sounds.support-pp.de/"
    var playUrl;

var sounds = ["null",
            "Support_Offline_FAQ_Musik.wav", 
            "Support_Offline_Lite.wav", 
            "Support_Offline_Lite_Dunkle_Stimme.wav", 
            "Support_Offline_Lite_Helle_Stimme.wav", 
            "Support_Offline_Lite_Langame_Stimme.wav",
            "Support_Offline_Lite_Musik.wav",

            "Support_Online_FAQ.wav",
            "Support_Online_FAQ_Musik.wav",
            "Support_Online_Funny_EricCartman.wav",
            "Support_Online_Funny_EricCartman_Musik.wav",
            "Support_Online_Lite_Mitarbeiter.wav",
            "Support_Online_Lite_Mitarbeiter_Gespräch.wav",
            "Support_Online_Lite_Supporter.wav",
            "Support_Online_Lite_Supporter_Gespräch.wav",
            "Support_Online_Lite_Supporter_Gespräch_Musik.wav",

            "Willkommen_Lite.wav",
            "Willkommen_Regeln_Funny_Musik.wav",
            "Willkommen_Regeln_Happy.wav",
            "Willkommen_Regeln_Happy_Musik.wav",
            "Willkommen_Regeln_Webseite_Musik_1.wav",
            "Willkommen_Regeln_Webseite_Musik_2.wav",

            "Support_Offline_Lite_EN.wav",
            "Support_Offline_Lite_Music_EN.wav"
            ];

    function playQueuTrack(channelId) {

        if (config.spQueueActiv) {
          //  if (!(typeof config.spQueueTrackOnline == 'undefined')) {
                if (typeof config.spQueueVolumen == 'undefined') {
                    spQueueVolumen = 70;
                } else {
                    spQueueVolumen = config.spQueueVolumen;
                }
                setTimeout(function() {
                    TrackBotJoin(channelId);
                }, 600);
                engine.log("Queue starting...");
                var currentTrack = media.getCurrentTrack();
                if (audio.isPlaying()) {
                    resumePlayback = true;
                    resumePos = audio.getTrackPosition();
                    resumeTrack = currentTrack;
                    resumePlaylist = media.getActivePlaylist() ? media.getActivePlaylist().id() : false;
                    if (config.spQueueOwnActiv)
                    {
                        media.playURL(config.spQueueTrackOnline.url + '&callback=spQueue&copy=true');
                    }else{
                         media.playURL(connectUrl + sounds[config.spSelectMusic] + '&callback=spQueue&copy=true' );
                    }
                        
                } else if (resumePlayback) {
                    securejoin = false;
                    
              if (config.spQueueOwnActiv)
                    {
                        media.playURL(config.spQueueTrackOnline.url + '&callback=spQueue&copy=true');
                    }else{
                         media.playURL(connectUrl + sounds[config.spSelectMusic] + '&callback=spQueue&copy=true' );
                    }
                } else {
                     if (config.spQueueOwnActiv)
                    {
                        media.playURL(config.spQueueTrackOnline.url);
                    }else{
                         media.playURL(connectUrl + sounds[config.spSelectMusic]);
                    }

                    //config.spQueueTrackOnline.url
                }
           // } else {
             //   engine.log('No Track select!')
            //}
        }
    }
function playQueuTrackOffline(channelId) {

        if (config.spQueueActiv) {
          //  if (!(typeof config.spQueueTrackOnline == 'undefined')) {
                if (typeof config.spQueueVolumen == 'undefined') {
                    spQueueVolumen = 70;
                } else {
                    spQueueVolumen = config.spQueueVolumen;
                }
                setTimeout(function() {
                    TrackBotJoin(channelId);
                }, 600);
                engine.log("Queue starting...");
                var currentTrack = media.getCurrentTrack();
                if (audio.isPlaying()) {
                    resumePlayback = true;
                    resumePos = audio.getTrackPosition();
                    resumeTrack = currentTrack;
                    resumePlaylist = media.getActivePlaylist() ? media.getActivePlaylist().id() : false;
                    if (config.spQueueOwnActiv)
                    {
                        media.playURL(config.spQueueTrackOffline.url + '&callback=spQueue&copy=true');
                    }else{
                         media.playURL(connectUrl + sounds[config.spSelectMusicOffline] + '&callback=spQueue&copy=true' );
                    }
                        
                } else if (resumePlayback) {
                    securejoin = false;
                    
              if (config.spQueueOwnActiv)
                    {
                        media.playURL(config.spQueueTrackOffline.url + '&callback=spQueue&copy=true');
                    }else{
                         media.playURL(connectUrl + sounds[config.spSelectMusicOffline] + '&callback=spQueue&copy=true' );
                    }
                } else {
                     if (config.spQueueOwnActiv)
                    {
                        media.playURL(config.spQueueTrackOffline.url);
                    }else{
                         media.playURL(connectUrl + sounds[config.spSelectMusicOffline]);
                    }

                    //config.spQueueTrackOnline.url
                }
           // } else {
             //   engine.log('No Track select!')
            //}
        }
    }
       

    event.on('trackEnd', function(ev, callback) {
        engine.log('Queue trach finnish')
        if (callback == 'spQueue' && resumePlayback) {
            if (securejoin && resumeTrack) {
                engine.log("Resume last track: " + resumeTrack.Title());
                resumePlayback = false;
                TrackBotJoin(queueChannel);
                if (resumeTrack.Type() == 'url' && resumeTrack.Filename()) {
                    media.playURL(resumeTrack.Filename());
                } else if (resumeTrack.id()) {
                    audio.setMute(true);
                    if (resumePlaylist) media.getPlaylistByID(resumePlaylist).setActive();
                    media.playURL("track://" + resumeTrack.id());
                    audio.seek(resumePos);
                    audio.setMute(false);
                }
            }
            securejoin = true;
        }
    });

    function TrackBotJoin(channelId) {
        if (config.spQueueMove) {
            backend.getClients().forEach(function(client) {
                if (client.isSelf() == true) {
                    queueClient = client.id();
                    client.getChannels().forEach(function(channel) {
                        queueChannel = channel;
                        if (channel.id() == channelId.id()) {
                            engine.log('[Queue] Is alredy in Channel..');
                        } else {
                            client.moveTo(channelId);
                        }
                    });
                }
            });
        }
    }

    //--------------------------------------------------- {Queue play track} -----------------------------------------------------------
});