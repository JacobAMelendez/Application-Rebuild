const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const PORT = 3434;
const { myURI } = require('./models/MessageModel');
const messageController = require('./controllers/messageController');
//res.sendFile(path [, options] [, fn])
app.use(express.static('assets'));
app.get('/', (req, res) => {
  console.log('hello world');
  res.sendFile(path.join(__dirname, '../views/'));
});

//connect to cluster
mongoose.connect(myURI);
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

// app.use('/messages',messageRouter,(req,res) =>{

// })

//Need this to unpack the response from our client to send as useable to our controller
app.use(express.json());

app.get('/getMessages', messageController.getMessages, (req, res) => {
  return res.send(200).json(res.locals.messages);
});
app.post('/postMessage', messageController.postMessages, (req, res) => {
  console.log('back in the server file')
  return res.status(200).json(res.locals.postMessages);
});
// app.delete('/deleteMessage', messageController.deleteMessage, (req,res) =>{

// });

app.use((req, res) => {
  res.sendStatus(404);
});

//404
// app.use(())

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
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
