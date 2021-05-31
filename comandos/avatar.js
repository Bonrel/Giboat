const Discord = require('discord.js');

module.exports = {
  name: "avatar", //Aquí ponemos el nombre del comando
  alias: ["uicon"], //Aquí un alias, esto será como un segundo nombre del comando, si no quieren ponerle alias tenéis que quitarle las " " y dejarlo así: alias: [],

execute (client, message, args){

    let usuario = message.mentions.members.first() || message.member;

    let embedavatar = new Discord.MessageEmbed()

    .setTitle(`Avatar de **${usuario.user.username}**`)
    .setImage(usuario.user.displayAvatarURL({ size: 1024, dynamic: true}))
    .setFooter(`Pedido por ${message.member.displayName}`)

    message.channel.send(embedavatar)

 }

} 