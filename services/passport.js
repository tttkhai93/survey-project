var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
var key = require('../config/key');

const User = mongoose.model('users');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(
  new GoogleStrategy({
    clientID: key.googleClientID,
    clientSecret: key.googleClientSecret,
    callbackURL: "/auth/google/callback",
    proxy: true
  },
    async (accessToken, refreshToken, profile, done) =>{
      const existingUser = await User.findOne({googleID: profile.id});
      if(existingUser){
        done(null, existingUser);
      } else{
        new User({googleID: profile.id})
        .save()
        .then(user=>done(null, user));
      }
    }
  )
);
