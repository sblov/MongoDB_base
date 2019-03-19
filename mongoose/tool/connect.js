const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1/test",{ useNewUrlParser: true });
mongoose.connection.once("open",()=>{
	console.log("database connect success >>>>");
});