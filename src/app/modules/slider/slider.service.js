
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary.js";
import { Slider } from "./slider.model.js";

const createSliderInDB = async (file,payload) => {
//   console.log(payload, {file});
  try {
    const imageName = `${file.size}${file?.originalname}`;
    const path = file?.path;

    // Send image to Cloudinary and get the secure URL
    const { secure_url } = await sendImageToCloudinary(imageName, path);
    const sliderData = {};
    // Add the image URL to sliderData
    sliderData.image = secure_url;
    sliderData.heading = payload.heading;
    sliderData.paragraph = payload.paragraph;

    // Create slider with updated sliderData
    const result = await Slider.create(sliderData);

    return result;
  } catch (err) {
    throw new Error(err);
  }
};

const getAllSliderFromDB = async () => {
  const result = await Slider.find();
  return result;
};

export const sliderService = {
  createSliderInDB,
  getAllSliderFromDB,
};

const createStudentIntoDB = async () => {};
