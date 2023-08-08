const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const PORT = 3434;
const { myURI } = require('./models/MessageModel');
const messageController = require('./controllers/messageController')
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

app.get('/getMessages', messageController.getMessages, (req,res) =>{

});
app.patch('/postMessage', messageController.postMessages, (req,res) =>{

});
app.delete('/deleteMessage', messageController.deleteMessage, (req,res) =>{

});

app.use((req,res)=>{
  res.sendStatus(404);
});



//404
// app.use(())

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
