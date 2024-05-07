
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary.js";
import { Steps } from "./steps.model.js";

const createStepInDB = async (file,payload) => {
 try {
   const imageName = `${file.size}${file?.originalname}`;
   const path = file?.path;

   // Send image to Cloudinary and get the secure URL
   const { secure_url } = await sendImageToCloudinary(imageName, path);
   const stepData = {};
   // Add the image URL to sliderData
   stepData.image = secure_url;
   stepData.heading = payload.heading;
   stepData.paragraph = payload.paragraph;

   // Create slider with updated sliderData
   const result = await Steps.create(stepData);

   return result;
 } catch (err) {
   throw new Error(err);
 }
};

const getAllStepsFromDB = async () => {
  const result = await Card.find();
  return result;
};

export const stepsService = {
  createStepInDB,
  getAllStepsFromDB,
};
