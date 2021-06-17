import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  name: string,
  email: string
}

const userModel = new Schema<IUser>(
  {
    name: String,
    email: String,
  }
)

export default mongoose.model("User", userModel)