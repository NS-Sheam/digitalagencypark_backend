import { Schema, model } from "mongoose";


const customerReviewSchema = new Schema({
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

export const CustomerReview = model('CustomerReview', customerReviewSchema);

