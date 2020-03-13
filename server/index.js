const express = require('express');
const db = require('../db/index.js');

const app = express();
const port = 4000;

app.get('/api/comments', (req, res) => {
  console.log('get request succeeded');
  db.getAllComments((err, data) => {
    if (err) {
      res.status(400).send('unable to retrieve data from database');
    } else {
      res.send(data);
    }
  });
});

app.listen(port, (err) => {
  if (err) {
    console.log(err, `unable to connect to port ${port}`);
  } else {
    console.log(`connected to server at port ${port}`);
  }
});