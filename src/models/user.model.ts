import mongoose, { Schema } from 'mongoose'

const userModel = new Schema (
  {
    name: String,
    email: String,
  }
)

export default mongoose.model("User", userModel)