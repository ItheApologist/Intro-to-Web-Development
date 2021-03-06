var mongoose                = require("mongoose");
    passportLocalMongoose   = require("passport-local-mongoose");

var UserSchema = new mongoose.UserSchema({
    username: String,
    password: String,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);