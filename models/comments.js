var mongoose = require('mogoose');
var Schema = mongoose.Schema;

var comments = new Schema({
  _id : String,
  text : String ,
  {by : {id: value, nickname : value},
  grade : Number,
  c_timestamp : Date
});

var Comments = mongoose.model('Comments', comments);
module.exports = Comments;
