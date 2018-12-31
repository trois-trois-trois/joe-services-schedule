const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/espn/schedules', (req, res) => {
  db.find({}, (err, data) => {
  })
  .then(function(data) {
    res.send(data);
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

