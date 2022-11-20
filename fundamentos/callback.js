//* ---------------------------------------

//* funcion para entender callback

// setTimeout( () => {
//     console.log('Hola mundo!!');
// },1000)

//* ---------------------------------------

const getUsuarioByID = ( id, callback ) => {
    const user =  {
    id,                                         //* usuario tiene una propiedad llamada id que tiene valor id
    nombre: 'Daniel'
    }

    setTimeout(() => {
        callback(user);
    }, 1500);
}

getUsuarioByID( 10, ( usuario ) =>{
    console.log(usuario.nombre);
});