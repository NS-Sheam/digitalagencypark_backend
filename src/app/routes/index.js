import { Router } from "express";
import { sliderRouter } from "../modules/slider/slider.route.js";
import { cardRouter } from "../modules/cards/card.route.js";
import { stepsRouter } from "../modules/steps/steps.route.js";
import { serviceRouter } from "../modules/ITservices/ITservice.route.js";


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
  {
    path: "/step",
    route: stepsRouter,
  },
  {
    path: "/service",
    route: serviceRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
