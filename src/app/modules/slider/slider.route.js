import express from "express"
import { sliderController } from "./slider.controller.js";
import { upload } from "../../utils/sendImageToCloudinary.js";


const router = express.Router()

router.post(
  "/create-slider",
  upload.single("file"),(req, res, next) => {
    console.log(req.body);
    req.body = JSON.parse(req.body.data);
    next();
  },
  sliderController.createSlider
);

router.get('/sliders', sliderController.getAllSlider)

export const sliderRouter = router;