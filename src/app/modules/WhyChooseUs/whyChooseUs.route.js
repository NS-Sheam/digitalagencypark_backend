import express from "express";
import { upload } from "../../utils/sendImageToCloudinary.js";
import { postMddleWare } from "../../middlware/postMiddleware.js";
import { whyChooseUsController } from "./whyChooseUs.controller.js";

const router = express.Router();

router.post(
  "/create-whyChooseUs",
  upload.single("file"),
  postMddleWare,
  whyChooseUsController.createWhyChooseUs
);

router.get("/#", whyChooseUsController.getAllWhyChooseUs);

export const whyChooseUsRouter = router;
