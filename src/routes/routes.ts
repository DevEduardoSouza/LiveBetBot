import { Request, Response, Router } from "express";
import {startScraping} from "../controllers/startScraping"

const routes = Router();

routes.get("/api/odds", (req: Request, res: Response) => startScraping(req, res));

export default routes;
