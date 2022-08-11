const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {


  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();

  if (message.mentions.users.size < 1) return message.reply('Kimi banlayacağını yazmalısın.').catch(console.error);
  
  if (!message.guild.member(user).bannable) return message.reply('Yetkilileri banlayamam.');
  message.guild.ban(user, 2);

if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Bu komudu kullanabilmek için `Üyeleri Yasakla` yetkisine sahip olmanız gerek.");
 
    

  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Ban')
    .addField('Kullanıcı:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('Yetkili:', `${message.author.username}#${message.author.discriminator}`);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'ban',
  description: 'İstediğiniz kişiyi banlar.',
  usage: 'ban [kullanıcı]'
};
