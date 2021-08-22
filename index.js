const Discord = require("discord.js")
// const config = require('./config.json')
const client = new Discord.Client()
require('discord-buttons')(client);
const disbut = require("discord-buttons");

let embPingURL = new Discord.MessageEmbed();
let emPingOptions = new Discord.MessageEmbed();
let bn =0;
let user=0;
let isPingOptionsSent=0;

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
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. 
API Latency is ${Math.round(client.ws.ping)}ms`, {component: button})
        .catch(err => console.error(err))
  };

  if (message.content.startsWith('confess ') && (message.channel.type === "dm")) {
    let newmsg = message.content.replace('confess', '')
    message.channel.send('anonymous confession has been submitted. Destination <#843571449641304084>')
    let embConfession = new Discord.MessageEmbed();
    embConfession.setTitle("Confession")
    embConfession.setDescription(newmsg)
    embConfession.setColor('RANDOM')
    embConfession.setFooter("Use confess <confession> in my dms to make a anonymous confession!")
    client.channels.cache.get('843571449641304084').send(embConfession)
  }

  if (message.content.startsWith('img ') && (message.channel.type === "dm")) {
    let msg = message.content.replace('img', '')
    if (!msg.includes("media")){
      message.channel.send(`please provide a link which contains word -> { media }
