import mongoose from "mongoose";

const quizzSchema = mongoose.Schema({
      name: {
            type: String,
            required: true,
            unique: true,
      },
      time: {
            type: Number,
            required: true,
      },
      createdBy: {
            type: String,
            required: true,
      },
      startAt: {
            type: Date,
            required: true,
      },
      questions: {
            type: Array,
            required: true,
      },
      result: {
            type: Array,
            required: true,
      },
      course: {
            type: String,
            required: true,
      }
})

const quizz = new mongoose.model("quizz", quizzSchema)

export default quizz