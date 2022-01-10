const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTMwMTkzMjQ4MzE0NTg5MjM1.YdyT-A.PCuxSciJpSTWwWiEo3IpcLqpRdw"

const client = new Discord.Client({
	intents: [
		"GUILDS",
		"GUILD_MESSAGES"
	]
})

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
	if (message.content.substring(0, 1) == "!") {
		var args = message.content.substring(1).split(' ')
		
		var cmd = args[0]
		
		args = args.splice(1)
		
		switch(cmd) {
			case('ping'):
				message.reply("pong")
				break;
			default:
				message.reply("idk what that means")
		}
	}
})

client.login(process.env.TOKEN)