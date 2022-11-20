
const deadpool = {
    nombre: 'wade',
    apellido : 'winston',
    poder : 'regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

//*---------------------------------------------------------

//* console.log(deadpool.getNombre());


//* const nombre   = deadpool.nombre;
//* const apellido = deadpool.apellido;
//* const poder    = deadpool.poder;

//*---------------------------------------------------------

//* const { nombre, apellido, poder } = deadpool;

//* console.log(nombre, apellido, poder);

//*---------------------------------------------------------


// function imprimeHeroe( { nombre, apellido, poder, edad = 0} ){
//     console.log(nombre, apellido, poder, edad);
// }

// imprimeHeroe(deadpool);

//*---------------------------------------------------------

const heroes = [ "robin", "superman", "batman" ];

// const[ h1, h2, h3] = heroes;

// console.log(h1, h2, h3);

const[ , , h3] = heroes;

console.log( h3 );