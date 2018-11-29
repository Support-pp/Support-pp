import {ILanguageBase} from "../interfaces/ILanguageBase";
import {LanguageHandler} from "./language-handler";

export class ManifestConfig {
    private static LANG: ILanguageBase;

    public static setLang(lang: ILanguageBase) {
        this.LANG = lang;
    }

    public static getManifest(): Manifest {
        if (!this.LANG)
            this.setLang(LanguageHandler.getLanguage(1));
        return {
            name: 'Support++ [TypeScript]',
            version: '3.0.4.9-2 BETA',
            description: 'Advanced support script + ticket system + Telegram and Discord notification + channel rename',
            author: 'VerHext <support@allesverhext.de>',
            enableWeb: true,
            engines: '>= 0.10.7',
            vars: [
                {
                    name: 'spWelcome',
                    title: this.LANG.manifest.spWelcome
                },
                {
                    name: 'spDatenschutz',
                    title: this.LANG.manifest.spPrivacy.title,
                    type: 'select',
                    options: [this.LANG.manifest.spPrivacy.options.accept, this.LANG.manifest.spPrivacy.options.deny]
                },
                {
                    name: 'spLanguage',
                    title: this.LANG.manifest.spLanguage.title,
                    type: 'select',
                    options: [this.LANG.manifest.spLanguage.options.german, this.LANG.manifest.spLanguage.options.english],
                    conditions: [
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spSorryGermanNot',
                    indent: 2,
                    title: this.LANG.manifest.spGermanNotAvailable,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 0
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spSupportChannels',
                    indent: 2,
                    title: this.LANG.manifest.spSupportChannels.title,
                    type: 'array',
                    vars: [
                        {
                            name: 'spSupportChannel',
                            indent: 1,
                            title: this.LANG.manifest.spSupportChannels.vars.spSupportChannel,
                            type: 'channel'
                        },
                        {
                            name: 'spSupporterId',
                            indent: 1,
                            title: this.LANG.manifest.spSupportChannels.vars.spSupporterId,
                            type: 'strings'
                        },
                        {
                            name: 'spSupportUserMessage',
                            indent: 1,
                            title: this.LANG.manifest.spSupportChannels.vars.spSupportUserMessage.title,
                            placeholder: this.LANG.manifest.spSupportChannels.vars.spSupportUserMessage.placeholder,
                            type: 'string'
                        },
                        {
                            name: 'spSupportMessage',
                            indent: 1,
                            title: this.LANG.manifest.spSupportChannels.vars.spSupportMessage.title,
                            placeholder: this.LANG.manifest.spSupportChannels.vars.spSupportMessage.placeholder,
                            type: 'string'
                        }],
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }],
                },
                {
                    name: 'spIgnoreId',
                    indent: 2,
                    title: this.LANG.manifest.spIgnoreId,
                    type: 'strings',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spAfkChannels',
                    indent: 2,
                    title: this.LANG.manifest.spAfkChannels.title,
                    type: 'array',
                    vars: [
                        {
                            name: 'spAfkChannel',
                            title: this.LANG.manifest.spAfkChannels.spAfkChannel,
                            type: 'channel'
                        },
                        {
                            name: 'spAfkChannelSub',
                            title: this.LANG.manifest.spAfkChannels.spAfkChannelSub,
                            type: 'checkbox'
                        }],
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spSupportUserNoMessage',
                    indent: 2,
                    title: this.LANG.manifest.spSupportUserNoMessage.title,
                    placeholder: this.LANG.manifest.spSupportUserNoMessage.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spSupportUserIgnoreMessage',
                    indent: 2,
                    title: this.LANG.manifest.spSupportUserIgnoreMessage.title,
                    placeholder: this.LANG.manifest.spSupportUserIgnoreMessage.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spMsgMode_user',
                    title: this.LANG.manifest.spMsgMode_user.title,
                    type: 'select',
                    options: [this.LANG.manifest.spMsgMode_user.options.poke, this.LANG.manifest.spMsgMode_user.options.chat],
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spMsgMode_sp',
                    title: this.LANG.manifest.spMsgMode_sp.title,
                    type: 'select',
                    options: [this.LANG.manifest.spMsgMode_sp.options.poke, this.LANG.manifest.spMsgMode_sp.options.chat],
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                // ------------------------------------------------------------------- {Module Config} ---------------------------------------------------------------------------------
                {
                    name: 'spModule',
                    title: this.LANG.manifest.spModule,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                /*
                        //                         -> Support++ API
                        {
                            name: 'spAPIActiv',
                            indent: 2,
                            title: this.LANG.manifest.spAPIActive,
                            type: 'checkbox',
                            conditions: [
{
                                field: 'spLanguage',
                                value: 1
                            },{
                                field: 'spDatenschutz',
                                value: 0
                            } ]
                        },{
                            name: 'spInfoAPI',
                            indent: 4,
                            title: this.LANG.manifest.spInfoAPI,
                            conditions: [
{
                                    field: 'spLanguage',
                                    value: 1
                                },{
                                    field: 'spAPIActiv',
                                    value: true
                                },{
                                    field: 'spDatenschutz',
                                    value: 0
                            }]
                        },
{
                            name: 'spInfoAPI2',
                            indent: 4,
                            title: this.LANG.manifest.spInfoAPI2,
                            conditions: [
{
                                    field: 'spLanguage',
                                    value: 1
                                },{
                                    field: 'spAPIActiv',
                                    value: true
                                },{
                                    field: 'spDatenschutz',
                                    value: 0
                            }]
                        },
{
                            name: 'spAPIToken',
                            indent: 4,
                            title: this.LANG.manifest.spAPIToken,
                            type: 'password',
                            conditions: [
{
                                    field: 'spLanguage',
                                    value: 1
                                },{
                                    field: 'spAPIActiv',
                                    value: true
                                },{
                                    field: 'spDatenschutz',
                                    value: 0
                            }]
                        },
                */

                //                        -> MySQL
                {
                    name: 'spMySQLActiv',
                    indent: 2,
                    title: this.LANG.manifest.spMySQLActive,
                    type: 'checkbox',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spDBINFO',
                    indent: 4,
                    title: this.LANG.manifest.spDBINFO,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spMySQLActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spHost',
                    indent: 4,
                    title: this.LANG.manifest.spHost.title,
                    placeholder: this.LANG.manifest.spHost.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spMySQLActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spUsername',
                    indent: 4,
                    title: this.LANG.manifest.spUsername.title,
                    placeholder: this.LANG.manifest.spUsername.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spMySQLActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spPassword',
                    indent: 4,
                    title: this.LANG.manifest.spPassword.title,
                    placeholder: this.LANG.manifest.spPassword.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spMySQLActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spDB',
                    indent: 4,
                    title: this.LANG.manifest.spDB.title,
                    placeholder: this.LANG.manifest.spDB.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spMySQLActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spDBPROINFO',
                    indent: 4,
                    title: this.LANG.manifest.spDBPROINFO,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spMySQLActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                //                         -> Ticket
                {
                    name: 'spTicketActiv',
                    indent: 2,
                    title: this.LANG.manifest.spTicketActive,
                    type: 'checkbox',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spTicketCommand',
                    indent: 4,
                    title: this.LANG.manifest.spTicketCommand.title,
                    placeholder: this.LANG.manifest.spTicketCommand.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spTicketActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spTicketSendMsg',
                    indent: 4,
                    title: this.LANG.manifest.spTicketSendMsg.title,
                    placeholder: this.LANG.manifest.spTicketSendMsg.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spTicketActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spNewTicketMsg',
                    indent: 4,
                    title: this.LANG.manifest.spNewTicketMsg.title,
                    placeholder: this.LANG.manifest.spNewTicketMsg.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spTicketActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spTicketLargeActiv',
                    indent: 4,
                    title: this.LANG.manifest.spTicketLargeActive,
                    type: 'checkbox',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spTicketActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                //                          Ticket  <-
                //                        -> Telegram
                {
                    name: 'spTelegramActiv',
                    indent: 2,
                    title: this.LANG.manifest.spTelegramActive,
                    type: 'checkbox',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spTelegramModeTicket',
                    indent: 4,
                    title: this.LANG.manifest.spTelegramModeTicket.title,
                    type: 'select',
                    options: [this.LANG.manifest.spTelegramModeTicket.options.always, this.LANG.manifest.spTelegramModeTicket.options.when_no_supporter_online, this.LANG.manifest.spTelegramModeTicket.options.never],
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spTelegramActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spTelegramModeSupport',
                    indent: 4,
                    title: this.LANG.manifest.spTelegramModeSupport.title,
                    type: 'select',
                    options: [this.LANG.manifest.spTelegramModeSupport.options.always, this.LANG.manifest.spTelegramModeSupport.options.when_no_supporter_online, this.LANG.manifest.spTelegramModeSupport.options.never],
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spTelegramActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spTelegramID',
                    indent: 4,
                    title: this.LANG.manifest.spTelegramID.title,
                    placeholder: this.LANG.manifest.spTelegramID.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spTelegramActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spTelegramToken',
                    indent: 4,
                    title: this.LANG.manifest.spTelegramToken.title,
                    placeholder: this.LANG.manifest.spTelegramToken.placeholder,
                    type: 'password',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spTelegramActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spTelegrammTextSupport',
                    indent: 4,
                    title: this.LANG.manifest.spTelegrammTextSupport.title,
                    placeholder: this.LANG.manifest.spTelegrammTextSupport.placeholder,
                    type: 'multiline',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spTelegramActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spTelegrammTextTicket',
                    indent: 4,
                    title: this.LANG.manifest.spTelegrammTextTicket.title,
                    placeholder: this.LANG.manifest.spTelegrammTextTicket.placeholder,
                    type: 'multiline',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spTelegramActiv',
                            value: true
                        },
                        {
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
                    title: this.LANG.manifest.spDiscordActive,
                    type: 'checkbox',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spDiscordModeTicket',
                    indent: 4,
                    title: this.LANG.manifest.spDiscordModeTicket.title,
                    type: 'select',
                    options: [this.LANG.manifest.spDiscordModeTicket.options.always, this.LANG.manifest.spDiscordModeTicket.options.when_no_supporter_online, this.LANG.manifest.spDiscordModeTicket.options.never],
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDiscordActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spDiscordModeSupport',
                    indent: 4,
                    title: this.LANG.manifest.spDiscordModeSupport.title,
                    type: 'select',
                    options: [this.LANG.manifest.spDiscordModeSupport.options.always, this.LANG.manifest.spDiscordModeSupport.options.when_no_supporter_online, this.LANG.manifest.spDiscordModeSupport.options.never],
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDiscordActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spTicketResponseToken',
                    indent: 4,
                    title: this.LANG.manifest.spTicketResponseToken.title,
                    placeholder: this.LANG.manifest.spTicketResponseToken.placeholder,
                    type: 'password',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDiscordActiv',
                            value: true
                        },
                        {
                            field: 'spTicketActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spDiscordID',
                    indent: 4,
                    title: this.LANG.manifest.spDiscordID.title,
                    placeholder: this.LANG.manifest.spDiscordID.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDiscordActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spDiscordToken',
                    indent: 4,
                    title: this.LANG.manifest.spDiscordToken.title,
                    placeholder: this.LANG.manifest.spDiscordToken.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDiscordActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spDiscordTextSupport',
                    indent: 4,
                    title: this.LANG.manifest.spDiscordTextSupport.title,
                    placeholder: this.LANG.manifest.spDiscordTextSupport.placeholder,
                    type: 'multiline',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDiscordActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spDiscordTextTicket',
                    indent: 4,
                    title: this.LANG.manifest.spDiscordTextTicket.title,
                    placeholder: this.LANG.manifest.spDiscordTextTicket.placeholder,
                    type: 'multiline',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDiscordActiv',
                            value: true
                        },
                        {
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
                    title: this.LANG.manifest.spChannelEditActive,
                    type: 'checkbox',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]

                },
                {
                    name: 'spChanneleditInfoTutorial',
                    indent: 2,
                    title: this.LANG.manifest.spChanneleditInfoTutorial,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spChannelEditActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }],
                },
                {
                    name: 'spSupportChannelCommandOpen',
                    indent: 2,
                    title: this.LANG.manifest.spSupportChannelCommandOpen.title,
                    placeholder: this.LANG.manifest.spSupportChannelCommandOpen.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spChannelEditActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spSupportChannelCommandClose',
                    indent: 2,
                    title: this.LANG.manifest.spSupportChannelCommandClose.title,
                    placeholder: this.LANG.manifest.spSupportChannelCommandClose.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spChannelEditActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spChannelEdit',
                    indent: 2,
                    title: this.LANG.manifest.spChannelEdit.title,
                    type: 'array',
                    vars: [
                        {
                            name: 'spSupportChannelNameOnlineMsg',
                            indent: 1,
                            title: this.LANG.manifest.spChannelEdit.vars.spSupportChannelNameOfflineMsg.title,
                            placeholder: this.LANG.manifest.spChannelEdit.vars.spSupportChannelNameOfflineMsg.placeholder,
                            type: 'string',
                        },
                        {
                            name: 'spSupportChannelNameOnlinDescription',
                            indent: 1,
                            title: this.LANG.manifest.spChannelEdit.vars.spSupportChannelNameOnlineDescription.title,
                            placeholder: this.LANG.manifest.spChannelEdit.vars.spSupportChannelNameOnlineDescription.placeholder,
                            type: 'multiline',
                        },
                        {
                            name: 'spSupportChannelMaxClientsOnline',
                            indent: 1,
                            title: this.LANG.manifest.spChannelEdit.vars.spSupportChannelMaxClientsOnline.title,
                            placeholder: this.LANG.manifest.spChannelEdit.vars.spSupportChannelMaxClientsOnline.placeholder,
                            type: 'number',

                        },
                        {
                            name: 'spSupportChannelNameOfflineMsg',
                            indent: 1,
                            title: this.LANG.manifest.spChannelEdit.vars.spSupportChannelNameOfflineMsg.title,
                            placeholder: this.LANG.manifest.spChannelEdit.vars.spSupportChannelNameOfflineMsg.placeholder,
                            type: 'string',
                        },
                        {
                            name: 'spSupportChannelNameOfflineDescription',
                            indent: 1,
                            title: this.LANG.manifest.spChannelEdit.vars.spSupportChannelNameOfflineDescription.title,
                            placeholder: this.LANG.manifest.spChannelEdit.vars.spSupportChannelNameOfflineDescription.placeholder,
                            type: 'multiline',
                        },
                        {
                            name: 'spSupportChannelMaxClientsOffline',
                            indent: 1,
                            title: this.LANG.manifest.spChannelEdit.vars.spSupportChannelMaxClientsOffline.title,
                            placeholder: this.LANG.manifest.spChannelEdit.vars.spSupportChannelMaxClientsOffline.placeholder,
                            type: 'number',
                        },
                        {
                            name: 'spSupportChannelNameChange',
                            indent: 1,
                            title: this.LANG.manifest.spChannelEdit.vars.spSupportChannelNameChange,
                            type: 'channel',
                        },
                        {
                            name: 'spSupportChannelSupporterId',
                            indent: 1,
                            title: this.LANG.manifest.spChannelEdit.vars.spSupportChannelSupporterId,
                            type: 'strings',
                        },
                        {
                            name: 'spSupportChannelPasswordActiv',
                            indent: 1,
                            title: this.LANG.manifest.spChannelEdit.vars.spSupportChannelPasswordActive.title,
                            type: 'select',
                            options: [this.LANG.manifest.spChannelEdit.vars.spSupportChannelPasswordActive.options.yes, this.LANG.manifest.spChannelEdit.vars.spSupportChannelPasswordActive.options.no],
                        },
                        {
                            name: 'spSupportChannelKickActiv',
                            indent: 1,
                            title: this.LANG.manifest.spChannelEdit.vars.spSupportChannelKickActive.title,
                            type: 'select',
                            options: [this.LANG.manifest.spChannelEdit.vars.spSupportChannelKickActive.options.yes, this.LANG.manifest.spChannelEdit.vars.spSupportChannelKickActive.options.no],
                        },
                        {
                            name: 'spSupportChannelPrefix',
                            indent: 1,
                            title: this.LANG.manifest.spChannelEdit.vars.spSupportChannelPrefix.title,
                            placeholder: this.LANG.manifest.spChannelEdit.vars.spSupportChannelPrefix.placeholder,
                            type: 'string',
                        }
                    ],
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spChannelEditActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }],
                },
                {
                    name: 'spSupportChannelSupporterId',
                    indent: 3,
                    title: this.LANG.manifest.spSupportChannelSupporterId,
                    type: 'strings',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spChannelEditActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },


                //                        ChannelEdit <-

                //                        -> Automatic Channel Manager

                {
                    name: 'spAutomaticChannelManager',
                    indent: 2,
                    title: this.LANG.manifest.spAutomaticChannelManager,
                    type: 'checkbox',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spChannelEditActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spSupportChannelOpenAutomatic',
                    indent: 3,
                    title: this.LANG.manifest.spSupportChannelOpenAutomatic,
                    type: 'checkbox',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spAutomaticChannelManager',
                            value: true
                        },
                        {
                            field: 'spChannelEditActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spSupportChannelCloseAutomatic',
                    indent: 3,
                    title: this.LANG.manifest.spSupportChannelCloseAutomatic,
                    type: 'checkbox',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spAutomaticChannelManager',
                            value: true
                        },
                        {
                            field: 'spChannelEditActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                //                        -> Time
                {
                    name: 'spTimeChannelManagerActiv',
                    indent: 2,
                    title: this.LANG.manifest.spTimeChannelManagerActive,
                    type: 'checkbox',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spChannelEditActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spTimeZo',
                    indent: 3,
                    title: this.LANG.manifest.spTimeZone,
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
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spChannelEditActiv',
                            value: true
                        },
                        {
                            field: 'spTimeChannelManagerActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spTimeChannelManager',
                    indent: 2,
                    title: this.LANG.manifest.spTimeChannelManager.title,
                    type: 'array',
                    vars: [
                        {
                            name: 'spTimePrefix',
                            indent: 1,
                            title: this.LANG.manifest.spTimeChannelManager.vars.spTimePrefix,
                            type: 'string'
                        },
                        {
                            name: 'spTime',
                            indent: 1,
                            title: this.LANG.manifest.spTimeChannelManager.vars.spTime,
                            placeholder: '17:00 or 09:00',
                            type: 'string'
                        },
                        {
                            name: 'spTimeAction',
                            indent: 1,
                            title: this.LANG.manifest.spTimeChannelManager.vars.spTimeAction.title,
                            type: 'select',
                            options: [this.LANG.manifest.spTimeChannelManager.vars.spTimeAction.options.open, this.LANG.manifest.spTimeChannelManager.vars.spTimeAction.options.close],
                        }],
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spChannelEditActiv',
                            value: true
                        },
                        {
                            field: 'spTimeChannelManagerActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                //                        -> Queue
                {
                    name: 'spQueueActiv',
                    indent: 2,
                    title: this.LANG.manifest.spQueueActive,
                    type: 'checkbox',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spQueueOwnActiv',
                    indent: 4,
                    title: this.LANG.manifest.spQueueOwnActive,
                    type: 'checkbox',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                // Start audio von stream server!
                {
                    name: 'spQueueTrackOffline',
                    indent: 4,
                    title: this.LANG.manifest.spQueueTrackOffline.title,
                    placeholder: this.LANG.manifest.spQueueTrackOffline.placeholder,
                    type: 'track',
                    conditions: [
                        {
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
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spQueueTrackOnline',
                    indent: 4,
                    title: this.LANG.manifest.spQueueTrackOnline.title,
                    placeholder: this.LANG.manifest.spQueueTrackOnline.placeholder,
                    type: 'track',
                    conditions: [
                        {
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
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {

                    name: 'best_thanks_006mi4',
                    indent: 0,
                    title: this.LANG.manifest.best_thanks_006mi4,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spQueueText0',
                    indent: 4,
                    title: this.LANG.manifest.spQueueText0,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {

                    name: 'Support_Offline_FAQ_Musik',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsOfflineGerman.FAQ_Musik,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'Support_Offline_Lite_DE',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsOfflineGerman.Lite_DE,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'Support_Offline_Lite_Dunkle_Stimme',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsOfflineGerman.Lite_Dunkle_Stimme,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'Support_Offline_Lite_Helle_Stimme',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsOfflineGerman.Lite_Helle_Stimme,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'Support_Offline_Lite_Langame_Stimme',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsOfflineGerman.Lite_Langsame_Stimme,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'Support_Offline_Lite_Musik',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsOfflineGerman.Lite_Musik,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spQueueText1',
                    indent: 4,
                    title: this.LANG.manifest.spQueueText1,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'Support_Online_FAQ_DE',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsOnlineGerman.FAQ_DE,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'Support_Online_FAQ_Musik',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsOnlineGerman.FAQ_Musik,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'Support_Online_Funny_EricCartman',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsOnlineGerman.Funny_EricCartman,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'Support_Online_Funny_EricCartman_Musik',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsOnlineGerman.Funny_EricCartman_Musik,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'Support_Online_Lite_Mitarbeiter',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsOnlineGerman.Lite_Mitarbeiter,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'Support_Online_Lite_Mitarbeiter_Gespräch',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsOnlineGerman.Lite_Mitarbeiter_Gespraech,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'Support_Online_Lite_Supporter',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsOnlineGerman.Lite_Supporter,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'Support_Online_Lite_Supporter_Gespräch',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsOnlineGerman.Lite_Supporter_Gespraech,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'Support_Online_Lite_Supporter_Gespräch_Musik',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsOnlineGerman.Lite_Supporter_Gespraech_Musik,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                // Willkommen
                {
                    name: 'spQueueText2',
                    indent: 4,
                    title: this.LANG.manifest.spQueueText2,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'Willkommen_Lite',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsWelcomeGerman.Lite,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'Willkommen_Regeln_Funny_Musik',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsWelcomeGerman.Regeln_Funny_Musik,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'Willkommen_Regeln_Happy',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsWelcomeGerman.Regeln_Happy,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'Willkommen_Regeln_Happy_Musik',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsWelcomeGerman.Regeln_Happy_Musik,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'Willkommen_Regeln_Webseite_Musik_1',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsWelcomeGerman.Regeln_Webseite_Musik_1,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'Willkommen_Regeln_Webseite_Musik_2',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsWelcomeGerman.Regeln_Webseite_Musik_2,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spQueueText3',
                    indent: 4,
                    title: this.LANG.manifest.spQueueText3,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },

                {
                    name: 'Support_Offline_Lite',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsOfflineEng.Lite,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'Support_Offline_Liste_Music',
                    indent: 6,
                    title: this.LANG.manifest.spSoundsOfflineEng.Liste_Music,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spSelectMusic',
                    indent: 1,
                    title: this.LANG.manifest.spSelectMusic.title,
                    placeholder: this.LANG.manifest.spSelectMusic.placeholder,
                    type: 'number',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spSelectMusicOffline',
                    indent: 1,
                    title: this.LANG.manifest.spSelectMusicOffline.title,
                    placeholder: this.LANG.manifest.spSelectMusicOffline.placeholder,
                    type: 'number',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'best_thanks_006mi4_2',
                    indent: 0,
                    title: this.LANG.manifest.best_thanks_006mi4_2,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {

                    name: 'spQueueVolumen',
                    indent: 4,
                    title: this.LANG.manifest.spQueueVolume,
                    placeholder: '60',
                    type: 'number',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }

                    ]
                },
                {
                    name: 'spQueueResume',
                    indent: 4,
                    title: this.LANG.manifest.spQueueResume,
                    type: 'checkbox',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spQueueMove',
                    indent: 4,
                    title: this.LANG.manifest.spQueueMove,
                    type: 'checkbox',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spQueueActiv',
                            value: true
                        },
                        {
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
                    title: this.LANG.manifest.spAntiFloodActive,
                    type: 'checkbox',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spAntiFloodInfo',
                    indent: 4,
                    title: this.LANG.manifest.spAntiFloodInfo,
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spAntiFloodActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spAntiFloodPointsReduce',
                    indent: 4,
                    title: this.LANG.manifest.spAntiFloodPointsReduce,
                    placeholder: '5',
                    type: 'number',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spAntiFloodActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spAntiFloodPointsLimit',
                    indent: 4,
                    title: this.LANG.manifest.spAntiFloodPointsLimit,
                    placeholder: '60',
                    type: 'number',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spAntiFloodActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spAntiFloodPointsTicket',
                    indent: 4,
                    title: this.LANG.manifest.spAntiFloodPointsTicket,
                    placeholder: '20',
                    type: 'number',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spAntiFloodActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spAntiFloodPointsSupport',
                    indent: 4,
                    title: this.LANG.manifest.spAntiFloodPointsSupport,
                    placeholder: '20',
                    type: 'number',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spAntiFloodActiv',
                            value: true
                        },
                        {
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
                    title: this.LANG.manifest.spTopicNotificationActive,
                    type: 'checkbox',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spThemen',
                    indent: 4,
                    title: this.LANG.manifest.spTopic.title,
                    placeholder: '2',
                    type: 'array',
                    vars: [
                        {
                            name: 'spThemaName',
                            indent: 1,
                            title: this.LANG.manifest.spTopic.vars.spTopicName,
                            type: 'string'
                        },
                        {
                            name: 'spThemaId',
                            indent: 1,
                            title: this.LANG.manifest.spTopic.vars.spTopicId,
                            type: 'number'
                        },
                        {
                            name: 'spThemaSupporterGroups',
                            indent: 1,
                            title: this.LANG.manifest.spTopic.vars.spTopicSupporterGroups,
                            type: 'strings'
                        }],
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spThemenNotificationActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }],
                },
                {
                    name: 'spThemenMessageSupporter',
                    indent: 4,
                    title: this.LANG.manifest.spTopicMessageSupporter,
                    placeholder: this.LANG.manifest.spTopicMessageSupporter,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spThemenNotificationActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spThemenMessageUser',
                    indent: 4,
                    title: this.LANG.manifest.spTopicMessageUser.title,
                    placeholder: this.LANG.manifest.spTopicMessageUser.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spThemenNotificationActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spThemenMessage',
                    indent: 4,
                    title: this.LANG.manifest.spTopicMessage.title,
                    placeholder: this.LANG.manifest.spTopicMessage.placeholder,
                    type: 'multiline',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spThemenNotificationActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                //                        -> Prefix
                {
                    name: 'spPrefixActiv',
                    indent: 2,
                    title: this.LANG.manifest.spPrefixActive,
                    type: 'checkbox',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spPrefixTicketReplay',
                    indent: 4,
                    title: this.LANG.manifest.spPrefixTicketReplay.title,
                    placeholder: this.LANG.manifest.spPrefixTicketReplay.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spPrefixActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spPrefixTicket',
                    indent: 4,
                    title: this.LANG.manifest.spPrefixTicket.title,
                    placeholder: this.LANG.manifest.spPrefixTicket.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spPrefixActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spPrefixSupport',
                    indent: 4,
                    title: this.LANG.manifest.spPrefixSupport.title,
                    placeholder: this.LANG.manifest.spPrefixSupport.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spPrefixActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                {
                    name: 'spPrefixFeedback',
                    indent: 4,
                    title: this.LANG.manifest.spPrefixFeedback.title,
                    placeholder: this.LANG.manifest.spPrefixFeedback.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spPrefixActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }
                    ]
                },
                //                         Prefix <-
                //                          -> Feedback
                {
                    name: 'spFeedbackActiv',
                    indent: 2,
                    title: this.LANG.manifest.spFeedbackActive,
                    type: 'checkbox',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'spFeedbackQuestions',
                    indent: 4,
                    title: this.LANG.manifest.spFeedbackQuestions.title,
                    type: 'array',
                    vars: [
                        {
                            name: 'spFeedbackQuestion',
                            indent: 4,
                            title: this.LANG.manifest.spFeedbackQuestions.vars.spFeedbackQuestion.title,
                            placeholder: this.LANG.manifest.spFeedbackQuestions.vars.spFeedbackQuestion.placeholder,
                            type: 'string',
                        }
                    ],
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spFeedbackActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'msg_feedback_openFeedbakSession',
                    indent: 4,
                    title: this.LANG.manifest.msg_feedback_openFeedbackSession,
                    placeholder: this.LANG.manifest.msg_feedback_openFeedbackSession,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spFeedbackActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'msg_feedback_errorFeedbakSession',
                    indent: 4,
                    title: this.LANG.manifest.msg_feedback_errorFeedbackSession.title,
                    placeholder: this.LANG.manifest.msg_feedback_errorFeedbackSession.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spFeedbackActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'msg_feedback_closeFeedbakSession',
                    indent: 4,
                    title: this.LANG.manifest.msg_feedback_closeFeedbackSession.title,
                    placeholder: this.LANG.manifest.msg_feedback_closeFeedbackSession.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spFeedbackActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },
                {
                    name: 'msg_feedback_closeFeedbakSessionOk',
                    indent: 4,
                    title: this.LANG.manifest.msg_feedback_closeFeedbackSessionOk.title,
                    placeholder: this.LANG.manifest.msg_feedback_closeFeedbackSessionOk.placeholder,
                    type: 'string',
                    conditions: [
                        {
                            field: 'spLanguage',
                            value: 1
                        },
                        {
                            field: 'spFeedbackActiv',
                            value: true
                        },
                        {
                            field: 'spDatenschutz',
                            value: 0
                        }]
                },

                {
                    name: 'spCopyright',
                    title: this.LANG.manifest.spCopyright
                }
            ]
        };
    }
}