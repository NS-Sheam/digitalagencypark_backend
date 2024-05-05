import express from "express"
import { sliderController } from "./slider.controller.js";
import { upload } from "../../utils/sendImageToCloudinary.js";
import { postMddleWare } from "../../middlware/postMiddleware.js";


const router = express.Router()

router.post(
  "/create-slider",upload.single("file"),postMddleWare,sliderController.createSlider
);

router.get('/sliders', sliderController.getAllSlider)

export const sliderRouter = router;