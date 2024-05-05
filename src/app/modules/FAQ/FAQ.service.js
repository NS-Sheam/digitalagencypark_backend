import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary.js";
import { FAQ } from "./FAQ.model.js";

const createFAQInDB = async (FAQData) => {
    
    const result = await FAQ.create(FAQData);
    return result;
  
};

const getAllFAQFromDB = async () => {
  const result = await FAQ.find();
  return result;
};

export const FAQService = {
  createFAQInDB,
  getAllFAQFromDB,
};
