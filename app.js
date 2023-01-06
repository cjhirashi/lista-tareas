import colors from "colors";
import { inquirerMenu, pausa, leerInput, listadoTareasBorrar } from "./helpers/inquirer.js";
import { Tareas } from "./models/tareas.js";

console.clear();

const main = async () => {

    let option = '0';
    const tareas = new Tareas();

    do {
        option = await inquirerMenu();

        switch (option) {
            case '1':
                const desc = await leerInput('Descripción de tarea: ');
                tareas.crearTarea( desc );
            break;
            case '2':
                tareas.leerDatos();
                tareas.listarTareas();
            break;
            case '3':
                tareas.leerDatos();
                tareas.listaCompletadas();
            break;
            case '4':
                tareas.leerDatos();
                tareas.listaPendientes();
            break;
            case '6':
                const id = listadoTareasBorrar
            break;
        }

        if ( option !== '0') {

            await pausa();

        }

    } while ( option !== '0' );

}

main();