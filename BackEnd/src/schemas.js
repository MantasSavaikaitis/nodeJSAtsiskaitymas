const { mongoose } = require("mongoose");


const Schema = mongoose.Schema;

const userBluePrint = new Schema({
  username: { type: String, required: true, unique: true, },
  password: { type: String, required: true, },
  socketId: String,
  registerDate: Date,
}, { colection: 'users' });

const UserModel = mongoose.model('UserModel', userBluePrint);

module.exports = {
  UserModel,
}
