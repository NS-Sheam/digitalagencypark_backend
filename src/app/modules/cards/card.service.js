
import { Card } from "./card.model.js";

const createCardInDB = async (payload) => {
  //   console.log(payload, {file});
  const result = await Card.create(payload);
  console.log(result);
  // const imageName = `${payload?.name}`;
  // const path = file?.path;
  //send image to cloudinary
  // const { secure_url } = await sendImageToCloudinary(imageName, path);
  // payload.profileImg = secure_url;
  imageUploadTest();
  return result;
};

const getAllCardFromDB = async () => {
  const result = await Card.find();
  return result;
};

export const cardService = {
  createCardInDB,
  getAllCardFromDB,
};
