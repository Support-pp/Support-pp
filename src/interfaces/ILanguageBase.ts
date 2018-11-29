export interface ILanguageBase {
    //------------------{MANIFEST}------------------\
    manifest: {
        spWelcome: string,
        spPrivacy: {
            title: string,
            options: {
                accept: string,
                deny: string
            }
        },
        spLanguage: {
            title: string,
            options: {
                german: string,
                english: string
            }
        },
        spGermanNotAvailable: string,
        spSupportChannels: {
            title: string,
            vars: {
                spSupportChannel: string,
                spSupporterId: string,
                spSupportUserMessage: {
                    title: string,
                    placeholder: string
                },
                spSupportMessage: {
                    title: string,
                    placeholder: string
                },
            }
        },
        spIgnoreId: string,
        spAfkChannels: {
            title: string,
            spAfkChannel: string,
            spAfkChannelSub: string
        }
        spSupportUserNoMessage: {
            title: string,
            placeholder: string
        },
        spSupportUserIgnoreMessage: {
            title: string,
            placeholder: string
        },
        spMsgMode_user: {
            title: string,
            options: {
                poke: string,
                chat: string
            }
        },
        spMsgMode_sp: {
            title: string,
            options: {
                poke: string,
                chat: string
            }
        },
        spModule: string,
        spAPIActive: string,
        spInfoAPI: string,
        spInfoAPI2: string,
        spAPIToken: string,
        spMySQLActive: string,
        spDBINFO: string,
        spHost: {
            title: string,
            placeholder: string
        },
        spUsername: {
            title: string,
            placeholder: string,
        },
        spPassword: {
            title: string,
            placeholder: string,
        },
        spDB: {
            title: string,
            placeholder: string
        },
        spDBPROINFO: string,
        spTicketActive: string,
        spTicketCommand: {
            title: string,
            placeholder: string
        },
        spTicketSendMsg: {
            title: string,
            placeholder: string
        },
        spNewTicketMsg: {
            title: string,
            placeholder: string
        },
        spTicketLargeActive: string,
        spTelegramActive: string,
        spTelegramModeTicket: {
            title: string,
            options: {
                always: string,
                when_no_supporter_online: string,
                never: string
            }
        },
        spTelegramModeSupport: {
            title: string,
            options: {
                always: string,
                when_no_supporter_online: string,
                never: string
            }
        },
        spTelegramID: {
            title: string,
            placeholder: string
        },
        spTelegramToken: {
            title: string,
            placeholder: string
        },
        spTelegrammTextSupport: {
            title: string,
            placeholder: string
        },
        spTelegrammTextTicket: {
            title: string,
            placeholder: string
        },
        spDiscordActive: string,
        spDiscordModeTicket: {
            title: string,
            options: {
                always: string,
                when_no_supporter_online: string,
                never: string
            }
        },
        spDiscordModeSupport: {
            title: string,
            options: {
                always: string,
                when_no_supporter_online: string,
                never: string
            }
        },
        spTicketResponseToken: {
            title: string,
            placeholder: string
        },
        spDiscordID: {
            title: string,
            placeholder: string
        },
        spDiscordToken: {
            title: string,
            placeholder: string
        },
        spDiscordTextSupport: {
            title: string,
            placeholder: string
        },
        spDiscordTextTicket: {
            title: string,
            placeholder: string
        },
        spChannelEditActive: string,
        spChanneleditInfoTutorial: string,
        spSupportChannelCommandOpen: {
            title: string,
            placeholder: string
        },
        spSupportChannelCommandClose: {
            title: string,
            placeholder: string
        },
        spChannelEdit: {
            title: string,
            vars: {
                spSupportChannelNameOnlineMsg: {
                    title: string,
                    placeholder: string
                },
                spSupportChannelNameOnlineDescription: {
                    title: string,
                    placeholder: string
                },
                spSupportChannelMaxClientsOnline: {
                    title: string,
                    placeholder: string
                },
                spSupportChannelNameOfflineMsg: {
                    title: string,
                    placeholder: string
                },
                spSupportChannelNameOfflineDescription: {
                    title: string,
                    placeholder: string
                },
                spSupportChannelMaxClientsOffline: {
                    title: string,
                    placeholder: string
                },
                spSupportChannelNameChange: string,
                spSupportChannelSupporterId: string,
                spSupportChannelPasswordActive: {
                    title: string,
                    options: {
                        yes: string,
                        no: string
                    }
                },
                spSupportChannelKickActive: {
                    title: string,
                    options: {
                        yes: string,
                        no: string
                    }
                },
                spSupportChannelPrefix: {
                    title: string,
                    placeholder: string
                }
            }
        },
        spSupportChannelSupporterId: string,
        spAutomaticChannelManager: string,
        spSupportChannelOpenAutomatic: string,
        spSupportChannelCloseAutomatic: string,
        spTimeChannelManagerActive: string,
        spTimeZone: string,
        spTimeChannelManager: {
            title: string,
            vars: {
                spTimePrefix: string,
                spTime: string,
                spTimeAction: {
                    title: string,
                    options: {
                        open: string,
                        close: string
                    }
                }
            }
        },
        spQueueActive: string,
        spQueueOwnActive: string,
        spQueueTrackOffline: {
            title: string,
            placeholder: string
        },
        spQueueTrackOnline: {
            title: string,
            placeholder: string
        },
        best_thanks_006mi4: string,
        spQueueText0: string,
        spSoundsOfflineGerman: {
            FAQ_Musik: string,
            Lite_DE: string,
            Lite_Dunkle_Stimme: string,
            Lite_Helle_Stimme: string,
            Lite_Langsame_Stimme: string,
            Lite_Musik: string
        }
        spQueueText1: string,
        spSoundsOnlineGerman: {
            FAQ_DE: string,
            FAQ_Musik: string,
            Funny_EricCartman: string,
            Funny_EricCartman_Musik: string,
            Lite_Mitarbeiter: string,
            Lite_Mitarbeiter_Gespraech: string,
            Lite_Supporter: string,
            Lite_Supporter_Gespraech: string,
            Lite_Supporter_Gespraech_Musik: string
        },
        spQueueText2: string,
        spSoundsWelcomeGerman: {
            Lite: string,
            Regeln_Funny_Musik: string,
            Regeln_Happy: string,
            Regeln_Happy_Musik: string,
            Regeln_Webseite_Musik_1: string,
            Regeln_Webseite_Musik_2: string
        },
        spQueueText3: string,
        spSoundsOfflineEng: {
            Lite: string,
            Liste_Music: string
        },
        spSelectMusic: {
            title: string,
            placeholder: string
        },
        spSelectMusicOffline: {
            title: string,
            placeholder: string
        },
        best_thanks_006mi4_2: string,
        spQueueVolume: string,
        spQueueResume: string,
        spQueueMove: string,
        spAntiFloodActive: string,
        spAntiFloodInfo: string,
        spAntiFloodPointsReduce: string,
        spAntiFloodPointsLimit: string,
        spAntiFloodPointsTicket: string,
        spAntiFloodPointsSupport: string,
        spTopicNotificationActive: string,
        spTopic: {
            title: string,
            vars: {
                spTopicName: string,
                spTopicId: string,
                spTopicSupporterGroups: string
            }
        },
        spTopicMessageSupporter: {
            title: string,
            placeholder: string
        },
        spTopicMessageUser: {
            title: string,
            placeholder: string
        },
        spTopicMessage: {
            title: string,
            placeholder: string
        },
        spPrefixActive: string,
        spPrefixTicketReplay: {
            title: string,
            placeholder: string
        },
        spPrefixTicket: {
            title: string,
            placeholder: string
        },
        spPrefixSupport: {
            title: string,
            placeholder: string
        },
        spPrefixFeedback: {
            title: string,
            placeholder: string
        },
        spFeedbackActive: string,
        spFeedbackQuestions: {
            title: string,
            vars: {
                spFeedbackQuestion: {
                    title: string,
                    placeholder: string
                }
            }
        },
        msg_feedback_openFeedbackSession: {
            title: string,
            placeholder: string
        },
        msg_feedback_errorFeedbackSession: {
            title: string,
            placeholder: string
        },
        msg_feedback_closeFeedbackSession: {
            title: string,
            placeholder: string
        },
        msg_feedback_closeFeedbackSessionOk: {
            title: string,
            placeholder: string
        },
        spCopyright: string
    }
    //------------------{\MANIFEST}------------------\\
    system_messages: {
        channeledit_kickreason: string,
        channeledit_all_closed: string,
        channeledit_all_open: string,
        channeledit_closed: string,
        channeledit_open: string,
        antiflood_blocked: string,
        channeledit_no_permission_all: string,
        channeledit_no_permission: string,
    }
}