import express from "express";
import dotenv from "dotenv";

import authRoute from "./routes/auth.route";
import techModuleRoute from "./routes/tech-module.route";
import { errorMiddleware } from "./middlewares/error.middleware";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "IDStar API AMCB" });
});

app.use("/auth", authRoute);
app.use("/tech-modules", techModuleRoute);

app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
