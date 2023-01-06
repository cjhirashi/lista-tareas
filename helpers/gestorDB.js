import fs from "fs";

const ruta = './db/';

const guardarDB = ( nombreArchivo, data ) => {
    const nombre = `${nombreArchivo}.json`;
    const archivo = `${ruta}${nombre}`;

    fs.writeFileSync(archivo,JSON.stringify(data));

}

const leerDB = ( nombreArchivo ) => {
    const nombre = `${nombreArchivo}.json`;
    const archivo = `${ruta}${nombre}`;

    if ( !fs.existsSync( archivo ) ) {
        return null;
    }

    const info = fs.readFileSync( archivo, { encoding: 'utf-8' } );
    const data = JSON.parse(info);

    return data;
}

export { guardarDB, leerDB };