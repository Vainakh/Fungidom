const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const db = require('./controllers.js');

const app = express();

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/node-react-starter`, { useNewUrlParser: true });

app.use(express.static(path.join(__dirname, './../client/dist')));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.post('/data', (req, res) => {
  let data = req.body.input;
  db.postData(data, (err) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(201).send();
      console.log(`Step2 in, server works, posting ${data} to database`);
    }
  });
})

app.post('/auth', (req, res) => {
  let data = req.body;
  db.postData(data, (err) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(201).send();
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});