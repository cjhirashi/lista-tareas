import { guardarDB, leerDB } from "../helpers/gestorDB.js";
import { Tarea } from "./tarea.js";

const nombre = 'tareas';

class Tareas {

    _listado = {};

    constructor(){

        this.leerDatos();

    }

    borrarTarea( id ) {

        if ( this._listado[id] ) {
            delete this._listado[id];
            guardarDB(nombre,this._listado);

            this.leerDatos();
        }
    }

    leerDatos() {

        const data = leerDB( nombre );

        ( data )
            ? this._listado = data
            : this._listado = {}

    }

    get listadoArr() {

        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        });

        return listado;

    }

    crearTarea( desc = '' ) {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea

        guardarDB(nombre,this._listado);

    }

    listarTareas() {

        console.log();

        this.listadoArr.forEach( (tarea, i) => {

            const index = `${i + 1}.`.green;
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                                ? 'Completada'.green
                                : 'Pendiente'.red;

            console.log(`${index} ${desc} :: ${estado}`);
        });

    }

    listaCompletadas() {

        console.log();
        let contador = 0;

        this.listadoArr.forEach( (tarea, i) => {

            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                                ? 'Completada'.green
                                : 'Pendiente'.red;

            if (completadoEn) {
                contador += 1;
                console.log(`${contador.toString().green} ${desc} :: ${estado}`);
            }
        });

    }

    listaPendientes() {

        console.log();
        let contador = 0;

        this.listadoArr.forEach( (tarea, i) => {

            const { desc, completadoEn } = tarea;
            const estado = (completadoEn)
                                ? 'Completada'.green
                                : 'Pendiente'.red;

            if (!completadoEn) {
                contador += 1;
                console.log(`${contador.toString().green} ${desc} :: ${estado}`);
            }
        });

    }

}

export { Tareas };