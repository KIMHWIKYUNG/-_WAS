var mongoose = require('mogoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  _id : String , // base64-encoding
	email : String ,
	password : String ,
	phone_number : String ,
	introduction : String ,
	nickname : String,
	join_date : Date,
	comments : [{
    _id : String,
    text : String,
    grade : Number,
    c_timestamp : Date
  }]
});

var User = mongoose.model('User', userSchema);  //'User 사용되는 이름'
module.exports = User;
