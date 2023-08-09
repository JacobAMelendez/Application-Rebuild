// const {mongoose} = require ('mongoose');
const mongoose = require('mongoose');
const { Schema, model} = mongoose;

// - [x] We want to store our data in a collection/table called `Message`. (Remember, this may be created as the plural `Messages` - that is fine.)

// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const myURI =
  'mongodb+srv://jacob05311991:SimplePassword@cluster0.b885ied.mongodb.net/?retryWrites=true&w=majority';

// UNCOMMENT THE LINE BELOW IF USING MONGO
// const URI = process.env.MONGO_URI || myURI
// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
// const URI = process.env.PG_URI || myURI;
const MessageSchema = new Schema({
  message: { type: String, required: true },
  password: { type: String, required: true },
  created_at: { type: Date, required: false, default: Date.now }, //{ type: Date, default: Date.now}
});
// const MessageSchema = Message
const Message = model('Message', MessageSchema)
module.exports = {Message, myURI}; // <-- export your model
