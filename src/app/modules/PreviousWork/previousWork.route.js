import express from "express"
import { upload } from "../../utils/sendImageToCloudinary.js";
import { postMddleWare } from "../../middlware/postMiddleware.js";
import { previousWorkController } from "./previousWork.controller.js";



const router = express.Router()

router.post(
  "/create-previousWork",
  upload.single("file"),
  postMddleWare,
  previousWorkController.createPreviousWork
);

router.get( "/allPreviousWork",previousWorkController.getAllPreviousWork
);

export const previousWorkRouter = router;