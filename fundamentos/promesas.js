const empleados = [
    {
        id : 1,
        nombre : 'Daniel'
    },
    {
        id : 2,
        nombre : 'Alejandro'
    },
    {
        id : 3,
        nombre : 'Cristopher'
    }
];
const salarios = [
    {
        id : 1,
        salario : 1000
    },
    {
        id : 2,
        salario : 1500
    }
];

const getEmpleado = (id) => {

    
    return new Promise(( resolve, reject) =>{

        const empleado = empleados.find( e => e.id === id)?.nombre;

        (empleado)
            ? resolve ( empleado )
            : reject(`no existe empleado con id ${id}`)
        }
    );
};

const getSalario = (id) => {

    
    return new Promise(( resolve, reject) =>{

        const salario = salarios.find( s => s.id === id)?.salario;

        (salario)
            ? resolve ( salario )
            : reject(`El usuario con id ${id} no tiene salario`)
        }
    );
};

const id = 4;


//* FORMA 1

// getEmpleado(id)
//     .then( empleado => console.log( empleado ) )
//     .catch(err => console.log( err ) )

// getSalario(id)
//     .then( salario => console.log( salario ) )
//     .catch(err => console.log( err ) )

//* -----------------------------------------------------------------------------------------------------------

//* FORMA 2
// getEmpleado(id)
//     .then( empleado => {
//         getSalario(id)
//             .then( salario => console.log(`${empleado} tiene un salario de: ${salario} `) )
//             .catch(err => console.log( err ) )
//     })
//     .catch(err => console.log( err ) )

//* -----------------------------------------------------------------------------------------------------------
//* FORMA 3

let nombre;

getEmpleado(id)
    .then( empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then( salario => console.log(`El empleado ${nombre} tiene un salario de: ${salario}`))
    .catch( err => console.log(err) )