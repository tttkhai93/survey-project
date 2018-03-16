const mongoose= require('mongoose');
var key = require('../config/key');
var url = key.mongoURI;
var localMongoose = 'mongodb://localhost:27017/survey-app';
mongoose.connect(url || localMongoose);

module.exports ={mongoose};
