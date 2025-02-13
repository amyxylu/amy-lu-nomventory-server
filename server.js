import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

const { PORT, CORS_ORIGIN } = process.env;

app.use(cors({ CORS_ORIGIN }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express is running!");
});

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
  console.log(CORS_ORIGIN);
});
