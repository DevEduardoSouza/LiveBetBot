import { Router } from "express";

const routes = Router();

routes.get("/api/odds", (req, res) => {
  res.json({ message: "Hello World" });
});

export default routes;
