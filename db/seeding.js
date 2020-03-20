const faker = require('faker');
const mongoose = require('mongoose');

const songIdGen = () => {
  const min = 1;
  const max = 100;
  return Math.floor(Math.random() * (max - min) + min);
};
const commentsCreater = () => {
  const commentsContainer = [];
  const replyNumberGen = () => (
    Math.floor(Math.random() * 3)
  );
  for (let i = 0; i < replyNumberGen(); i += 1) {
    const user = {
      name: faker.name.findName(),
      location: faker.address.city(),
      followers: faker.random.number(),
      image: faker.image.avatar(),
    };
    const comments = {
      name: user,
      text: faker.lorem.sentence(),
      time: faker.date.recent(),
    };
    commentsContainer.push(comments);
  }
  return commentsContainer;
};

const commentAndReplyCreator = () => {
  const container = [];
  for (let i = 0; i < 100; i += 1) {
    const user = {
      name: faker.name.findName(),
      location: faker.address.city(),
      followers: faker.random.number(),
      image: faker.image.avatar(),
    };
    const commentsAndReplies = {
      songId: songIdGen(),
      name: user,
      text: faker.lorem.sentence(),
      time: faker.date.recent(),
      reply: commentsCreater(),
    };
    container.push(commentsAndReplies);
  }
  return container;
};


const allComments = commentAndReplyCreator();


mongoose.connect('mongodb://localhost:27017/audiblyComments', { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log(err, 'cannot connect to database');
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

myComments.insertMany(allComments);
