import { Schema, model } from "mongoose";


const whyChooseUsSchema = new Schema({
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

export const whyChooseUs = model('WhyChooseUs', whyChooseUsSchema);

