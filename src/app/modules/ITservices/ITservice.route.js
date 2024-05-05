import express from "express"
import { serviceController } from "./ITservice.controller.js";
import { upload } from "../../utils/sendImageToCloudinary.js";



const router = express.Router()

router.post(
  "/create-service",
  upload.single("file"),
  (req, res, next) => {
    console.log(req.body);
    req.body = JSON.parse(req.body.data);
    next();
  },
  serviceController.createService
);

router.get('/services', serviceController.getAllServices)

export const serviceRouter = router;