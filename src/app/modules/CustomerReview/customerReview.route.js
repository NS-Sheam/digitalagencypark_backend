import express from "express"

import { upload } from "../../utils/sendImageToCloudinary.js";
import { postMddleWare } from "../../middlware/postMiddleware.js";
import { customerReviewController } from "./customerReview.controller.js";



const router = express.Router()

router.post(
  "/create-customerReview",
  upload.single("file"),postMddleWare, customerReviewController.createCustomerReview
);

router.get('/allCustomerReviews', customerReviewController.getAllCustomerReview)

export const customerReviewRouter = router;