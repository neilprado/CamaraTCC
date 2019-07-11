const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;

const app = express();

app.use(bodyParser.json());

mongoose
  .connect(db)
  .then(() => console.log('Database connected...'))
  .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));
