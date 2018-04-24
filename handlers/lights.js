const axios = require('axios');

const username = 'C4xKRp9adziB0leesJqRFndCLFYQOH6A31OgeCsj';
const baseURL = 'http://192.168.1.6/api';

const lightsHandler = (req, res) => {
  const url = `${baseURL}/${username}/lights`;
  axios.get(url)
    .then(function(response) {
      const data = getLightsStatus(response.data);
      return res.send(data);
    })
    .catch(function(error) {
      console.log(error);
      return res.status(500).send(error);
    });
};

function getLightsStatus(data){
  const result = Object.entries(data).map(([lightId, lightData]) => {
    const {name, state} = lightData;
    return {
      lightId,
      name,
      state,
    }
  });
  return result;
}

module.exports = lightsHandler;
