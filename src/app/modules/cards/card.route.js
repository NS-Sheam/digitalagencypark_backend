import express from "express"
import { cardController } from "./card.controller.js";
import { upload } from "../../utils/sendImageToCloudinary.js";



const router = express.Router()

router.post(
  "/create-card", upload.single("file"),
(req, res, next) => {
    console.log( "11",req.body);
    req.body = JSON.parse(req.body.data);
    next();
  },
  cardController.createCard
);

router.get('/cards', cardController.getAllCards)

export const cardRouter = router;