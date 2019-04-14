const mongoose = require('mongoose');
const onlinedb = require('../../config/keys');

// connect to online database
mongoose.connect(onlinedb.mongoURI, { useNewUrlParser: true });

// create database connection
const db = mongoose.connection;

// allow promise on database
mongoose.Promise = global.Promise;

// Log connection status to db

db.on('error', console.error.bind(console, 'Connection error:'));
db.on('open', () => console.log(`Connected to online database`));

// Create Schema
const groupSchema = new mongoose.Schema({
  date: {
    type: Date
  },
  dateofevent: {
    type: Date
  },
  timeofevent: {
    type: Number
  },
  studyTopic: {
    type: String
  },
  lengthofstudy: {
    type: String
  },
  presenter: {
    type: String
  },
  typeofstudy: {
    type: String
  },
  groupNumber: {
    type: Number
  },
  groupArea: {
    type: String
  },
  leaderName: {
    type: String
  },
  leaderPhone: {
    type: Number
  },
  assistantName: {
    type: String
  },
  assistantPhone: {
    type: Number
  },
  memberone: {
    type: String
  },
  membertwo: {
    type: String
  },
  memberthree: {
    type: String
  },
  memberfour: {
    type: String
  },
  memberfive: {
    type: String
  },
  membersix: {
    type: String
  },
  memberseven: {
    type: String
  },
  membereight: {
    type: String
  },
  membernine: {
    type: String
  },
  memberten: {
    type: String
  },
  visitorone: {
    type: String
  },
  visitortwo: {
    type: String
  },
  visitorthree: {
    type: String
  },
  visitorfour: {
    type: String
  },
  visitorfive: {
    type: String
  },
  visitorsix: {
    type: String
  },
  membersPresent: {
    type: Number
  },
  membersabsent: {
    type: Number
  },
  children: {
    type: Number
  },
  visitors: {
    type: Number
  },
  comments: {
    type: String
  },
  miracles: {
    type: String
  },
  recivedChrist: {
    type: Number
  },
  offeringTemple: {
    type: Number
  }

});

const Report = mongoose.model('Report', groupSchema);

module.exports = {
  Report,
  db
}