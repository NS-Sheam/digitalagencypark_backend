import { Schema, model } from "mongoose";


const FAQSchema = new Schema({

  heading: {
    type: String,
    required: true
  },
  paragraph: {
    type: String,
    required: true
  }
});

export const FAQ = model("FAQ", FAQSchema);

