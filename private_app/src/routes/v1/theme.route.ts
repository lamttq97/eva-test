
import express, { Router } from "express";
import controller from "../../controllers";

const router : Router = express.Router();


router.route('/').post(controller.theme.addTheme)


export default router