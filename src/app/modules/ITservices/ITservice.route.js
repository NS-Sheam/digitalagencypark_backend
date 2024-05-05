import express from "express"
import { serviceController } from "./ITservice.controller.js";
import { upload } from "../../utils/sendImageToCloudinary.js";
import { postMddleWare } from "../../middlware/postMiddleware.js";



const router = express.Router()

router.post(
  "/create-service",
  upload.single("file"),postMddleWare,serviceController.createService
);

router.get('/services', serviceController.getAllServices)

export const serviceRouter = router;