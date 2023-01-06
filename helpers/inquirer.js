import inquirer from "inquirer";
import colors from "colors";

const options1 = [
    {
        type: 'list',
        name: 'option',
        message: 'Seleccione una opción: ',
        choices: [
            {
                value: '1',
                name: `${'1.'.green} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.green} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.green} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.green} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.green} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.green} Eliminar tarea(s)`
            },
            {
                value: '0',
                name: `${'0.'.green} Salir`
            }
        ]
    }
]

const inquirerMenu = async() => {

    console.clear();
    console.log('=============================='.green);
    console.log('   Gestor de tareas'.cyan);
    console.log('==============================\n'.green);

    const { option } = await inquirer.prompt(options1);

    return option;

}

const pausa = async() => {

    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${'ENTER'.green} para continuar...`
        }
    ]

    console.log('\n');
    await inquirer.prompt(question);

}

const leerInput = async(message) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if ( value.length === 0 ) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;

}

const listadoTareasBorrar = async( tareas ) => {

    const choices = tareas.map( ( tarea, i ) => {

        const idx = `${i + 1}.`.green;

        return {
            value: tarea.id,
            name: `${ idx } ${ tarea.desc }`
        }
    });

    const question = [
        {
            type: 'list'
        }
    ]
}

export {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar
};