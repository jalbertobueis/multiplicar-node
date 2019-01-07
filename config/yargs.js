let opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10

    }
}

const argv = require('yargs')
    .command('listar','Imprime por pantalla la tabla de multiplicar',opts)
    .command('crear','Crear un tabala de multiplicar en un fichero en /tabla',opts)
    .help()
    .argv;

module.exports = {
    argv
}
