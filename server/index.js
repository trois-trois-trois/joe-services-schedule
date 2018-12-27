const express = require('express');
const bodyParser = require('body-parser');
const scheduledb = require('../database/index.js');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))



app.get('/rams', (req, res) => {
  scheduledb.find({}, (err, data) => {
  })
  .then(function(data) {
    res.json(data);
  })
  .catch(function(err) {
    console.err(err);
  })
})


//test test

const port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

