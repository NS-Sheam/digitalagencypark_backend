
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary.js";
import { Blog } from "./blog.model.js";

const createBlogInDB = async (file,payload) => {
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
   const result = await Blog.create(cardData);

   return result;
 } catch (err) {
   throw new Error(err);
 }
};

const getAllBlogFromDB = async () => {
  const result = await Blog.find();
  return result;
};

export const blogServices = {
  createBlogInDB,
  getAllBlogFromDB,
};
