const axios = require("axios")
module.exports = {
    name: 'hneko',
    category: 'nsfw',
    exp: 10,
    cool: 15,
    react: "✅",
    description: 'Get a random neko',
    async execute(client, arg, M) {
        let assss = await axios.get ("https://purrbot.site/api/img/nsfw/neko/gif")
        var bobuff = await client.utils.getBuffer(assss.data.link)
        var bogif = await client.utils.gifToMp4(bobuff)
        await client.sendMessage(M.from,{video:bogif, gifPlayback:true , caption: `_Neko Neko Ni~_`},{quoted:M}).catch(err => {
            client.sendMessage(M.from , {image: {url: `${client.utils.errorChan()}`} , caption: `${client.utils.greetings()} Error-Chan Dis\n\nError:\n${err}`})
        })
    }
}
