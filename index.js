const express = require('express');
const {mongoose} = require('./db/mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

var key =require('./config/key.js');
const port = process.env.PORT || 5000;
const app = express();
module.exports={app};

app.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [key.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
require('./models/User');
require('./services/passport.js');

require('./routes/authRoutes.js');


app.listen(port, ()=>{
  console.log(`Connect to port ${port}`);
});
