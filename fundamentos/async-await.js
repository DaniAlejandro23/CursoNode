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
            : reject(`No existe empleado con id ${id}`)
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


const getInfoUsuario = async(id) =>{
    const empleado = await getEmpleado(id);
    const salario  = await getSalario(id);

    return `El empleado : ${empleado} tiene un salario de: ${salario}`
}

const id =4;

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err))


