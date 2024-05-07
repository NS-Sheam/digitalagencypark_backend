import express from "express";
import { sliderRouter } from "../modules/slider/slider.route.js";
import { cardRouter } from "../modules/cards/card.route.js";
import { stepsRouter } from "../modules/steps/steps.route.js";
import { serviceRouter } from "../modules/ITservices/ITservice.route.js";
import { AuthRoutes } from "../modules/Auth/auth.routes.js";
import { UserRoutes } from "../modules/User/user.routes.js";

const router = express.Router();

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
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/user",
    route: UserRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
