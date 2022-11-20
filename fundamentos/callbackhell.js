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

const getEmpleado = ( id, callback ) => {

    const empleado = empleados.find( empleado => empleado.id === id)?.nombre
    if ( empleado ){
        callback (null, empleado );
    }else{
        callback ( `Empleado con id ${ id } no existe` )
    }
};

const getSalario = (id, callback) => {

    const salario = salarios.find( salario => salario.id === id )?.salario
    if ( salario ){
        callback(null, salario)
    }else{
        callback(`El id ${ id } no tiene salario`);
    }
}

const id = 1

getEmpleado( id, ( err, empleado) => {
    if ( err ){
        console.log('ERROR!!');
        return console.log(err);
    }

    console.log('Empleado existe');
    console.log(empleado);
});

getSalario( id, (err, salario) => {
    if (err){
        console.log('ERR!');
        return console.log(err);
    }
    console.log(`El salario es de : ${ salario.salario }`);
    
})


