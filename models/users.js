var     mongu           = require("mongoose"),
        passLocalMong   = require("passport-local-mongoose");

var userSchema =new mongu.Schema({
    username: String,
    password: String
});

userSchema.plugin(passLocalMong);

module.exports = mongu.model("user",userSchema);