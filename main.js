const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

const prefix = "%";

client.on("message", function(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`:ping_pong: Pong! Le ping est de ${timeTaken}ms.`);
  }

  if (command === "say") {
    let MessageToBot = args.join(" ");
    message.delete().catch();
    message.channel.send(MessageToBot);
  };
});

client.login(process.env.config.BOT_TOKEN);