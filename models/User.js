const mongoose = require('mongoose');
// const {Schema} = mongoose;


mongoose.model('users', {
  googleID: String
});