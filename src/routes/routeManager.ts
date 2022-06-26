import express from "express";
import { router as v1Router } from "./v1/routes";

const app = express();

app.use("/api/v1", v1Router);

export { app };
