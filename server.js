import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

const { PORT, CORS_ORIGIN } = process.env;

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());
app.use("/images", express.static("public/images"));

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
  res.send("Express is running!");
});

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`);
  console.log(`CORS_ORIGIN: ${CORS_ORIGIN}`);
});
