import { Schema, model } from "mongoose";


const previousWorkSchema = new Schema({
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

export const PreviousWork = model("PreviousWork", previousWorkSchema);

