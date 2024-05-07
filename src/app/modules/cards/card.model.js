import { Schema, model } from "mongoose";


const cardSchema = new Schema({
  image:{
    type:String,
    required:true
  },
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

