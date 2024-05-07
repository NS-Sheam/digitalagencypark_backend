import { Schema, model } from "mongoose";


const pricingSchema = new Schema({
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

export const Pricing = model('Pricing', pricingSchema);

