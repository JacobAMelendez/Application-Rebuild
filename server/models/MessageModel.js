const mongoose = require('mongoose');
const { Schema } = mongoose;

// v-- REPLACE THE EMPTY STRING WITH YOUR LOCAL/MLAB/ELEPHANTSQL URI
const myURI =
  'mongodb+srv://jacob05311991:SimplePassword@cluster0.b885ied.mongodb.net/?retryWrites=true&w=majority';

// UNCOMMENT THE LINE BELOW IF USING MONGO
const URI = process.env.MONGO_URI || myURI;

// UNCOMMENT THE LINE BELOW IF USING POSTGRESQL
// const URI = process.env.PG_URI || myURI;

const MessageSchema = new Schema({
  password: { type: String, required: true },
  message: { type: String, required: true },
  created_at: { type: String, required: false }
});

const Message = mongoose.model('Message', MessageSchema);
module.exports = { Message, myURI }; // <-- export your model
