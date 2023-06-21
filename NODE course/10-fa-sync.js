const {readFileSync, writeFileSync} = require('fs')
const fs = require('fs').readFileSync; // this one is the same as the 1st
console.log('star')
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first, second)

writeFileSync('./content/result-sync.txt', 
`Here is the resut: ${first}, ${second}`,
 { flag: 'a' }
 );
console.log("done with this taks");
console.log("starting the next one");