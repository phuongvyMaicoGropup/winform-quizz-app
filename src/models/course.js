import mongoose from "mongoose";

const CouresSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teacherId: {
    type: String,
    required: true,
  },
});

const Course = mongoose.model("Course", CouresSchema);

export default Course;
