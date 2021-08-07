const Discord = require("discord.js")
// const config = require('./config.json')
const client = new Discord.Client()
require('discord-buttons')(client);
const disbut = require("discord-buttons");

let emb = new Discord.MessageEmbed();
let em = new Discord.MessageEmbed();
let bn =0;
let user=0;
let pingEmbed=0;

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
});

client.on("message", message => {
  if (message.author.bot) return false;
  if (message.content === '<@843537329591418932>' || message.content === '<@!843537329591418932>') {
    let button = new disbut.MessageButton()
      .setLabel("Hello there!")
      .setID("btn")
      .setStyle("blurple");
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`, {component: button})
        .catch(err => console.error(err))
  };

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

  if (message.content === '-tt') {
    const UserPFP = message.member.user.avatarURL();
    message.channel.send('Wait for my reply')
      .then(msg => {
        msg.delete({ timeout: 15000 });
      })
      .catch(err => console.error(err))
    let emb1 = new Discord.MessageEmbed();
    let emb2 = new Discord.MessageEmbed();
    let emb3 = new Discord.MessageEmbed();

    emb1.setTitle("ECE Time-Table")
    emb1.setColor('RANDOM')
    emb1.setFooter(`Info requested by ${message.author.tag}`, UserPFP)
    emb1.setTimestamp()
    emb1.setImage('https://images-ext-1.discordapp.net/external/07lpSzm4rSwjBupYrLo7xPPgfvOnLoPuFRePz6uzZQI/https/media.discordapp.net/attachments/816314803387367466/871396995191930891/Frame_10ECE_1.png?width=1259&height=669')
    
    emb2.setTitle("CSE Time-Table")
    emb2.setColor('RANDOM')
    emb2.setFooter(`Info requested by ${message.author.tag}`, UserPFP)
    emb2.setTimestamp()
    emb2.setImage('https://images-ext-1.discordapp.net/external/1I7lpfmOrmrnfaMYlgDOzXVi0N2Sc1q8bt0wWzJwOBw/https/media.discordapp.net/attachments/816314803387367466/871396996488003604/Frame_10CSE_1.png?width=1259&height=669')
    
    emb3.setTitle("IT Time-Table")
    emb3.setColor('RANDOM')
    emb3.setFooter(`Info requested by ${message.author.tag}`, UserPFP)
    emb3.setTimestamp()
    emb3.setImage('https://images-ext-2.discordapp.net/external/gJyCVUXLVrk9ZtSK6RvnHjoJ40l-e7pQ3wOQc-zag6Y/https/media.discordapp.net/attachments/816314803387367466/872181270380167218/Frame_59IT.png?width=1426&height=670')
    
    message.channel.send(emb1)
    message.channel.send(emb2)
    message.channel.send(emb3)
  }

  if (message.content.includes('https://teams.microsoft.com/l/meetup-join/') ) {
    if (!message.channel.name.includes("class-links")) {
      message.channel.send('do this command only at <#868036126890426368>')
        .then(msg => {
          msg.delete({ timeout: 5000 });
        })
        .catch(err => console.error(err))
    }
    else {
      const ind1 = message.content.lastIndexOf('https://teams.microsoft.com/l/meetup-join/')
      // const ind2 = message.content.lastIndexOf('Tap on the link')
      let url = message.content.slice(ind1).split(" ")
      if (message.content.startsWith('https://teams.microsoft.com/l/meetup-join/')) {
        url = message.content.split(" ")
      }
      url = url[0]
//       url = url.toLowerCase()
      const ind2=url.length
      if (url.charAt(ind2-1)==='p' && url.charAt(ind2-2)==='a' && url.charAt(ind2-3)==='T'){
        url=url.substr(0,ind2-5)
      }
      message.delete({ timeout: 2000 })
        .then(msg => console.log(`Deleted message from ${msg.author.username} after 2 seconds`))
        .catch(console.error);
      const UserPFP = message.member.user.avatarURL();
      user=message.author.id;
      emb.setTitle("Click here to join the meeting")
      emb.setURL(url)
      emb.setColor('RANDOM')
      emb.setFooter(`Requested by ${message.author.tag}`, UserPFP)
      emb.setTimestamp()
      // console.log(message.content)
      em.setTitle("Which branch you want to ping?")
      em.setDescription("1. ECE \n 2. CSE \n 3. IT \n 4. CSE & IT \n 5. ALL \n type `CANCEL` to cancel the request.")
      em.setColor('RANDOM')
      em.setFooter("Type 1-5 in next 15 seconds.")

      let button1 = new disbut.MessageButton()
        .setLabel("1")
        .setID("btn1")
        .setStyle("blurple");
      let button2 = new disbut.MessageButton()
        .setLabel("2")
        .setID("btn2")
        .setStyle("blurple");
      let button3 = new disbut.MessageButton()
        .setLabel("3")
        .setID("btn3")
        .setStyle("blurple");
      let button4 = new disbut.MessageButton()
        .setLabel("4")
        .setID("btn4")
        .setStyle("blurple");
      let button5 = new disbut.MessageButton()
        .setLabel("5")
        .setID("btn5")
        .setStyle("blurple");
      let buttonX = new disbut.MessageButton()
        .setLabel("Wanna cancel the request?")
        .setID("btnX")
        .setStyle("blurple");
      
      message.channel.send("", {embed: em, buttons: [button1, button2, button3, button4, button5]})
        .then(msg => {
          pingEmbed=1;
          msg.delete({ timeout: 15000 })
            .catch(err => {
              console.error("button "+bn+" pressed, msg already deleted")
              bn=0;
            })
          // message.reply('No answer after 15 seconds, operation canceled.')
          message.channel.awaitMessages(m => m.author.id == message.author.id,
            {max: 1, time: 15000})
            .then(collected => {
              if (collected.first().content.toLowerCase() == 'cancel') {
                message.channel.send('successfully cancelled the request')
                  .catch(err => console.error(err))
                msg.delete()
                collected.first().delete()
                  .catch(err => console.error(err))
              }
              else{
                console.log('not cancelled')
              }
              
            })
            .catch(err => {
              console.error(err)
            });
        })
        .catch(err => {
          // msg.delete()
          console.error(err)
        })
    }  
  }
});

client.on('clickButton', async (button) => {
  if(button.id === "btn"){
    await button.reply.defer()
    button.message.channel.send("hello <@!"+button.clicker.id+">")
      .catch(err => console.error(err))
  }
  if(button.clicker.id === user && pingEmbed){
    if(button.id === "btn1"){bn=1;pingEmbed=0;
      await button.message.delete();
      await button.reply.defer()
      await button.message.channel.send('<@&824984224330416191>',{embed: emb, })
        .catch(err => console.error(err))
      console.log(bn + ' ping initiated by ' + button.clicker.id)
    }
    else if(button.id === "btn2"){bn=2;pingEmbed=0;
      await button.message.delete();
      await button.reply.defer()
      await button.message.channel.send('<@&824974978784690198>',{embed: emb, })
        .catch(err => console.error(err))
      console.log(bn + ' ping initiated by ' + button.clicker.id)
    }
    else if(button.id === "btn3"){bn=3;pingEmbed=0;
      await button.message.delete();
      await button.reply.defer()
      await button.message.channel.send('<@&824984226885402674>',{embed: emb, })
        .catch(err => console.error(err))
      console.log(bn + ' ping initiated by ' + button.clicker.id)
    }
    else if(button.id === "btn4"){bn=4;pingEmbed=0;
      await button.message.delete();
      await button.reply.defer()
      await button.message.channel.send('<@&824974978784690198> & <@&824984226885402674>',{embed: emb, })
        .catch(err => console.error(err))
      console.log(bn + ' ping initiated by ' + button.clicker.id)
    }
    else if(button.id === "btn5"){bn=5;pingEmbed=0;
      await button.message.delete();
      await button.reply.defer()
      await button.message.channel.send('<@&824984224330416191> & <@&824974978784690198> & <@&824984226885402674>',{embed: emb, })
        .catch(err => console.error(err))
      console.log(bn + ' ping initiated by ' + button.clicker.id)
    }
    else if(button.id === "X"){bn=X;pingEmbed=0;
      await button.message.delete();
      await button.reply.defer()
      await button.message.channel.send("<@!"+button.clicker.id+'> cancelled the operation')
        .catch(err => console.error(err))
      console.log(bn + ' ping initiated by ' + button.clicker.id)
    }
  }
  else if (pingEmbed && (button.id === "btn1" || button.id === "btn2" || button.id === "btn3" || button.id === "btn4" || button.id === "btn5")){
    await button.message.channel.send("Waiting for <@!"+user+"> to respond.")
  }
  
})

// client.login(config.token)
client.login(process.env.TOKEN)
