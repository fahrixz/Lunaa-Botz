// Hilih
let handler = async (m, { conn }) => {
let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
let teksnomor = `${htki} *OWNER* ${htka}

✦ @${nomorown.split`@`[0]} ✦

------- ${nameown} -------

📮 *Note:*
• Owner tidak menerima save contact
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner Hanya merespon yang berkaitan dengan BOT
• No Telp`.trim()
await conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
}
handler.help = ['rules']
handler.tags = ['main', 'info']
handler.command = /^(rules)/i

export default handler
