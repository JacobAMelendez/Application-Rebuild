//Make sure to destructure your model!!!
const { Message } = require('../models/MessageModel');

const MessageController = {
  async getMessages(req, res, next) {
    try {
      const all = await Message.find();
      res.locals.messages = all;
      return next();
    } catch (err) {
      return next({
        log: 'error occured in MessageController.getMessages'
      });
    }
  },

  async postMessages(req, res, next) {
    const { password, message } = req.body;
    try {
      const updatedDB = await Message.create({
        message: message,
        password: password,
      });
      res.locals.postMessages = updatedDB;
      return next();
    } catch (err) {
      return next({ log: 'error occured in post messages'}); 
    }
  },

  async deleteMessage(req, res, next) {
    //deconstruct request body
    console.log('Entering Delete middleware');
    const { id } = req.params; 
    console.log('id', id);
    try {
      const deleted = await Message.findOneAndDelete({_id: id});
      if (deleted === null) console.log('Nothing to delete');
      else
        console.log(
          `message matching ${id} was deleted and reads as follows ${deleted}`
        );
      return next();
    } catch (err) {
      return next({
        log: 'An Error occured while trying to delete'
      });
    }
  },
};

module.exports = MessageController;
