const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const OWNER = "it sends details of owner"

const GIT = "it sends links"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

        asena.addCommand({pattern: 'owner', fromMe: true, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "ʜɪ......
    
    ┌─────❲ *MRTECH-BOT𖤍❳* 
    ┊
    └─────────────────✪---------𖤍
       ───────╔╗───────╔╗─
       ╔══╗╔╦╗║╚╗╔═╗╔═╗║╚╗
       ║║║║║╔╝║╔╣║╩╣║═╣║║║
       ╚╩╩╝╚╝─╚═╝╚═╝╚═╝╚╩╝
       ───────────────────
    
    ┌─────❲ *ᴏᴡɴᴇʀ* ❳
    ┊☞ ᴏᴡɴᴇʀ : ᴍʜᴅ.ᴛᴀ ™
    ┊☞ wa.me/919288405103
    ┊☞ʙᴏᴛ ɴᴀᴍᴇ : ᴍʀ-ᴛᴇᴄʜ_ʙᴏᴛ®
    ┊☞︎︎︎sᴛᴀᴛᴜs:ᴡᴏʀᴋɪɴɢ ᴀs ᴘᴜʙʟɪᴄ
    ┊☞ ᴠᴇʀꜱɪᴏɴ : ᴠ2
    └──────────────----------𖤍
    
    
        ║▌│█║▌│ █║▌│█│║
          ©919288405103™"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "ʜɪ......
        
        ┌─────❲ *MRTECH-BOT𖤍❳* 
        ┊
        └─────────────────✪---------𖤍
           ───────╔╗───────╔╗─
           ╔══╗╔╦╗║╚╗╔═╗╔═╗║╚╗
           ║║║║║╔╝║╔╣║╩╣║═╣║║║
           ╚╩╩╝╚╝─╚═╝╚═╝╚═╝╚╩╝
           ───────────────────
        
        ┌─────❲ *ᴏᴡɴᴇʀ* ❳
        ┊☞ ᴏᴡɴᴇʀ : ᴍʜᴅ.ᴛᴀ ™
        ┊☞ wa.me/919288405103
        ┊☞ʙᴏᴛ ɴᴀᴍᴇ : ᴍʀ-ᴛᴇᴄʜ_ʙᴏᴛ®
        ┊☞︎︎︎sᴛᴀᴛᴜs:ᴡᴏʀᴋɪɴɢ ᴀs ᴘᴜʙʟɪᴄ
        ┊☞ ᴠᴇʀꜱɪᴏɴ : ᴠ2
        └──────────────----------𖤍
        
        
            ║▌│█║▌│ █║▌│█│║
              ©919288405103™"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }

    

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'owner', fromMe: false, deleteCommand: true, desc: OWNER,}, (async (message, match) => {

    var r_text = new Array ();

    

    r_text[1] = "ʜɪ......
    
    ┌─────❲ *MRTECH-BOT𖤍❳* 
    ┊
    └─────────────────✪---------𖤍
       ───────╔╗───────╔╗─
       ╔══╗╔╦╗║╚╗╔═╗╔═╗║╚╗
       ║║║║║╔╝║╔╣║╩╣║═╣║║║
       ╚╩╩╝╚╝─╚═╝╚═╝╚═╝╚╩╝
       ───────────────────
    
    ┌─────❲ *ᴏᴡɴᴇʀ* ❳
    ┊☞ ᴏᴡɴᴇʀ : ᴍʜᴅ.ᴛᴀ ™
    ┊☞ wa.me/919288405103
    ┊☞ʙᴏᴛ ɴᴀᴍᴇ : ᴍʀ-ᴛᴇᴄʜ_ʙᴏᴛ®
    ┊☞︎︎︎sᴛᴀᴛᴜs:ᴡᴏʀᴋɪɴɢ ᴀs ᴘᴜʙʟɪᴄ
    ┊☞ ᴠᴇʀꜱɪᴏɴ : ᴠ2
    └──────────────----------𖤍
    
    
        ║▌│█║▌│ █║▌│█│║
          ©919288405103™"

    

    await message.client.sendMessage(

        message.jid,(r_text[1]), MessageType.text);

    }));

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GIT,}, (async (message, match) => {

        var r_text = new Array ();

    

        r_text[1] = "ʜɪ......
            
            ┌─────❲ *MRTECH-BOT𖤍❳* 
            ┊
            └─────────────────✪---------𖤍
               ───────╔╗───────╔╗─
               ╔══╗╔╦╗║╚╗╔═╗╔═╗║╚╗
               ║║║║║╔╝║╔╣║╩╣║═╣║║║
               ╚╩╩╝╚╝─╚═╝╚═╝╚═╝╚╩╝
               ───────────────────
            
            ┌─────❲ *ᴏᴡɴᴇʀ* ❳
            ┊☞ ᴏᴡɴᴇʀ : ᴍʜᴅ.ᴛᴀ ™
            ┊☞ wa.me/919288405103
            ┊☞ʙᴏᴛ ɴᴀᴍᴇ : ᴍʀ-ᴛᴇᴄʜ_ʙᴏᴛ®
            ┊☞︎︎︎sᴛᴀᴛᴜs:ᴡᴏʀᴋɪɴɢ ᴀs ᴘᴜʙʟɪᴄ
            ┊☞ ᴠᴇʀꜱɪᴏɴ : ᴠ2
            └──────────────----------𖤍
            
            
                ║▌│█║▌│ █║▌│█│║
                  ©919288405103™"

    

        await message.client.sendMessage(

            message.jid,(r_text[1]), MessageType.text);

    

        }));    

    }
