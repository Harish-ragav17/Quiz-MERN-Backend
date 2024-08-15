const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    require: true
  },
  password:{
   type: String,
   require: true
  },
  name: {
    type: String,
    require: true
  },
  role: {
    type: String,
    require: true
  },
  score: {
    type: Number,
    default:0
  }
});

const Users = mongoose.model("Users",userSchema)

module.exports= Users;