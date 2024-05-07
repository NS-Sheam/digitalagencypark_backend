import express from "express"

import { upload } from "../../utils/sendImageToCloudinary.js";
import { postMddleWare } from "../../middlware/postMiddleware.js";
import { blogsController } from "./blog.controller.js";



const router = express.Router()

router.post(
  "/create-blog",
  upload.single("file"),postMddleWare,blogsController.createBlog
);

router.get('/allBlogs', blogsController.getAllBlogs)

export const blogRouter = router;