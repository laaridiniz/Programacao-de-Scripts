import { Router, Request, Response } from "express";
import user from "./user";
import { UserController } from "../controllers";
import { authorization } from "../middlewares";
import spent from "./spent";

const routes = Router()

routes.post("/login", UserController.login);
routes.use("/user", user);
routes.use("/spent", authorization, spent);

routes.use((req: Request, res: Response) => res.json({ error: "Requisição desconhecida" }));

export default routes;
