const Discord = require('discord.js'); //Definimos discord
const client = new Discord.Client();
const { Client, MessageEmbed, Collection, Guild } = require('discord.js');

module.exports = {
  name: "send", //Aquí ponemos el nombre del comando
  alias: ["msg"], //Aquí un alias, esto será como un segundo nombre del comando, si no quieren ponerle alias tenéis que quitarle las " " y dejarlo así: alias: [],

execute (client, message, args){

  var perms = message.member.hasPermission("ADMINISTRATOR")
  if(!perms) return message.channel.send("Debes tener permisos de administrador para usar este comando!")

  let canal = message.mentions.channels.first()
  if(!canal) return message.channel.send("Menciona un canal!")

  let texto = args.slice(1).join(" ")
  if(!texto) return message.channel.send("Escribe el texto que deseas enviar")

  canal.send(texto)
 }

} 