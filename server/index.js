const express = require('express');

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  console.log('get request succeeded')
  res.send([]);
});

app.listen(port, (err) => {
  if (err) {
    console.log(err, `unable to connect to port ${port}`);
  } else {
    console.log(`connected to server at port ${port}`);
  }
});
