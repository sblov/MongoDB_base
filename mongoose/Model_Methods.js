const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect("mongodb://127.0.0.1/test",{ useNewUrlParser: true });
mongoose.connection.once("open",()=>{
	console.log("database connect success >>>>");
});

mongoose.connection.once("close",()=>{
	console.log("database been disconnect <<<<");
});


var stuSchema = new Schema({
	name:String,
	age:Number,
	gender:{
		type:String,
		default:"male"
	} //默认值为male
});

var StuModel = mongoose.model("student",stuSchema);
/*
	Model.create(doc(s),[callback])
	创建一个文档并添加到数据库
*/
/*
StuModel.create([{
	name:"jjj",
	age:99,
	gender:"male"
},{
	name:"ggg",
	age:100,
	gender:"female"
}],(err)=>{
	if (!err) {
		console.log(arguments);
		console.log("create success ---")
	}
})
*/

/*
	查询
	Model.find(conditions,[projection],[options],[callback])
		查询所有符合条件的文档，总是返回数组
	Model.findById(id,[projection],[options],[callback])
		根据文档的id属性查询文档
	Model.findOne([conditions],[projection],[options],[callback])
		查询符合条件的第一条文档
		conditions 查询条件
		projection 投影
		options 查询选项（skip limit）
		callback 回调函数必须传，否则不会查询
*/
// StuModel.find({
// 	name:"jjj"
// },(err,docs)=>{
// 	if (!err) {
// 		console.log(docs);
// 	}
// })

// StuModel.find({
// 	name:"jjj"
// },{
// 	name:1,
// 	_id:0
// },(err,docs)=>{
// 	if (!err) {
// 		console.log(docs);
// 	}
// })

// StuModel.find({
// 	name:"jjj"
// },"name age -_id",(err,docs)=>{
// 	if (!err) {
// 		console.log(docs);
// 	}
// })

StuModel.find({},"name age -_id"
,{
	skip:3,
	limit:1
}
,(err,docs)=>{
	if (!err) {
		console.log(docs);
	}
})
 
