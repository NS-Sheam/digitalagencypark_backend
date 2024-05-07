import express from "express"

import { upload } from "../../utils/sendImageToCloudinary.js";
import { postMddleWare } from "../../middlware/postMiddleware.js";
import { UserController } from "./user.controller.js";


const router = express.Router()

router.post(
  "/create-user",upload.single("file"),postMddleWare,UserController.createUser
);

router.get('/#', UserController.getAllUser)

export const userRouter = router;