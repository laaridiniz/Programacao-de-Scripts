import { Router } from "express";
import { SpentController } from "../controllers";

const routes = Router();

routes.post("/", SpentController.create);

export default routes;