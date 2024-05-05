import express from "express"
import { stepsController } from "./steps.controller.js";
import { upload } from "../../utils/sendImageToCloudinary.js";



const router = express.Router()

router.post(
  "/create-step",
  upload.single("file"),
  (req, res, next) => {
    console.log(req.body);
    req.body = JSON.parse(req.body.data);
    next();
  },
  stepsController.createStep
);

router.get('/steps', stepsController.getAllSteps)

export const stepsRouter = router;