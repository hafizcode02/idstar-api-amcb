import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "IDStar API AMCB" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log("=====================================");
  console.log("Available routes:");
  app._router.stack.forEach((r: any) => {
    if (r.route && r.route.path) {
      console.log(`http://localhost:${PORT}${r.route.path}`);
    }
  });
  console.log("=====================================");
});
