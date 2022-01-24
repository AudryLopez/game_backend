import express from "express";
import cors from 'cors';
import router from "./src/routes/routes";

const app = express();
const port = 3000;
//const swaggerUi = require("swagger-ui-express");
//const swaggerDocument = require("./swagger.json");

app.use(cors());
app.use(express.json());


//router.use("/api-docs", swaggerUi.serve);
//router.get("/api-docs", swaggerUi.setup(swaggerDocument));

app.use(router);
app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});