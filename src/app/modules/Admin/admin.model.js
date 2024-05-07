import { Schema, model } from "mongoose";


const adminSchema = new Schema({
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

export const Admin = model('Admin', adminSchema);

