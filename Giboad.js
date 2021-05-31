const Discord = require('discord.js'); //Definimos discord
const client = new Discord.Client();
const { Client, MessageEmbed, Collection, Guild } = require('discord.js'); //Definimos guild, MessageEmbed y otras cosas importantes
require('dotenv').config();
const config = require("./config.json")

const token = config.token;

const fs = require('fs'); //Definimos fs
let { readdirSync } = require('fs'); //Definimos readdirSync que también lo necesitamos


//////////////////////////////
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./comandos/${file}`);
    client.commands.set(command.name, command);
}

//////////////////////////////
client.on("ready", () => {
    console.log("Estoy listo!");
 });
 /////////////////////////////

client.on('message', (message) => { //Abrimos un evento message, esto es muy importante porque es donde estarán los comandos

let prefix = 'g!' //Definimos un prefix para usar

if(message.author.bot) return; //Con esto hacemos que el bot no responda a mensajes de otros bots lo cual evitará que entre en bucles
if(!message.content.startsWith(prefix)) return; //Aquí hacemos que si el mensaje no empieza con el prefix el bot no responda

let usuario = message.mentions.members.first() || message.member; //Definimos el usuario
const args = message.content.slice(prefix.length).trim().split(/ +/g); //Definimos los argumentos
const command = args.shift().toLowerCase(); //Definimos el comando

//Aquí irían los comandos que pondremos más adelante

/////////////////////////////
let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
if(cmd){
cmd.execute(client, message, args)

}
/////////////////////////////
}); //Cerramos el evento

client.login(config.token);