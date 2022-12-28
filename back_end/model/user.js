const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: {
      type: String,     // 자료형
      required: true,   // 필수 여
    },
    nickname: {
      type: String,
      required: true,
      unique: false,     // 고유 값
    },
    age: {
      type: Number,
    },
    password: {
      type:String,
      required: true
    },
    activeStatus: {
      type: String,
      required:true
    }
  })
  
  module.exports = mongoose.model('user', userSchema);