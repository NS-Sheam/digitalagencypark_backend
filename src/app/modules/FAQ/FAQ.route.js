import express from "express";
import { FAQController } from "./FAQ.controller.js";

const router = express.Router();

router.post("/create-faq", FAQController.createFAQ);

router.get("/allFAQ", FAQController.getAllFAQ);

export const FAQRouter = router;
