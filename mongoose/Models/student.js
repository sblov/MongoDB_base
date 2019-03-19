const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var stuSchema = new Schema({
	name:String,
	age:Number,
	gender:{
		type:String,
		default:"male"
	} //默认值为male
});

var StuModel = mongoose.model("student",stuSchema);

module.exports = StuModel;