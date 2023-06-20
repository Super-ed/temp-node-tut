// npm - global command, comes with node
// npm --version

//local dependency - use it only in this particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packagename>
//sudo install -g <packagename> (mac)

//package.json - manifest (stores importan info about project/package)'
//manual approach (create package.json in the root, create properties etc)
//npm init(step by step, presse enter to skip)
//npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems)