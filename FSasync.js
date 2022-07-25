const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/Second.txt','utf8')


writeFileSync(
 './Content/newFileWrite.txt',
`this text I added: ${first}, ${second} `, {flag: 'a'})
