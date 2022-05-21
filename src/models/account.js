import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema(
  {
    password: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    position: {
      type: String,
      required: true,
      enum: ["teacher", "student", "admin"],
    },
    userName: {
      type: String,
      required: true,
    },
    courses: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true },
);

const Account = mongoose.model("Account", AccountSchema);

export default Account;
