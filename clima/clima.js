const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=2f6e6744e56497876e5fc0c608d95cab&lat=${lat}&lon=${lng}&units=metric`)

    return resp.data.main.temp;

}


module.exports = { getClima };