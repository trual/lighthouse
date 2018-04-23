const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  return res.send('hello world');
});


app.listen(PORT, (err) => {
  if (err) return console.error(`Error starting server on port ${PORT}:`,err);
  console.log('Server Listening on port', PORT);
});
