import { userServices } from "./user.service.js";

const createUser = async (req, res) => {
  try {
    const { slider: sliderData } = req.body;
    const result = await userServices.getAllUserFromDB(req.file, sliderData);
    res.status(200).json({
      success: true,
      message: "Slider is created succesfully",
      data: result,
    });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

const getAllUser = async (req, res) => {
  try {
    const result = await userServices.getAllUserFromDB();

    res.status(200).json({
      success: true,
      message: "sliders are retrieved succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const UserController = {
  createUser,
  getAllUser,
};
