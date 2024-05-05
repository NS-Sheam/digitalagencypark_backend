import express from "express"
import { upload } from "../../utils/sendImageToCloudinary.js";
import { FAQController } from "./FAQ.controller.js";



const router = express.Router()

router.post( "/create-FAQ", FAQController.createFAQ);

router.get("/allFAQ", FAQController.getAllFAQ);

export const FAQRouter = router;