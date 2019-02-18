console.log('Staring APP');
const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const details = require('./details.js')

const argv = yargs.argv
//console.log('yargs output ',argv)
details.addNote()
var command = process.argv[2]
console.log(process.argv)
if(command === 'add'){
    console.log('Adding new note')
    details.addNote(argv.title, argv.body)
}else if(command === 'list'){
    details.getAll()
}else if(command === 'read'){
    details.getNote(argv.title)
}else if(command === 'remove'){
    console.log('removing note')
}else{
    console.log('cannot be recognise')
}