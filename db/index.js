const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/audiblyComments', { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err, 'unable to connect to database');
  } else {
    console.log('connected to database');
  }
});

const childUser = new mongoose.Schema({
  name: String,
  location: String,
  followers: Number,
  image: String,
});

const childReplies = new mongoose.Schema({
  name: [childUser],
  text: String,
  time: Date,
});

const myComments = mongoose.model('comments',
  new mongoose.Schema(
    {
      songId: Number,
      user: [childUser],
      text: String,
      time: Date,
      reply: [childReplies],
    },
  ));

const getAllComments = (callback) => {
  myComments.find({})
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    });
};

module.exports = { getAllComments };
