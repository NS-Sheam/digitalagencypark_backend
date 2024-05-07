import { Schema, model } from "mongoose";


const bannerSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    enum: ['active', 'deactive'],
    type: String,
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
  designImages: {
    type: "array",
    items: {
      type: "string",
    },
  },
});

export const Banner = model('Banner', bannerSchema);

