import { Schema, model } from "mongoose";


const customerSchema = new Schema({
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

export const Customer = model('Customer', customerSchema);

