var mongoose = require("mongoose");
var passportLocalstrategy = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
	username: String,
	password: String
})
userSchema.plugin(passportLocalstrategy);
module.exports = mongoose.model("Users", userSchema);
