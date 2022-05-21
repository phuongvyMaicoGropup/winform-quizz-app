import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema({
  quizId: {
    type: String,
    required: true,
  },
  quizName: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});

const Result = mongoose.model("Result", ResultSchema);

export default Result;
