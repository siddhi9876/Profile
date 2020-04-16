const express = require('express');
const mongoose = require('mongoose');

const posts = require('./routes/api/posts');
const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');


const app = express();


const db = require('./config/keys').mongoURI;

mongoose
  .connect(db,  { useUnifiedTopology: true })
  .then(() => console.log('MongoDB conneccted'))
  .catch(err => console.log(err));

app.use('/api/posts', posts);
app.use('/api/profiles', profiles);
app.use('/api/users', users);

app.get('/', (req, res) => res.send("hello world hello  siddhi!") );
const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));