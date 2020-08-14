const Discord = require("discord.js"); const config = require("./config.json"); 
const client= new Discord.Client(); const prefix = "!";
client.on("message", function(message) { if(message.author.bot) return; 
if (!message.content.startsWith(prefix)) return;
const commandBody = message.content.slice(prefix.length); 
const args = commandBody.split(''); const command = args.shift().toLowerCase(); 
if (command === "Hello") {
message.reply(`How can I help you today?`); } 
else if (command === "account balance ") {
message.reply(`Sure, you have R2 000 in your
savings account`); } 
message.reply(`Can I help you with anything
else?`); } 
else if (command === "No thanks") {
message.reply(`Great, come back soon!`); } 
