const mongoose = require('mongoose');

mongoose.model('users', {
  googleID: String
});
