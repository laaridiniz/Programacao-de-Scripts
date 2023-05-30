import { Router } from "express";
import MatchController from "../controllers/MatchController";

const routes = Router();

routes.get('/', MatchController.list);
routes.get('/:id', MatchController.listById);
routes.post('/', MatchController.postMatch);
routes.put('/', MatchController.putMatch);
routes.delete('/', MatchController.delete);

export default routes;