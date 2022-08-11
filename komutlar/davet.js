const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;
//

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle(`${client.user.username}`)
  .setDescription('')
  .setColor("WebPanel")
    .setDescription('')
      .setDescription(' \n\n**__Botu Davet Etmek için__** [Tıkla](https://discordapp.com/oauth2/authorize?client_id=726784124999696485&scope=bot&permissions=2146958847)')
      .setFooter(`© ${client.user.username}` )

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gold','Gold'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'webpanel i gosterir.',
  usage: 'webpanel '
};
