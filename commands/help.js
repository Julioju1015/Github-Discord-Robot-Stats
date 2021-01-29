const discord = require ("discord.js");

exports.run = (client, message, args) =>{
    const help = new discord.MessageEmbed()
    .setColor('#b434eb')
    .setTitle('GitHub Stats - Help')
    .addFields(
{name: "Profile", value: "Rechercher le profil d'un utilisateur GitHub affichant ses informations. \n ** Utilisation: ** g!profile julioju1015\n"},
         {name: "Repositories", value: "Rechercher les dépôts d'un utilisateur GitHub. (Trié par date de création) \n ** Utilisation: ** g!repo julioju1015 \n"},
         {name: "Help", value: "Envoie ce message d'aide \n ** Utilisation: ** g!help \n"}
         )
    message.channel.send({embed: help })

};
