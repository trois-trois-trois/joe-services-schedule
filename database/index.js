const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ram/schedule');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB has connected');
});

mongoose.Promise = global.Promise;

const ScheduleSchema = new mongoose.Schema(
  {
    id: Number,
    team: String,
    teamlogo: String,
    week: Number,
    date: String,
    opponent: String,
    opponentlogo: String,
    result: String,
    winloss: String,
    stats: {
      pass: Number,
      rush: Number,
      rec: Number
    },
    players: String,
    feed: String
  }
)
const scheduledb = mongoose.model('Schedule', ScheduleSchema)
module.exports = scheduledb;


/*

// Schemas
  // Make a schema then a model for the schema

  //do i need to parse all of this data first so post requests go through?
  const UserSchema = new mongoose.Schema(
    {
    name:  {type: String, trim: true, default: ''},
    email:  {type: String, trim: true, unique: true, default: '' },
    password: {type: String, trim: true, default: ''},
    addressline1: {type: String, trim: true, default: ''},
    addressline2: {type: String, trim: true, default: ''},
    city: {type: String, trim: true, default: ''},
    state: {type: String, trim: true, default: ''},
    zip: {type: Number, default: null},
    phone:  {type: Number, default: null},
    creditcard: {type: Number, default: null},
    expirationdate: {type: Number, default: null},
    cvv: {type: Number, default: null},
    billingzipcode: {type: Number, default: null},
  });


  const Checkout = mongoose.model('Checkout', UserSchema);
  // Model
  // first parameter is the same model name, 2nd parameter is the models schema
  //const UserModel = mongoose.model('UserModel', UserSchema);



    //  var aazzbotatow= new Checkout({
    //    name: 'MRzAPs',
    //    email: '1gasgggggjjjjjgjgjgjgjgj',
    //    password: 'ffjfjfjfjfjfjfjff',
    //  })
    //  aazzbotatow.save();
    //  Checkout.find((err, data) =>{
    //    if(err) {
    //      return console.log('error');
    //    }
    //    console.log('successfully saved');
    //  });

  module.exports = Checkout;



//test to see if we're able to save user information


*/