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

//通过Model查询的结果都是Document

var stu = new StuModel({
	name:"lll",
	age:33,
	gender:"female"
});

console.log(stu);

// stu.save((err)=>{
// 	if (!err) {
// 		console.log('save success');
// 	}
// });

StuModel.findOne({},(err,doc)=>{
	if (!err) {

		/*
			update(update,[options],[callback])
			remove([callback])
		*/
		/*doc.update({$set:{age:88}},(err)=>{
			if (!err) {
				console.log('update success');
			}
		});*/

		/*doc.age = 11;
		doc.save（）;*/

		/*doc.remove((err)=>{
			if (!err) {
				console.log('remove success');
			}
		});*/

		/*
			get(name)	获取文档中的指定属性值
			set(name,value)	设置文档中的指定属性值
			id 	获取文档中的_id属性值
			toObject()	将document对象转换为一个普通js对象
					转换为普通js对象后，注意所有的document对象的方法或属性都不能使用
		*/

		console.log(doc.get("age"));
		console.log(doc.age);

		doc.set("name","NewName")
		console.log(doc);

		doc = doc.toObject();

		delete doc.age;
		console.log(doc);

	}
});