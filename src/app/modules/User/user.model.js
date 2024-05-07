import { Schema, model } from "mongoose";


const userSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  paragraph: {
    type: String,
    required: true,
  },
});

export const User = model('User', userSchema);

