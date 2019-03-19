const mongoose = require('mongoose');

//将mongoose.Schema赋值给一个变量
const Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1/test",{ useNewUrlParser: true });
mongoose.connection.once("open",()=>{
	console.log("database connect success >>>>");
});

mongoose.connection.once("close",()=>{
	console.log("database been disconnect <<<<");
});

//创建Schema对象
var stuSchema = new Schema({
	name:String,
	age:Number,
	gender:{
		type:String,
		default:"male"
	} //默认值为male
});
/*
	通过Schema来创建Model
	Model代表的是数据库中的集合，通过Model才能对数据库进行操作
	mongoose.model(modelName,schema)
	modelName是映射的集合名，mongoose会自动将集合名变为复数
*/
var StuModel = mongoose.model("student",stuSchema);

//插入文档
StuModel.create({
	name:"lov",
	age:33
},(err)=>{
	if (!err) {
		console.log("insert success ----")
	}
})

// mongoose.disconnect();