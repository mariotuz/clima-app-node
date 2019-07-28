const axios = require('axios');


const getLugarLatlng = async(dir) => {

    const encodeURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeURL }`,
        headers: { 'X-RapidAPI-Key': 'e4b0f395damsh17f94924409ef2ap1e9980jsnf1eafb95ca08' }
    });

    const resp = await instance.get()

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = { getLugarLatlng };