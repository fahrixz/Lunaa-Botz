// Hilih

let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}`
let biooo =`${htki} *BIODATA* ${htka}
${htjava} *💌 Nama* : Fahri Andrian Saputra
${htjava} *♂️ Gender* : Laki laki
${htjava} *🕋 Agama* : Islam
${htjava} *⏰ Tanggal lahir* : Private
${htjava} *🎨 Umur* : 15
${htjava} *🧮 Kelas* : 11
${htjava} *🧩 Hobby* : 𝙼𝚎𝚗𝚌𝚒𝚗𝚝𝚊𝚒𝚖𝚞
${htjava} *💬 Sifat* : 𝙱𝚊𝚒𝚔 𝙷𝚊𝚝𝚒
${htjava} *🗺️ Tinggal* : 𝙿𝚛𝚒𝚟𝚊𝚝𝚎
${htjava} *📷 ɪɴsᴛᴀɢʀᴀᴍ* : ${sig}
${htjava} *💌 TY:* ${syt}
•·––––––––––––––––––––––––––·•
`
await conn.sendFile(m.chat, pu, 'menu.jpg', biooo, false, m, adReply)
}

handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bio|ownerbio|bioowner)$/i

export default handler
