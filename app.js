
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;

//let argv2 = process.argv;
//console.log(argv);
//console.log(argv.base);

let command = argv._[0];

switch (command) {

    case 'listar': {
        console.log('listar command');
        listarTabla(argv.base, argv.limite)
            .then( data => console.log(data))
            .catch( err => console.log(err));
        break;
    }
    case 'crear':{
        console.log('crear command');
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo ${archivo} creado`))
            .catch(err => console.log(err));
        break;

    }
    default: 'Comando no reconocido';
}

/*let paramentro = argv[2];

if (paramentro == undefined){
    console.log('Debes introducir una base');
    return;
}

let baseArray = paramentro.split('=');

if(baseArray.length > 1 && baseArray[0] === '--base'){
    base = baseArray[1];
}else{
    console.log('Debes introducir una base');
    return;
}
*/




/*
crearArchivo(base)
    .then( archivo => console.log(`Archivo ${archivo} creado`))
    .catch(err => console.log(err));
*/