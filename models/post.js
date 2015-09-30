var mongoose = require('mogoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
  _id : String,
  snack_name : String ,
  manufacturer : String ,
  nutrition: {nut_name: String, nut_amount: Number},
  ingredient: [
    {ing_name : String, ing_amount : Number}
    ],
  avr_grade : Number,
  comments : [
    {
      by : {id: value, nickname : value},
      text : value,
      grade : value ,
      c_timestamp : value
    }
   ]
});

var Post = mongoose.model('Post', postSchema); 
module.exports = Post;
