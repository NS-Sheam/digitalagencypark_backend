import { Router } from "express";
import { adminRouter } from "../modules/Admin/admin.route.js";
import { userRouter } from "../modules/User/user.route.js";
import { customerRouter } from "../modules/Customer/customer.route.js";
import { customerReviewRouter } from "../modules/CustomerReview/customerReview.route.js";
import { serviceRouter } from "../modules/Service/service.route.js";
import { pricingRouter } from "../modules/Pricing/pricing.route.js";
import { whyChooseUsRouter } from "../modules/WhyChooseUs/whyChooseUs.route.js";
import { FAQRouter } from "../modules/FAQ/FAQ.route.js";
import { previousWorkRouter } from "../modules/PreviousWork/previousWork.route.js";
import { bannerRouter } from "../modules/Banner/banner.route.js";



const router = Router();

const moduleRoutes = [
  {
    path: "/admin",
    route: adminRouter,
  },
  {
    path: "/user",
    route: userRouter,
  },
  {
    path: "/customer",
    route: customerRouter,
  },
  {
    path: "/customerReview",
    route: customerReviewRouter,
  },
  {
    path: "/service",
    route: serviceRouter,
  },
  {
    path: "/pricing",
    route: pricingRouter,
  },
  {
    path: "/whyChooseUs",
    route: whyChooseUsRouter,
  },
  {
    path: "/FAQ",
    route: FAQRouter,
  },
  {
    path: "/previousWork",
    route: previousWorkRouter,
  },
  {
    path: "/banner",
    route: bannerRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
