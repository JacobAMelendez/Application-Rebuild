const app = require('express');
//Make sure to destructure your model!!!
const {Message} = require('../models/MessageModel');

const MessageController = {
  async getMessages(req, res, next) {
    const { message, created_at, password } = req.body;
    try {
      const all = await Message.find();
      console.log("all.message:" ,all)
      res.locals.messages = all;
      return next();
    } catch (err) {
      return next({});
    }
  },

  async postMessages(req, res, next) {
    // console.log('req.body:', req.body);
    //destructure req.body
    const { password, message } = req.body;
    try {
      // console.log('message', message);
      console.log('entred try block');
      const updatedDB = await Message.create({
        message: message,
        password: password,
        // created_at: created_at,
      });
      res.locals.postMessages = updatedDB;
      console.log('res.locals.postMessage', res.locals.postMessages)
      console.log('updatedDB', updatedDB);
      return next();
    } catch (err) {
      return next({ err }); //come back to this
    }
  },

// Assuming you have Express.js app setup
// app.get('/user/:userId', (req, res) => {
//   const { userId } = req.params; // Destructure userId from req.params
//   // Now you can use the extracted userId
//   res.send(`User ID: ${userId}`);
// });

  async deleteMessage(req, res, next){
    //deconstruct request body
    console.log('Entering Delete middleware');
    const { password} = req.body;// needs to be params but not sure how to use
    // console.log(_id)
    //params is a key/value pair so when we make postman under your params tab entering the 
    // console.log('req.params', req.params);
    // console.log('req.body', req.body);
    // const passwordId = JSON.stringify(_id)
    try{
      const deleted = await Message.findOneAndDelete(password);
      if (deleted === null) console.log('Nothing to delete');
      else console.log(`message matching ${password} was deleted and reads as follows ${deleted}`);
      return next();
    }catch(err){
      return next(err)
    }
  }

};

module.exports = MessageController;
