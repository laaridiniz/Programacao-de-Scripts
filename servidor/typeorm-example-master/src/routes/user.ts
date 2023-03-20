import { Router } from "express";
import { UserController } from "../controllers";
import { User } from "../entities/User";

const routes = Router();

routes.post("/", UserController.create);
routes.put("/", UserController.update);

export default routes;