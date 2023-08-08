const app = require('express');
const messageSchema = require('../models/MessageModel')

const MessageController = {
  async getMessages(req, res, next) {
    const { message, created_at, password } = req.body;
    try{
        const all = await 
    };
    catch{
        return next();
    };
  },

  async postMessages(req, res, next) {
      const { message, created_at, password } = req.body; //destructure req.body
    try {
        const updatedDB = await 

    } catch (err) {}
  },
};

module.exports = MessageController;
