import mongoose
      from "mongoose";

const AccountSchema = new mongoose.Schema({
      password: {
            type: "string",
            required: true,
      },
      userId: {
            type: "string",
            required: true,
            unique: true
      },
      position: {
            type: "string",
            required: true,
            enum: ["teacher", "student", "admin"]
      },

}, { timestamps: true })

const Account = mongoose.model('Account', AccountSchema)

export default Account