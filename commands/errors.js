const Discord = require('discord.js');

// const adblink = 'https://download2032.mediafire.com/stdvudx807sg/hvevxm4zmocjnhd/15_Second_ADB_Installer_v1.5.3.zip';
// const androidimg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Android_robot_2014.svg/151px-Android_robot_2014.svg.png';
const thumbnail = 'https://cdn.discordapp.com/attachments/756903745241088011/795994905600196648/Group_38.png';
const licenseimg = 'https://cdn.discordapp.com/attachments/756903745241088011/795996485179015198/file_type_license_1_1.png';

module.exports = {
    name: 'error',
    description: 'This will give you information about error you will find during installation.',
    args: true,
    execute(client, message, args) {
        if (args[0] === 'help') {
           return message.channel.send('**__Usage of adb command__** \n \n Use this command for adb download link for windows. \n > **__Eg__:** `!adb install`\n \nPlease do read the note of this command\'s result');
        }
        else if (args[0] === 'license') {
            return message.reply(new Discord.MessageEmbed()
                .setColor('#ff0000')
                .setAuthor('Android license error')
                .setThumbnail(licenseimg)
                // .setDescription('**Android Debug Bridge**(adb) is a versatile command-line tool that lets you communicate with a device. This is recommended version to download.')
                .addFields({
                    name: '\n__Solution 1__\n',
                    value: '\nAfter installing Flutter in the system, run `flutter doctor --android-license` this command in terminal/cmd. ' +
                        'Now you will be asked to accept few conditions/policies. Enter `y` on every question. And now you are ready to go.',
                }).setTimestamp());
        }
    },
};