import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary.js";
import { Customer } from "./customer.model.js";

const createCustomerInDB = async (file, payload) => {
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
    const result = await Customer.create(stepData);

    return result;
  } catch (err) {
    throw new Error(err);
  }
};

const getAllCustomerFromDB = async () => {
  const result = await Customer.find();
  return result;
};

export const customerServices = {
  createCustomerInDB,
  getAllCustomerFromDB,
};
