const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const posts = require('./routes/api/posts');
const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');


const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


const db = require('./config/keys').mongoURI;

mongoose
  .connect(db,  { useUnifiedTopology: true })
  .then(() => console.log('MongoDB conneccted'))
  .catch(err => console.log(err));

app.use('/api/posts', posts);
app.use('/api/profile', profiles);
app.use('/api/users', users);

//Passport middleware
app.use(passport.initialize());

//Passport Config
require('./config/passport')(passport);

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));