You can get it after opening img in discord and then sharing or copy link
If you are unable to find it, please ask for help in <#831088548902862868>`)
    }
    message.channel.send('anonymous confession has been submitted. Destination <#843571449641304084>')
    let embImage = new Discord.MessageEmbed();
    embImage.setTitle("Confession")
    embImage.setImage(msg)
    embImage.setColor('RANDOM')
    embImage.setFooter("Use img <URL> in my dms to post an image anonymously!")
    client.channels.cache.get('843571449641304084').send(embImage)
  }

  if (message.content === '-tt') {
    const UserPFP = message.member.user.avatarURL();
    message.channel.send('Wait for my reply')
      .then(msg => {
        msg.delete({ timeout: 15000 });
      })
      .catch(err => console.error(err))
    let embECE_TT = new Discord.MessageEmbed();
    let embCSE_TT = new Discord.MessageEmbed();
    let embIT_TT = new Discord.MessageEmbed();

    embECE_TT.setTitle("ECE Time-Table")
    embECE_TT.setColor('RANDOM')
    embECE_TT.setFooter(`Info requested by ${message.author.tag}`, UserPFP)
    embECE_TT.setTimestamp()
    embECE_TT.setImage('https://images-ext-1.discordapp.net/external/07lpSzm4rSwjBupYrLo7xPPgfvOnLoPuFRePz6uzZQI/https/media.discordapp.net/attachments/816314803387367466/871396995191930891/Frame_10ECE_1.png?width=1259&height=669')
    
    embCSE_TT.setTitle("CSE Time-Table")
    embCSE_TT.setColor('RANDOM')
    embCSE_TT.setFooter(`Info requested by ${message.author.tag}`, UserPFP)
    embCSE_TT.setTimestamp()
    embCSE_TT.setImage('https://images-ext-1.discordapp.net/external/1I7lpfmOrmrnfaMYlgDOzXVi0N2Sc1q8bt0wWzJwOBw/https/media.discordapp.net/attachments/816314803387367466/871396996488003604/Frame_10CSE_1.png?width=1259&height=669')
    
    embIT_TT.setTitle("IT Time-Table")
    embIT_TT.setColor('RANDOM')
    embIT_TT.setFooter(`Info requested by ${message.author.tag}`, UserPFP)
    embIT_TT.setTimestamp()
    embIT_TT.setImage('https://images-ext-2.discordapp.net/external/gJyCVUXLVrk9ZtSK6RvnHjoJ40l-e7pQ3wOQc-zag6Y/https/media.discordapp.net/attachments/816314803387367466/872181270380167218/Frame_59IT.png?width=1426&height=670')
    
    message.channel.send(embECE_TT).catch(err => console.error(err))
    message.channel.send(embCSE_TT).catch(err => console.error(err))
    message.channel.send(embIT_TT).catch(err => console.error(err))
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
      // const ind1 = message.content.lastIndexOf('https://teams.microsoft.com/l/meetup-join/')
      // const ind2 = message.content.lastIndexOf('Tap on the link')
      // let url = message.content.slice(ind1).split(" ")
      // if (message.content.startsWith('https://teams.microsoft.com/l/meetup-join/')) {
      //   url = message.content.split(" ")
      // }
      // url = url[0]
      // url = url.toLowerCase()
      // const ind2=url.length
      // if (url.charAt(ind2-1)==='p' && url.charAt(ind2-2)==='a' && url.charAt(ind2-3)==='T'){
      //   url=url.substr(0,ind2-5)
      // }

      var myString = message.content;
      var regExp = myString.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9,@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9,@:%_\+.~#?&//=]*)/g);
      let url1=regExp[0];

      message.delete({ timeout: 2000 })
        .then(msg => console.log(`Deleted message from ${msg.author.username} after 2 seconds in ${msg.channel.id}`))
        .catch(console.error);
      
      const UserPFP = message.member.user.avatarURL();

      user=message.author.id;
      
      embPingURL.setTitle("Click here to join the meeting")
      embPingURL.setURL(url1)
      embPingURL.setColor('RANDOM')
      embPingURL.setFooter(`Requested by ${message.author.tag}`, UserPFP)
      embPingURL.setTimestamp()

      emPingOptions.setTitle("Which branch you want to ping?")
      emPingOptions.setDescription("1. ECE \n 2. CSE \n 3. IT \n 4. CSE & IT \n 5. ALL \n type `CANCEL` to cancel the request.")
      emPingOptions.setColor('RANDOM')
      emPingOptions.setFooter("Type 1-5 in next 15 seconds.")
      emPingOptions.setTimestamp()

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

      // buttonX removed bcoz discord limit of 5 buttons per row
      // moreover it wont look good if we add it in another row.  
      // let buttonX = new disbut.MessageButton()
      //   .setLabel("Wanna cancel the request?")
      //   .setID("btnX")
      //   .setStyle("blurple");
      
      message.channel.send("", {embed: emPingOptions, buttons: [button1, button2, button3, button4, button5]})
        .then(msg => {
          isPingOptionsSent=1;
          msg.delete({ timeout: 15000 })
            .catch(err => {
              console.error(`button ${bn} pressed, msg already deleted`)
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
              // console.error(err)
              console.log("not cancelled")
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
    button.message.channel.send(`hello <@!${button.clicker.id}>`,)
    //allowed_mentions = discord.AllowedMentions(replied_user=False)
      .then(msg => {
        msg.delete({ timeout: 10000 });
      })
      .catch(err => console.error(err))
  }
  if(button.clicker.id === user && isPingOptionsSent){
    if(button.id === "btn1"){bn=1;isPingOptionsSent=0;
      await button.message.delete();
      await button.reply.defer()
      await button.message.channel.send('<@&824984224330416191>',{embed: embPingURL, })
        .catch(err => console.error(err))
      console.log(`${bn} ping initiated by ${button.clicker.id}`)
    }
    else if(button.id === "btn2"){bn=2;isPingOptionsSent=0;
      await button.message.delete();
      await button.reply.defer()
      await button.message.channel.send('<@&824974978784690198>',{embed: embPingURL, })
        .catch(err => console.error(err))
      console.log(`${bn} ping initiated by ${button.clicker.id}`)
    }
    else if(button.id === "btn3"){bn=3;isPingOptionsSent=0;
      await button.message.delete();
      await button.reply.defer()
      await button.message.channel.send('<@&824984226885402674>',{embed: embPingURL, })
        .catch(err => console.error(err))
      console.log(`${bn} ping initiated by ${button.clicker.id}`)
    }
    else if(button.id === "btn4"){bn=4;isPingOptionsSent=0;
      await button.message.delete();
      await button.reply.defer()
      await button.message.channel.send('<@&824974978784690198> & <@&824984226885402674>',{embed: embPingURL, })
        .catch(err => console.error(err))
      console.log(`${bn} ping initiated by ${button.clicker.id}`)
    }
    else if(button.id === "btn5"){bn=5;isPingOptionsSent=0;
      await button.message.delete();
      await button.reply.defer()
      await button.message.channel.send('<@&824984224330416191> & <@&824974978784690198> & <@&824984226885402674>',{embed: embPingURL, })
        .catch(err => console.error(err))
      console.log(`${bn} ping initiated by ${button.clicker.id}`)
    }
  }
  else if (isPingOptionsSent && (button.id === "btn1" || button.id === "btn2" || button.id === "btn3" || button.id === "btn4" || button.id === "btn5")){
    await button.message.channel.send(`Waiting for <@!${user}> to respond.`)
      .then(msg => {
        msg.delete({ timeout: 10000 });
      })
      .catch(err => console.error(err))
  }
})

// client.login(config.token)
client.login(process.env.TOKEN)
