import express, { Express, Request, Response } from "express";
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("API");
});

export const server: Express = app;
