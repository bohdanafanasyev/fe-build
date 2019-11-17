const fetch = require('node-fetch');
const torontoCityID = 6167865;

function getWeatherAPI(cityID) {
  const key = 'a115618d4114bff18c5a0ed5c21db215';

  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&APPID=' + key)
    .then(resp => { return resp.json() })
    .then(data => {
      console.log(data);
    })
}

getWeatherAPI(torontoCityID);
