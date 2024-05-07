
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary.js";
import { PreviousWork } from "./previousWork.model.js";


const createPreviousWorkInDB = async (file, payload) => {
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
    const result = await PreviousWork.create(serviceData);

    return result;
  } catch (err) {
    throw new Error(err);
  }
};

const getAllPreviousWorkFromDB = async () => {
  const result = await PreviousWork.find();
  return result;
};

export const previousWorkService = {
  createPreviousWorkInDB,
  getAllPreviousWorkFromDB,
};
