import express from "express"
import { adminController } from "./admin.controller.js";
import { upload } from "../../utils/sendImageToCloudinary.js";
import { postMddleWare } from "../../middlware/postMiddleware.js";



const router = express.Router()

router.post(
  "/create-admin",
  upload.single("file"),postMddleWare,adminController.createAdmin
);

router.get('/allAdmin', adminController.getAllAdmins)

export const adminRouter = router;