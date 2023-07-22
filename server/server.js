const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const PORT = '3434';
const { Message, myURI } = require('./models/MessageModel');
const messageController = require('./controllers/messageController');

mongoose.connect(myURI);
mongoose.connection.once('open', () => {
  // optional
  console.log('Connected to database');
});

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, '../views')));
app.use(express.static(path.join(__dirname, '../assets')));

app.post('/', messageController.create, (req, res) => {
  return res.status(200).json(res.locals.message);
});
app.get('/getAll', messageController.getAll, (req, res) => {
  return res.status(200).send(res.locals.message);
});
app.delete('/',messageController.delete ,(req, res) => {
  return res.status(200).send(res.locals.deleted);
});

app.use((req, res) => {
  return res.sendStatus(404);
});
app.use((err, req, res) => {
  const errObj = {
    log: 'error',
    message: { error: 'An error has occured' },
    status: 500,
  };

  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});
app.listen(PORT, () => console.log(`Listening on localhost ${PORT}`));
