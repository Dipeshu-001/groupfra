module.exports = {
    name: 'alive',
    aliases: ['a'],
    category: 'misc',
    exp: 0,
    cool: 30,
    react: "✅",
    description: 'Testing stuff',
    async execute(client, arg, M) {
        M.reply(
            `Everything is working ${
                (await client.contact.getContact(M.sender, client)).username
            } | *Exp:* ${await client.exp.get(M.sender)} *Level:* ${(await client.DB.get(`${M.sender}_LEVEL`)) || 0}`
        )
    }
}
