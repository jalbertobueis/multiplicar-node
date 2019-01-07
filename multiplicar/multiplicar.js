const fs = require('fs');
const color = require('colors');
let data = '';


let listarTabla = (base, limite = 10) => {

    return new Promise( (resolve, reject) =>{

        let data = '';
        if(!Number(base)){
            reject(`La base ${base} no es un número`);
        }else if (!Number(limite)){
            reject(`El límite ${limite} no es un número`);
        }

        for ( let i=1; i <= limite; i++){
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        resolve(data);


    })
}

let crearArchivo = (base, limite = 10) => {

    return new Promise ( (resolve, reject) => {

        if(!Number(base)){
            reject(`La base ${base} no es un numero`);
        }else if (!Number(limite)){
            reject(`El límite ${limite} no es un número`);
        }

        for (let i = 1; i <= limite; i++){
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        const fileData = new Uint8Array(Buffer.from(data));
        fs.writeFile(`tablas/tabla-${base}.txt`, fileData, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tablas/base-${base}.txt`);

        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
