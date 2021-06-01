const Discord = require('discord.js'); //Definimos discord
const client = new Discord.Client();
const { Client, MessageEmbed, Collection, Guild } = require('discord.js');

module.exports = {
  name: "say", //Aquí ponemos el nombre del comando
  alias: [], //Aquí un alias, esto será como un segundo nombre del comando, si no quieren ponerle alias tenéis que quitarle las " " y dejarlo así: alias: [],

execute (client, message, args){
    
    let texto = args.join(' ')
    if(!texto) return message.channel.send("Escribe el texto que deseas enviar!")
   
    message.channel.startTyping();
    message.delete();

    setTimeout(() => {
        message.channel.send(texto)
        message.channel.stopTyping()
    }, 2500);
   
    } 
  
 

} 