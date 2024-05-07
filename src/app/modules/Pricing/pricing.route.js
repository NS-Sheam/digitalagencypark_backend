import express from "express"
import { upload } from "../../utils/sendImageToCloudinary.js";
import { postMddleWare } from "../../middlware/postMiddleware.js";
import { pricingController } from "./Pricing.controller.js";



const router = express.Router()

router.post(
  "/create-pricing",
  upload.single("file"),postMddleWare,pricingController.createPricing
);

router.get('/#', pricingController.getAllPricing)

export const pricingRouter = router;