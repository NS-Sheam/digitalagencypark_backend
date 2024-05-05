import express from "express"
import { stepsController } from "./steps.controller.js";
import { upload } from "../../utils/sendImageToCloudinary.js";
import { postMddleWare } from "../../middlware/postMiddleware.js";



const router = express.Router()

router.post(
  "/create-step",
  upload.single("file"),postMddleWare,stepsController.createStep
);

router.get('/steps', stepsController.getAllSteps)

export const stepsRouter = router;