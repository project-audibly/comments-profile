const mongoose = require('mongoose');
const faker = require('faker');

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
  time: Number,
});

const myComments = mongoose.model('comments',
  new mongoose.Schema(
    {
      songId: Number,
      name: [childUser],
      text: String,
      time: Number,
      reply: [childReplies],
    },
  ));

  const myTracker = mongoose.model('trackers',
  new mongoose.Schema(
    {
      plays: Number,
      likes: Number,
      reposts: Number,
      follows: Number,
      tracks: Number,
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

const getAllTrackers = (callback) => {
  myTracker.find({})
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    });
};

const songIdGen = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min) + min);
};

const logCommentInDB = (input, callback) => {
  const user = {
    name: 'Guest',
    location: 'San Francisco',
    followers: 0,
    image: faker.image.avatar(),
  };
  const comments = {
    songId: songIdGen(),
    name: user,
    text: input,
    time: new Date().getTime(),
    reply: [],
  };
  // console.log('data: ', comments)
  myComments.insertMany(comments)
    .then((data) => {
      callback(null, data);
    })
    .catch((error) => {
      callback(error, null);
    });
};

module.exports = { getAllComments, logCommentInDB, getAllTrackers };
