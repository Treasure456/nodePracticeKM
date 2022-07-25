const path = require('path')

console.log(path)

const filePath = path.join('/content/','sub','test.txt')

console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname)
console.log(absolute)
const absolute1 = path.resolve(__dirname,'content','sub','test.txt')
console.log(absolute1)