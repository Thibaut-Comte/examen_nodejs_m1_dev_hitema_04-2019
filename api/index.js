const app = require('./api');

const express = require('express');

const APP_PORT = 8000;

app.use(express.static('public'));

app.listen(APP_PORT, () => {
  console.log('Server listening on port:', APP_PORT);
});
