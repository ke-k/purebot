const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NTkzODY4MzMzNTAyMzAwMTgw.XRUUjQ.QSH1Z396galq8CePR5Yf2RYUGFg'

const prefix = '/';
bot.on('ready', () =>{
    console.log('uh uptime lmAo');
})

bot.on('message', message=> {

    let args = message.content.substring(prefix.length).split(" ");
    switch(args[0]){
        case 'avatar':
        message.channel.send(message.author.avatarURL);
        break;
        case 'bruh':
        message.reply('bruh https://sn0wii.moe/bruh.mp4');
        break;
        case 'help':
            const help = new Discord.RichEmbed()
            .addField('Help', 'https://sn0wii.moe/help')
             message.channel.sendEmbed(help);
        break;
        case 'purge':
        if(!args[1]) return message.reply('s-senpai, please put the number of messages you want to purge!!')
        message.channel.bulkDelete(args[1]);
        break;
        case 'setstatus':
        bot.user.setPresence({game: {name: 'sea salt is a qt owo | /help | 1 server', status: 'dnd'}});
        break;
        case 'verify':
                const guildMember = message.member;
       guildMember.addRole('568769481711812620').catch(err => {
            console.log(err);
            return message.channel.send("Couldn't give you the role, you maybe already have it.");
        });
        break;
    }
});
bot.login(token);
