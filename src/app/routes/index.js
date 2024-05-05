import { Router } from "express";
import { sliderRouter } from "../modules/slider/slider.route.js";
import { cardRouter } from "../modules/cards/card.route.js";


const router = Router();

const moduleRoutes = [
  {
    path: "/slider",
    route: sliderRouter,
  },
  {
    path: "/card",
    route: cardRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
