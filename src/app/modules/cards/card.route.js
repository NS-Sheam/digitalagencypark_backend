import express from "express"
import { cardController } from "./card.controller.js";
import { upload } from "../../utils/sendImageToCloudinary.js";
import { postMddleWare } from "../../middlware/postMiddleware.js";



const router = express.Router()

router.post(
  "/create-card",
  upload.single("file"),postMddleWare,cardController.createCard
);

router.get('/cards', cardController.getAllCards)

export const cardRouter = router;