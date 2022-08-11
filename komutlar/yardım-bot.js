const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.RichEmbed()
    .setColor('GOLD')
    .setAuthor(`Astrayos Creative | Bot Komutları`, client.user.avatarURL) 
      .setDescription('**[Website](https://lndbot.glitch.me/)**')
.setThumbnail(client.user.avatarURL)
      .addField('**Komutlar:**', '`bizkimiz`, `desteksunucu`, `sikayet`, `ping`')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'bot',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};