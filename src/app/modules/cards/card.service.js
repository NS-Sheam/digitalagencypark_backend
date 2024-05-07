
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary.js";
import { Card } from "./card.model.js";

const createCardInDB = async (file,payload) => {
 try {
   const imageName = `${file.size}${file?.originalname}`;
   const path = file?.path;

   // Send image to Cloudinary and get the secure URL
   const { secure_url } = await sendImageToCloudinary(imageName, path);
   const cardData = {};
   // Add the image URL to sliderData
   cardData.image = secure_url;
   cardData.heading = payload.heading;
   cardData.paragraph = payload.paragraph;

   // Create slider with updated sliderData
   const result = await Card.create(cardData);

   return result;
 } catch (err) {
   throw new Error(err);
 }
};

const getAllCardFromDB = async () => {
  const result = await Card.find();
  return result;
};

export const cardService = {
  createCardInDB,
  getAllCardFromDB,
};
