const fs = require('fs')

const crearTabla = async (base, bandera, iteraciones) => {

    try {
        let salida = `=======================================
            TABLA DEL : ${base}      
=======================================
`;
        for (let iterador = 1; iterador <= iteraciones; iterador++) {
            salida += `${base} x ${iterador}  = ${base * iterador}\n`
        }

        if (bandera) {
            console.log(salida)
        };

        fs.writeFileSync(`archivos/tabla-${base}.txt`, salida);

        return (`Tabla del ${base} guardada!!`);

    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearTabla
}