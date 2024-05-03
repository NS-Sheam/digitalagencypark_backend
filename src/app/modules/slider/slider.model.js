import { Schema, model } from "mongoose";


const sliderSchema = new Schema({
  image: {
    type: String,
    required: true
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

export const Slider = model('Slider', sliderSchema);

