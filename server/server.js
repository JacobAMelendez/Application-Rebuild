const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const PORT = 3434;
//res.sendFile(path [, options] [, fn])
app.use(express.static('assets'));
app.get('/', (req, res) => {
  console.log('hello world');
  res.sendFile(path.join(__dirname, '../views/'));
});

//404
// app.use(())

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
