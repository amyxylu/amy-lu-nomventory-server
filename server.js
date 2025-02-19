import express from "express";
import cors from "cors";
import "dotenv/config";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const { PORT, CORS_ORIGIN, BASE_URL } = process.env;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "public/images")));

import ingredientsRoutes from "./routes/ingredients-routes.js";
import categoriesRoutes from "./routes/categories-routes.js";
import cuisinesRoutes from "./routes/cuisines-routes.js";
import recipesRoutes from "./routes/recipes-routes.js";
import filtersRoutes from "./routes/filters-routes.js";

app.use("/api/ingredients", ingredientsRoutes);
app.use("/api/categories", categoriesRoutes);
app.use("/api/cuisines", cuisinesRoutes);
app.use("/api/recipes", recipesRoutes);
app.use("/api/filters", filtersRoutes);

app.get("/", (req, res) => {
  res.send(`Express is running! API Base URL: ${BASE_URL}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on ${BASE_URL}`);
  console.log(`CORS_ORIGIN: ${CORS_ORIGIN}`);
});
