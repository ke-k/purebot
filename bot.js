const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '/bypasses') {
    	message.reply('www.e621-is-great.rf.gd 
                      pastebin.com/raw/6wMrMwbk
                      discord.gg/m34DctH');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
