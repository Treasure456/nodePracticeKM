const { readFile, writeFile } = require('fs');

console.log('starting')
readFile('./content/first.txt','utf8',(err, result)=>{
if (err) {
 console.log(err+'inside if')
 return
}
const first = result;

readFile('./content/second.txt','utf8',(err, result)=>{
 if (err) {
  console.log(err+'inside if')
  return
 }
 const second = result
 writeFile(
  './Content/newFileWrite.txt',
  `result: ${first}, ${second}`, (err, result)=>{
   if (err) {
    console.log(err+'write')
    return
   }
   console.log('done writing')
  }
  )
 })
})
console.log('starting new task')