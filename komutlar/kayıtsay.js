const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let kayityetkili = '838744201927720971' //Kayıt yetkilisi İD
  if(!message.member.roles.cache.has(kayityetkili)) 
  return message.channel.send(`Bu komutu kullanabilmek için \`Kayıt\` yetkisine sahip olmalısınız.`);
  
  let kişi = message.mentions.users.first();
  if(!kişi) {
    let erkek = await db.fetch(`kayıte_${message.author.id}`) || '0'
    let kız = await db.fetch(`kayıtk_${message.author.id}`) || '0'
    let toplam = await db.fetch(`kayıttoplam_${message.author.id}`) || '0'

    let kayıtlılar = new Discord.MessageEmbed()
      .setColor('#00ffe3')
      .setDescription(`**${message.author.username} Kişisinin Teyit Bilgi**\n\n`)
      .addField('<a:rainbow:838755853271564358>  __Toplam Erkek Kayıtlarınız__', erkek, true) 
      .addField('<a:rainbow:838755853271564358>  __Toplam Kız Kayıtlarınız__', kız, true)
      .addField('<a:rainbow:838755853271564358>  __Toplam Kayıtlarınız__', toplam)
      .setFooter('Erdem Çakıroğlu 💙 Registery')  
    message.channel.send(kayıtlılar)
  }
    if(kişi) { 
    let erkek = await db.fetch(`kayıte_${kişi.id}`) || '0'
    let kız = await db.fetch(`kayıtk_${kişi.id}`) || '0'
    let toplam = await db.fetch(`kayıttoplam_${kişi.id}`) || '0'
    let kayıtlılar = new Discord.MessageEmbed()
      .setColor('#00ffe3') 
      .setDescription(`**${kişi.username} kişisinin teyit bilgisi**\n\n`)
      .addField('<a:rainbow:838755853271564358>  __Toplam Erkek Kayıtlarınız__', erkek, true) 
      .addField('<a:rainbow:838755853271564358>  __Toplam Kız Kayıtlarınız__', kız, true)
      .addField('<a:rainbow:838755853271564358>  __Toplam Kayıtlarınız__', toplam)
      .setFooter('Erdem Çakıroğlu 💙 Registery') 
    message.channel.send(kayıtlılar)
  } 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['rank'],
  permLevel: 0
}
exports.help = {
  name: 'kayıtsay',
  description: "Teyit sayısını gösterir",
  usage: 'kayıtsay <nick>'
}