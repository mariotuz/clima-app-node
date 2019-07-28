const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        decs: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatlng(argv.direccion).then(console.log);

// clima.getClima(21.037500, -86.876945)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {

        const coords = await lugar.getLugarLatlng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.direccion} es de ${temp}`

    } catch (error) {
        return `No se pudo determinar el lcima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);