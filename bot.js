const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Sa') {
    msg.reply('Aleyküm selam kardom hoşgeldin <3');
  }
});

client.login('Nzk4MTgyODg2ODM0MDQ0OTI4.X_xTvQ.wdtsSSgf_W9SPOKMX9ltp-WBvLM');