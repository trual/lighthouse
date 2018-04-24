const express = require('express');
const axios = require('axios');

const PORT = process.env.PORT || 3000;

const app = express();

const username = 'C4xKRp9adziB0leesJqRFndCLFYQOH6A31OgeCsj';
const baseURL = 'http://192.168.1.6/api';


app.get('/', (req, res) => {
  return res.send('hello now\n');
});

app.get('/lights/:lightId/status', (req, res) => {
	if (req.params.lightId != parseInt(req.params.lightId)) {
		return res.status(400).send('Invalid Light ID\n');
       }
	const lightId = parseInt(req.params.lightId, 10);
	const url = `${baseURL}/${username}/lights/${lightId}`;
	axios.get(url)
	  .then(function (response) {
		const state = response.data.state;
		return res.send(state);
		    })
	  .catch(function (error) {
		console.log(error);
		return res.status(500).send(error);
		    });
});

app.listen(PORT, (err) => {
  if (err) return console.error(`Error starting server on port ${PORT}:`,err);
  console.log('Server Listening on port', PORT);
});
