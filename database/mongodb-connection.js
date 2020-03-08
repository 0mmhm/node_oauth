const mongoose = require('mongoose');

const MongoURI = require('../config/keys').MongoURI;

mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
  if (err) console.log('MongoDB connection failed');
  else console.log('MongoDB server connected');
});
