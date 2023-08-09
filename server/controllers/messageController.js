const app = require('express');
//Make sure to destructure your model!!!
const {Message} = require('../models/MessageModel');

const MessageController = {
  async getMessages(req, res, next) {
    const { message, created_at, password } = req.body;
    try {
      const all = await Message.Find();
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
};

module.exports = MessageController;
