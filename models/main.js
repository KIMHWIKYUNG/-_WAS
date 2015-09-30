var mongoose = require('mogoose');
var Schema = mongoose.Schema;

var snackmain = new Schema(
  {
    _id : String,
    snack_name : String ,
    manufacturer : String ,
    avr_grade : Number,
  }
);

var Snackmain = mongoose.model('Snackmain', snackmain);
module.exports = Snackmain;
