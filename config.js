import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'


global.owner = [
  ['51928303585', 'Samsit', true],
]


global.mods = []
global.prems = []

global.libreria = 'Baileys'
global.baileys = 'V 6.7.16' 
global.vs = '2.2.0'
global.nameqr = 'YukiBot-MD'
global.namebot = '✿◟Yυƙι-Sυσυ-Bσƚ◞✿'
global.sessions = 'Sessions'
global.jadi = 'JadiBots' 
global.yukiJadibts = true

global.packname = 'LOVELLOUD'
global.namebot = 'Anya Forger'
global.author = 'Samsit'


global.namecanal = 'LOVELLOUD'
global.canal = 'https://whatsapp.com/channel/0029VbAZUQ3002T9KZfx2O1M'
global.idcanal = '120363403143798163@newsletter'

global.ch = {
ch1: '120363403143798163@newsletter',
}

global.multiplier = 69 
global.maxwarn = '2'


let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
