module.exports = {
    name: 'activate',
    aliases: ['act', 'enable' ],
    exp: 10,
    react: "✅",
    category: 'moderation',
    description: 'Activate certain features on group-chats',
    async execute(client, arg, M) {
        const toggleableGroupActions = ['mod', 'events', 'invitelink', 'chatbot', 'nsfw', 'card-game' ]
        if (!arg)
            return M.reply(
                `Please provide a valid toggleable GroupActions\n\n*Available:* \n${toggleableGroupActions.join('\n')}`
            )
        if (!toggleableGroupActions.includes(arg.trim()))
            return M.reply(
                `Please provide a valid toggleable GroupActions\n\n*Available:* \n${toggleableGroupActions.join('\n')}`
            )

                const Actives = (await client.DB.get(arg)) || []
        if (Actives.includes(M.from))
            return M.reply(`${client.utils.capitalize(arg)} is already activate in your group`)
        await client.DB.push(arg, M.from)
        M.reply(`Success activating ${client.utils.capitalize(arg)} in your group`)
    }
}
