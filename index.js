const Discord = require("discord.js");
const { Collection } = require('discord.js');
let Intents = Discord.Intents;
const fs = require("fs");
const bot = new Discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_BANS],
  allowedMentions: {
    parse: ['users'],
    replidUser: true,
  },
});
bot.on('messageCreate', async(message) => {
if(message.content === '!scratch'){
let clicks = 4;
        let positions = [
            {
                r: {
                    emoji: `${options.ic}`,
                    style: 'SUCCESS',
                    custom_id: 'r1',
                    disabled: true,
                    type: 2,

                },
                a: {
                    label: `-`,
                    style: 'SECONDARY',
                    custom_id: 'a1',
                    type: 2,
                }
            },
            {
                r: {
                    label: `-`,
                    style: 'DANGER',
                    custom_id: 'r2',
                    disabled: true,
                    type: 2,

                },
                a: {
                    label: `-`,
                    style: 'SECONDARY',
                    custom_id: 'a2',
                    type: 2,
                }
            },
            {
                r: {
                    emoji: `${options.ic}`,
                    style: 'SUCCESS',
                    custom_id: 'r3',
                    disabled: true,
                    type: 2,

                },
                a: {
                    label: `-`,
                    style: 'SECONDARY',
                    custom_id: 'a3',
                    type: 2,
                }
            },
            {
                r: {
                    emoji: `${options.ic}`,
                    style: 'SUCCESS',
                    custom_id: 'r4',
                    disabled: true,
                    type: 2,

                },
                a: {
                    label: `-`,
                    style: 'SECONDARY',
                    custom_id: 'a4',
                    type: 2,
                }
            },
            {
                r: {
                    label: `-`,
                    style: 'DANGER',
                    custom_id: 'r5',
                    disabled: true,
                    type: 2,
                },
                a: {
                    label: `-`,
                    style: 'SECONDARY',
                    custom_id: 'a5',
                    type: 2,
                }
            },
            {
                r: {
                    label: `-`,
                    style: 'DANGER',
                    custom_id: 'r6',
                    disabled: true,
                    type: 2,

                },
                a: {
                    label: `-`,
                    style: 'SECONDARY',
                    custom_id: 'a6',
                    type: 2,
                }
            },
            {
                r: {
                    emoji: `${options.ic}`,
                    style: 'SUCCESS',
                    custom_id: 'r7',
                    disabled: true,
                    type: 2,

                },
                a: {
                    label: `-`,
                    style: 'SECONDARY',
                    custom_id: 'a7',
                    type: 2,
                }
            },
            {
                r: {
                    label: `-`,
                    style: 'DANGER',
                    custom_id: 'r8',
                    disabled: true,
                    type: 2,

                },
                a: {
                    label: `-`,
                    style: 'SECONDARY',
                    custom_id: 'a8',
                    type: 2,
                }
            },
            {
                r: {
                    label: `-`,
                    style: 'DANGER',
                    custom_id: 'r9',
                    disabled: true,
                    type: 2,

                },
                a: {
                    label: `-`,
                    style: 'SECONDARY',
                    custom_id: 'a9',
                    type: 2,
                },
            },
            {
                r: {
                    label: `-`,
                    style: 'DANGER',
                    custom_id: 'r10',
                    disabled: true,
                    type: 2,

                },
                a: {
                    label: `-`,
                    style: 'SECONDARY',
                    custom_id: 'a10',
                    type: 2,
                },
            },
            {
                r: {
                    label: `-`,
                    style: 'DANGER',
                    custom_id: 'r11',
                    disabled: true,
                    type: 2,

                },
                a: {
                    label: `-`,
                    style: 'SECONDARY',
                    custom_id: 'a11',
                    type: 2,
                },
            },
            {
                r: {
                    emoji: `${options.ic}`,
                    style: 'SUCCESS',
                    custom_id: 'r12',
                    disabled: true,
                    type: 2,

                },
                a: {
                    label: `-`,
                    style: 'SECONDARY',
                    custom_id: 'a12',
                    type: 2,
                },
            },
            {
                r: {
                    emoji: `${options.ic}`,
                    style: 'SUCCESS',
                    custom_id: 'r13',
                    disabled: true,
                    type: 2,

                },
                a: {
                    label: `-`,
                    style: 'SECONDARY',
                    custom_id: 'a13',
                    type: 2,
                }
            },
            {
                r: {
                    emoji: `${options.ic}`,
                    style: 'SUCCESS',
                    custom_id: 'r14',
                    disabled: true,
                    type: 2,

                },
                a: {
                    label: `-`,
                    style: 'SECONDARY',
                    custom_id: 'a14',
                    type: 2,
                }
            },
            {
                r: {
                    emoji: `${options.ic}`,
                    style: 'SUCCESS',
                    custom_id: 'r15',
                    disabled: true,
                    type: 2,

                },
                a: {
                    label: `-`,
                    style: 'SECONDARY',
                    custom_id: 'a15',
                    type: 2,
                }
            },

        ];
        function shuffle(array) {
            let currentIndex = array.length, randomIndex;

            // While there remain elements to shuffle...
            while (currentIndex != 0) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }

            return array;
        }
        positions = shuffle(positions);
        let row1 = new Discord.MessageActionRow()
            .addComponents(positions[0].a, positions[1].a, positions[2].a)
        let row2 = new Discord.MessageActionRow()
            .addComponents(positions[3].a, positions[4].a, positions[5].a)
        let row3 = new Discord.MessageActionRow()
            .addComponents(positions[6].a, positions[7].a, positions[8].a)
        let row4 = new Discord.MessageActionRow()
            .addComponents(positions[9].a, positions[10].a, positions[11].a)
        let row5 = new Discord.MessageActionRow()
            .addComponents(positions[12].a, positions[13].a, positions[14].a)
        let embed = new Discord.MessageEmbed()
            .setDescription(`Amont Gain - ${moneyEarned.toLocaleString()}\nClicks left - ${clicks}\nAll the best!`)
            .setColor('YELLOW')
            .setThumbnail('https://media.discordapp.net/attachments/867980814149881926/895314720838529034/5364-planet.png?width=85&height=85')

        let msg = await message.reply({ embeds: [embed], components: [row1, row2, row3, row4, row5] })
        let collector = msg.createMessageComponentCollector({
            time: 120000,
            max: 4
        })
        collector.on('collect', async (i) => {
            if (!i.isButton()) return;
            i.deferUpdate();
            let used = positions.find(x => x.a.custom_id === i.customId);

            if (used.r.style === 'SUCCESS') {

                moneyEarned += 20000
                clicks -= 1;
            } else if (used.r.style === 'DANGER') {

                clicks -= 1;
            }
            used.a = used.r;
            let row1 = new Discord.MessageActionRow()
                .addComponents(positions[0].a, positions[1].a, positions[2].a)
            row2 = new Discord.MessageActionRow()
                .addComponents(positions[3].a, positions[4].a, positions[5].a)
            row3 = new Discord.MessageActionRow()
                .addComponents(positions[6].a, positions[7].a, positions[8].a)
            row4 = new Discord.MessageActionRow()
                .addComponents(positions[9].a, positions[10].a, positions[11].a)
            row5 = new Discord.MessageActionRow()
                .addComponents(positions[12].a, positions[13].a, positions[14].a)
            embed = new Discord.MessageEmbed()
                .setColor('YELLOW')
                .setDescription(`Amont Gain - ${moneyEarned.toLocaleString()}\nClicks left - ${clicks}\nAll the best!`)
                .setThumbnail('https://media.discordapp.net/attachments/867980814149881926/895314720838529034/5364-planet.png?width=85&height=85')


            msg.edit({ embeds: [embed], components: [row1, row2, row3, row4, row5] })


        })
        collector.on('end', async (end) => {
            positions.forEach((g) => {
                g.a = g.r
                row1 = new Discord.MessageActionRow()
                    .addComponents(positions[0].a, positions[1].a, positions[2].a)
                row2 = new Discord.MessageActionRow()
                    .addComponents(positions[3].a, positions[4].a, positions[5].a)
                row3 = new Discord.MessageActionRow()
                    .addComponents(positions[6].a, positions[7].a, positions[8].a)
                row4 = new Discord.MessageActionRow()
                    .addComponents(positions[9].a, positions[10].a, positions[11].a)
                row5 = new Discord.MessageActionRow()
                    .addComponents(positions[12].a, positions[13].a, positions[14].a)
            })

            embed = new Discord.MessageEmbed()
                .setDescription(`Amont Won - ${moneyEarned.toLocaleString()}\nYou this much money using this game!`)
                .setColor('GREEN')
                .setThumbnail('https://media.discordapp.net/attachments/867980814149881926/895314720838529034/5364-planet.png?width=85&height=85')
            msg.edit({ embeds: [embed], components: [row1, row2, row3, row4, row5] })


        })
    
}
})
bot.on('ready', () => {
console.log(`Ready`)
})
