const mongoose = require('mongoose');
const { Schema } = mongoose;

const noteSchema = new Schema({
    author: {
      type: String,     // 자료형
      required: true,   // 필수 여부
      ref:"user"
    },
    content: {
      type: String,
      required: true,
  
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    emotion: {
      type:Number,
      required:true
    },
    private : {
      type:String,
      required:true
    }
  })
  
  module.exports = mongoose.model('note', noteSchema);