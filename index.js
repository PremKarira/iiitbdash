const Discord = require("discord.js")
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

    if (message.mentions.has(client.user)) {
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
    // client.channels.cache.get('843571449641304084').send(msg)
  }
});

// client.on('message', message => {
//   if (message.content.startsWith('link ') && (message.author.id ==='428902961847205899')) {
//     let msg = message.content.replace('link', '')
//     let emb = new Discord.MessageEmbed();
//     emb.setTitle("Award ceremony")
//     emb.setURL(msg)
//     emb.setDescription("I am watching you")
//     emb.setColor('RANDOM')
//     client.channels.cache.get('843571449641304084').send(emb)

//     let em = new Discord.MessageEmbed();
//     em.setTitle("I am Back")
//     em.setDescription("[Dont troll](https://play.chess.com/qbfH6)")
//     em.setDescription("Use confess <confession> in my dms to make a anonymous confession! \n OR \n Use img <URL> in my dms to post an image anonymously!")
//     client.channels.cache.get('843571449641304084').send(em)
//     client.channels.cache.get('843571449641304084').send('')
//   }
// });


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
    
client.login(process.env.TOKEN)
