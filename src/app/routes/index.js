import express from "express";
// import { AuthRoutes } from "../modules/Auth/auth.routes.js";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: "AuthRoutes",
  },
];

moduleRoutes.forEach((routes) => {
  router.use(routes.path, routes.route);
});

export default router;
