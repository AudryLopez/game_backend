import express from "express";
import cors from 'cors';
import router from "./src/routes/routes";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use(router);
app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});