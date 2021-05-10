const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  let kayityetkili = 'ID' //Kayıt yetkilisi İD
  if(!message.member.roles.cache.has(kayityetkili)) 
  return message.channel.send(`Bu komutu kullanabilmek için \`Kayıt\` yetkisine sahip olmalısınız.`);
   
  let member = message.mentions.users.first();
    if(!member) return message.channel.send('Bir kişiyi etiketlemelisin')
    let codeariuseski = await db.fetch(`eskiad_${member.id}`) || 'Eski ismi yok'
    let toplamik = await db.fetch(`toplamik_${member.id}`) || '0'
    let kayıtlılar = new Discord.MessageEmbed()
      .setColor('#00ffe3') 
      .setAuthor(`${member.tag}`, member.avatarURL())
      .setDescription(`Bu üyenin toplamda \`${toplamik}\` isim kayıtı bulundu:

     \`${codeariuseski.join('\n')}\``)
     .setFooter('Erdem Çakıroğlu 💙 Registery') 
    message.channel.send(kayıtlılar) 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nick","isimdeğiş"],
  permLevel: 0
}
exports.help = {
  name: 'isimler',
  description: "kişinin eski isimlerini gösterir",
  usage: 'isimler @kişi'
}
