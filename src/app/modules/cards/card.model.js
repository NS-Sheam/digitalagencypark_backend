import { Schema, model } from "mongoose";


const cardSchema = new Schema({

  heading: {
    type: String,
    required: true
  },
  paragraph: {
    type: String,
    required: true
  }
});

export const Card = model('Card', cardSchema);

