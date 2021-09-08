const Discord = require("discord.js")
const config = require('./config.json')
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
  client.user.setPresence({
    activity: {
      name: `Playing for IIITB`,
    },
  })
});

client.on("message", async message => {
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

  if (message.content === `datetime`) {
    var timeTargetTemp=message.createdTimestamp
    var timeTarget = timeTargetTemp.toString().slice(0, -3);
    message.channel.send(`Your current time is <t:${timeTarget}:F>`)
      .catch(err => console.error(err))
  };

  if (message.content.startsWith("--cloneherefrom") && (message.author.id === `428902961847205899` || message.author.id === `539306274936848397`)) {
    const { channel,content } = message
    let text = content.slice(16);
      const sourcee=text;
      if(client.channels.cache.get(sourcee)){
        const arr=[];
        var i=0;
        var temp=11;
        var fetched = await client.channels.cache.get(sourcee).messages.fetch({limit: 100});
        fetched.forEach(element => {
            arr[i]=element;i++;
          });
          
        temp=fetched.last().id;
        while(1){
          fetched = await client.channels.cache.get(sourcee).messages.fetch({
            limit: 100, // Amount of messages to be fetched in the channel
            before: temp,
          });
          fetched.forEach(element => {
            arr[i]=element;i++;
          });
          if(fetched.last()){
            temp=fetched.last().id;
          }
          else{
            console.log(temp)
            break;
          }
        }

        const webhooks1 = await channel.fetchWebhooks();
        const found1 = webhooks1.find(element => element.name.toLocaleLowerCase('en-US') === `dash`);
        for (var i = arr.length- 1; i >= 0; i--)
        {
          var abc=0;
          if (arr[i].attachments.size > 0){
            abc++;
            arr[i].attachments.forEach(Attachment => {
              found1.send({
                content: Attachment.url,
                username: arr[i].author.username,
                avatarURL: arr[i].author.displayAvatarURL({ format: 'png' }),
              })
            })
          }

          if(arr[i].content) {
            abc++;
            found1.send({
              content: arr[i].content,
              username: arr[i].author.username,
              avatarURL: arr[i].author.displayAvatarURL({ format: 'png' }),
            })
          }
          if (arr[i].embeds){
            abc++;
            arr[i].embeds.forEach(emb => {
              if(emb.type === `rich`){
                found1.send({
                  username: arr[i].author.username,
                  avatarURL: arr[i].author.displayAvatarURL({ format: 'png' }),
                  embeds: [emb],
                })
              }
            })
          }

          if(!abc){
            found1.send({
              content: `https://discord.com/channels/${arr[i].channel.guild.id}/${arr[i].channel.id}/${arr[i].id}`,
              username: arr[i].author.username,
              avatarURL: arr[i].author.displayAvatarURL({ format: 'png' }),
            })
            // channel.send(`https://discord.com/channels/${arr[i].channel.guild.id}/${arr[i].channel.id}/${arr[i].id}`);
          }
        }
        found1.send({
          content: `CLoned ${arr.length} messages successfully ~~hope so~~`,
        })
        message.author.send(`CLoning ${arr.length} messages in <#${message.channel.id}>`)
        client.users.fetch('428902961847205899', false).then((user) => {
          user.send(`Cloning ${arr.length} messages in <#${message.channel.id}>.
  Action initiated by ${message.author.tag}`);
        });
      }
      else{
        channel.send('Please provide a valid channel ID');
      }
  };

  if (message.content.startsWith('setstatus ')){
    const content = message.content.replace('setstatus ', '')
    client.user.setPresence({
      activity: {
        name: content,
        type: 0,
      },
    })
      .then(
        message.channel.send(`Successfully changed status`)
      )
      .catch(err => console.error(err))
  };

  if (message.content.startsWith('confess ') && (message.channel.type === "dm")) {
    let newmsg = message.content.replace('confess', '')
    message.channel.send('The way a large portion (not all of you) treat this confession thing is frustrating and unacceptable.')
    let embConfession = new Discord.MessageEmbed();
    embConfession.setTitle("Confession")
    embConfession.setDescription(newmsg)
    embConfession.setColor('RANDOM')
    embConfession.setFooter("Use confess <confession> in my dms to make a anonymous confession!")
    client.channels.cache.get('843571449641304084').send(`${message.author.tag}`, {embed: embConfession})
  }

  if (message.content.startsWith('img ') && (message.channel.type === "dm")) {
    let msg = message.content.replace('img', '')
    message.channel.send('The way a large portion (not all of you) treat this confession thing is frustrating and unacceptable.')
    let embImage = new Discord.MessageEmbed();
    embImage.setTitle("Confession")
    embImage.setImage(msg)
    embImage.setColor('RANDOM')
    embImage.setFooter("Use img <URL> in my dms to post an image anonymously!")
    client.channels.cache.get('843571449641304084').send(`${message.author.tag}`, {embed: embImage})
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

  if (message.content.startsWith(`prank`)) {
    const { member, channel, content, mentions, author } = message
    message.delete({ timeout: 200 })
        .then(msg => console.log(`Deleted message from ${msg.author.username} after 2 seconds in ${msg.channel.id}`))
        .catch(console.error);
    let text = content
    const split = text.split(' ')
    if (split.length < 2) {
      channel.send('Please provide a message')
    }
    else if (!message.mentions.users.size){
      channel.send('Please mention someone')
    }
    else {
      split.shift()
      let user = mentions.users.first()
      const userTarget = mentions.users.first().username
      split.shift()
      const mess=split.join(' ')

      const UserPFP = member.user.avatarURL();
      let embPrank = new Discord.MessageEmbed()
      embPrank.setTitle(`Prank info`)
      embPrank.setTimestamp()
      // embPrank.setDescription(mess)
      embPrank.setColor('RANDOM')
      embPrank.setFooter(`Prank by ${message.author.tag} as ${userTarget}`, UserPFP)
      embPrank.addFields(
        {
          name: 'Prank By',
          value: message.author.tag,
          inline: true,
        },
        {
          name: 'Targetted user',
          value: userTarget,
          inline: true,
        },
        {
          name: 'Action channel',
          value: `<#${channel.id}>`,
        },
        {
          name: 'Message',
          value: mess,
        }
      )

      const webhooks = await channel.fetchWebhooks();
      const found = webhooks.find(element => element.name.toLocaleLowerCase('en-US') === `dash`);
      if(found){
        const webhook = found;
        await webhook.send({
          content: mess,
          username: userTarget,
          avatarURL: user.displayAvatarURL({ format: 'png' }),
        });
        
        embPrank.setDescription(`Used an existing Webhook`)
        client.channels.cache.get('882261765856059463').send(embPrank)
      }
      else {
        channel.createWebhook(`dash`, {
          avatar: `https://cdn.discordapp.com/attachments/825303485657776150/882247730427224114/Es0lah-VoAADiUA.jpg`,
        })
          .then(webhook => {
            // console.log(`Created webhook ${webhook}`)
            webhook.send({
              content: mess,
              username: userTarget,
              avatarURL: user.displayAvatarURL({ format: 'png' }),
            })
            
            embPrank.setDescription(`New webhook created.`)
            client.channels.cache.get('882261765856059463').send(embPrank)
          })
          .catch(console.error);
      }
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

// if (process.env.TOKEN) {
  // client.login(process.env.TOKEN)
// }
// else {
  client.login(config.token)
// }
