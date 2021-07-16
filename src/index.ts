import express from "express";

const app = express();
const port = 3138;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("<h1>Water Gun</h1>");
});

app.listen(port, () => {
  console.log(`Cache Manager Running on http://localhost:${port}`);
});
