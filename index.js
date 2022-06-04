const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTgyNTU4MTE5NjEzODQ1NTc1.Gatdam.p8Bf5H5jgEi0-xLjSKVtYqQhMt3Nbpav9v1ph8"

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
    if (message.content == "hi"){
        message.reply("Hello")
    }
    if (message.content == "bye"){
        message.reply("bye user!")
    }
    if (message.content == "ela"){
        message.reply("ti thes?")
    }
})        

client.login(process.env.TOKEN)