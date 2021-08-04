const Discord = require("discord.js")
// const config = require('./config.json')
const client = new Discord.Client()
// const randomBetween = (min, max) => Math.floor(Math.random()*(max-min+1)+min);
// const color = [
//   randomBetween(0, 255),
//   randomBetween(0, 255),
//   randomBetween(0, 255),
// ];
// console.log(color);
// rgb(${color[0]}, ${color[1]}, ${color[2]})

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

client.on("message", message => {
    if (message.author.bot) return false;
    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
    if (message.mentions.has(client.user) || message.content === '<@843537329591418932>') {
        message.channel.send("Hello there!");
        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    };
});

client.on('message', message => {
  if (message.content.startsWith('confess ') && (message.channel.type === "dm")) {
    let newmsg = message.content.replace('confess', '')
    message.channel.send('anonymous confession has been submitted. Destination <#843571449641304084>')
    let em = new Discord.MessageEmbed();
    em.setTitle("Confession")
    em.setDescription(newmsg)
    em.setColor('RANDOM')
    em.setFooter("Use confess <confession> in my dms to make a anonymous confession!")
    client.channels.cache.get('843571449641304084').send(em)
  }
});

client.on('message', message => {
  if (message.content.startsWith('img ') && (message.channel.type === "dm")) {
    let msg = message.content.replace('img', '')
    message.channel.send('anonymous confession has been submitted. Destination <#843571449641304084>')
    let emb = new Discord.MessageEmbed();
    emb.setTitle("Confession")
    emb.setColor('RANDOM')
    emb.setFooter("Use img <URL> in my dms to post an image anonymously!")
    emb.setImage(msg)
    client.channels.cache.get('843571449641304084').send(emb)
  }
});

// client.on('message', message => {
//   if (message.content.startsWith('crazytest')) {
//     // message.delete()
//     const Guild = client.guilds.cache.get("783758394166345779"); // Getting the guild.
//     // const Members = Guild.members.cache.map(member => member.id);
//     // var userList = message.guild.members.cache.array();
//     var randomNumber = Math.round(Math.random() * message.guild.memberCount)
//     const list = Guild.members.cache.keys();
//     // list.forEach(id => console.log(id));
//     const arr = [...list];
//     // var pingPerson = userList[randomNumber] 
//     message.channel.send(arr[0])
//     message.channel.send(arr[1])
//     message.channel.send(arr[2])
//     message.channel.send(arr[3])
//     message.channel.send(arr[4])
//   }
// });

client.on('message', message => {
  if (message.content.startsWith('::ping ') ) {
    message.delete(1000);
    if (!message.channel.name.includes("class-links")) message.channel.send('do this command only at <#868036126890426368>');
    else {
      let link = message.content.replace('::ping ', '')
      let emb = new Discord.MessageEmbed();
      emb.setTitle("Click here to join the meeting")
      // em.setDescription("1.ECE \n 2.CSE \n 3.IT \n 4. CSE & IT \n 5. ALL")
      emb.setURL(link)
      emb.setColor('RANDOM')
      emb.setFooter("attendance ke liye hi join krlo...")
      // message.channel.send('anonymous confession has been submitted. Destination <#843571449641304084>')
      let em = new Discord.MessageEmbed();
      em.setTitle("Which branch you want to ping?")
      em.setDescription("1.ECE \n 2.CSE \n 3.IT \n 4. CSE & IT \n 5. ALL")
      em.setColor('RANDOM')
      em.setFooter("Type 1-5 in next 15 seconds.")
      message.channel.send(em)
        .then(msg => {
                msg.delete({ timeout: 15000 /*time unitl delete in milliseconds*/});
            })
        .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
      message.channel.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: 15000}).then(collected => {
                if (collected.first().content.toLowerCase() == '1') {
                  message.channel.send('<@&824984224330416191>'); message.channel.send(emb)
                  collected.first().delete();// client.destroy();
                }
                else if (collected.first().content.toLowerCase() == '2') {
                  message.channel.send('<@&824974978784690198>'); message.channel.send(emb)
                  collected.first().delete();// client.destroy();
                }
                else if (collected.first().content.toLowerCase() == '3') {
                  message.channel.send('<@&824984226885402674>'); message.channel.send(emb)
                  collected.first().delete();// client.destroy();
                }
                else if (collected.first().content.toLowerCase() == '4') {
                  message.channel.send('<@&824974978784690198> & <@&824984226885402674>'); message.channel.send(emb)
                  collected.first().delete();// client.destroy();
                }
                else if (collected.first().content.toLowerCase() == '5') {
                  message.channel.send('<@&824984224330416191> & <@&824974978784690198> & <@&824984226885402674>'); message.channel.send(emb)
                  collected.first().delete();// client.destroy();
                }
                else
                  message.reply('Operation canceled.');
                collected.first().delete();
        }).catch(() => {
                message.reply('No answer after 30 seconds, operation canceled.');
        });
    }
  }
});

client.login(process.env.TOKEN)
