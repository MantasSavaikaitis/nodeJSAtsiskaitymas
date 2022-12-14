const { mongoose } = require("mongoose");
const Joi = require('joi');

const valschema = Joi.object({
  postedBy: Joi.string(),
  image: Joi.string().required(),
  title: Joi.string().required(),
  time: Joi.date(),
  currentBid: Joi.number(),
  startingPrice: Joi.number().required(),
  status: Joi.boolean(),
  auctionDuration: Joi.date(),
})

const Schema = mongoose.Schema;

const userBluePrint = new Schema({
  username: { type: String, required: true, unique: true, },
  password: { type: String, required: true, },
  socketId: String,
  registerDate: Date,
}, { colection: 'users' });

const bidHistoryBluePrint = new Schema({
  bidBy: String,
  bidAmmount: Number,
  bidDate: Date,
})

const itemBluePrint = new Schema({
  postedBy: String,
  image: { type: String, required: true, },
  title: { type: String, required: true, unique: true },
  time: Date,
  currentBid: Number,
  startingPrice: Number,
  status: Boolean,
  auctionDuration: Date,
  bidHistory: Array,
}, { colection: 'items' })

const UserModel = mongoose.model('UserModel', userBluePrint);
const ItemModel = mongoose.model('ItemModel', itemBluePrint);
const BidHistoryModel = mongoose.model('BidHistoryModel', bidHistoryBluePrint);

module.exports = {
  UserModel,
  ItemModel,
  BidHistoryModel,
  valschema,
}
