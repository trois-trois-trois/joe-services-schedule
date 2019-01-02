const express = require('express');
const bodyParser = require('body-parser');
const ScheduleDB = require('../database/Models/ScheduleDB.js');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/espn/schedules', (req, res) => {
  ScheduleDB.find({}, (err, data) => {
  })
  .limit(17)
  .sort({week: 1})
  .then(function(data) {
    res.send(data);
  })
  .catch(function(err) {
    console.err(err);
  })
})

// const port = 3000;
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

