
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary.js";
import { Services } from "./ITservice.model.js";


const createServiceInDB = async (file,payload) => {
 try {
   const imageName = `${file.size}${file?.originalname}`;
   const path = file?.path;

   // Send image to Cloudinary and get the secure URL
   const { secure_url } = await sendImageToCloudinary(imageName, path);
   const serviceData = {};
   // Add the image URL to sliderData
   serviceData.image = secure_url;
   serviceData.heading = payload.heading;
   serviceData.paragraph = payload.paragraph;

   // Create slider with updated sliderData
   const result = await Services.create(serviceData);

   return result;
 } catch (err) {
   throw new Error(err);
 }
};

const getAllServicesFromDB = async () => {
  const result = await Services.find();
  return result;
};

export const ITService = {
  createServiceInDB,
  getAllServicesFromDB,
};
