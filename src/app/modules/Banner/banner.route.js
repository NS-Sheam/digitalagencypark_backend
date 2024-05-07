import express from "express";

import { upload } from "../../utils/sendImageToCloudinary.js";
import { postMddleWare } from "../../middlware/postMiddleware.js";
import { bannerController } from "./banner.controller.js";

const router = express.Router();

router.post(
  "/create-banner",
  upload.fields([
    { name: "mainImage", maxCount: 1 },
    { name: "designImages", maxCount: 8 },
  ]),
  postMddleWare,
  bannerController.createBanner
);

router.patch("/update-status/:id", bannerController.updateBannerStatus);

router.delete("/delete-banner/:id", bannerController.deleteBanner);

router.get("/", bannerController.getAllBanners);


export const bannerRouter = router;
