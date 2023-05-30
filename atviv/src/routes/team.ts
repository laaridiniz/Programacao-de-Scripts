import { Router } from "express";
import TeamController from "../controllers/TeamController";

const routes = Router();

routes.post('/', TeamController.create)
routes.get('/', TeamController.getAll);
routes.get('/:termo', TeamController.getTermo);
routes.put('/', TeamController.putTeam);
routes.delete('/', TeamController.delete);

export default routes;