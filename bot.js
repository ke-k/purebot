const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '/bypasses') {
    	message.reply('http://www.e621-is-great.rf.gd 
                      https://pastebin.com/raw/6wMrMwbk
                      https://discordapp.com/invite/m34DctH');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
