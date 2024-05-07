import express from "express"
import { upload } from "../../utils/sendImageToCloudinary.js";
import { postMddleWare } from "../../middlware/postMiddleware.js";
import { customerController } from "./customer.controller.js";



const router = express.Router()

router.post(
  "/create-customer",
  upload.single("file"),postMddleWare,customerController.createCustomer
);

router.get('/allCustomers', customerController.getAllCustomers)

export const customerRouter = router;