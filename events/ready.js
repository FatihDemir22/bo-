const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
   client.user.setStatus('online') 
var oyun = [
         `Erdem Çakıroğlu 💙 Registery` // Kafanıza Göre Değişebilirsiniz Durum Kısmı Bura
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);
        client.user.setActivity(oyun[random]);
      
        }, 2 * 20000);

};
