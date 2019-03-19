require("./tool/connect.js");

var Student = require("./Models/student.js");

Student.find({},(err,docs)=>{
	if (!err) {
		console.log(docs);
	}
});