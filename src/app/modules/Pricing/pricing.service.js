
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary.js";
import { Pricing } from "./pricing.model.js";


const createPricingInDB = async (file,payload) => {
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
   const result = await Pricing.create(serviceData);

   return result;
 } catch (err) {
   throw new Error(err);
 }
};

const getAllPricingFromDB = async () => {
  const result = await Pricing.find();
  return result;
};

export const PricingServices = {
  createPricingInDB,
  getAllPricingFromDB,
};
