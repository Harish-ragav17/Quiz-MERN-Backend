const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
  quiz_name: {
    type: String,
    require: true,
  },
  quiz_time: {
    type: Number,
  },
  no_of_questions: {
    type: Number,
  },
  quiz_points: {
    type: Number,
  },
  quiz_expiry: {
    type: String,
  },
  quiz: [
    {
      question:{
        type: String,
      },
      options: [{ type: String }],
      answer: {
        type: String,
      },
    },
  ],
  attended_students:[
    {
      studentId:{
        type:String
      },
      mark:
      {
        type:Number
      }
    }
  ]
});

const quizschema = mongoose.model("Quiz_Topics", quizSchema);

module.exports = quizschema;
