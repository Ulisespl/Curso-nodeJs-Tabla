/* const { argv, options } = require('yargs'); */

const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Toma la base de la tabla de multiplicar'
})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla en consola'
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10,
    describe: 'Toma el agumento para saber hasta donde multiplicar'
})
.check( (argv, options) => {
    if(isNaN(argv.b)){
        throw 'La base tienen que ser un número'
    }
    if(isNaN(argv.h)){
        throw 'El hasta tienen que ser un número'
    }
    return true 
})
.argv;

module.exports = argv;