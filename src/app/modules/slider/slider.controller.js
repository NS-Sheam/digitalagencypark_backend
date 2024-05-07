import { sliderService } from "./slider.service.js";

const createSlider = async (req, res) => {
  try {
    const { slider: sliderData } = req.body;
    const result = await sliderService.createSliderInDB(req.file, sliderData);
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

const getAllSlider = async (req, res) => {
  try {
    const result = await sliderService.getAllSliderFromDB();

    res.status(200).json({
      success: true,
      message: "sliders are retrieved succesfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const sliderController = {
  createSlider,
  getAllSlider,
};
