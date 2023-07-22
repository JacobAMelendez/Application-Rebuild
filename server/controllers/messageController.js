// const mongoose = require('mongoose');
// const { db } = mongoose;
const { Message } = require('../models/MessageModel');

const MessageController = {
  async create(req, res, next) {
    const { password, message } = req.body;
    const date = new Date().toString();
    try {
      const newMessage = await Message.create({
        password: password,
        message: message,
        created_at: date,
      });
      res.locals.message = newMessage;
      return next();
    } catch (err) {
      return next({
        log: 'An error occured while creating message',
      });
    }
  },
  async getAll(req, res, next) {
    try {
      const allMessages = await Message.find({});
      console.log(allMessages);
      res.locals.message = allMessages;
      return next();
    } catch (err) {
      return next({
        log: 'An error occured while trying to retrieve all messages',
      });
    }
  },
  async delete(req, res, next) {
    const { password, message } = req.body;
    console.log(password);
    console.log('delete reached');
    try {
      const deleteMessage = await Message.findOne({ password: password });
      console.log('delete', deleteMessage);
      res.locals.deleted = deleteMessage;
      await Message.deleteOne({ _id: deleteMessage._id });
      return next();
    } catch (err) {
      return next({
        log: 'An error occured while trying to delete a message',
      });
    }
  },
};

module.exports = MessageController;
