import express, { Router } from "express";
import commentRoute from "./comment.route";
import themeRoute from "./theme.route";

const router: Router = express.Router();

const defaultRoutes : Array<{ path: string, route: any }>  = [
  {
    path: "/comment",
    route: commentRoute,
  },
  {
    path: "/theme",
    route: themeRoute
  }
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});


export default router