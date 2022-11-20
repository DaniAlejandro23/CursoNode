const { crearTabla } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

crearTabla( argv.b , argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo))
    .catch( err => console.log(err))