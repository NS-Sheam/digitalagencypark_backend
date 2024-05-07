
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary.js";
import { whyChooseUs } from "./whyChooseUs.model.js";


const createWhyChooseUsInDB = async (file,payload) => {
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
   const result = await whyChooseUs.create(serviceData);

   return result;
 } catch (err) {
   throw new Error(err);
 }
};

const getAllWhyChooseUsFromDB = async () => {
  const result = await whyChooseUs.find();
  return result;
};

export const whyChooseUsServices = {
  createWhyChooseUsInDB,
  getAllWhyChooseUsFromDB,
};
