import express from "express";
import cors from "cors";
import { connectDB } from "./services/db.js";

const app = express();
const PORT = 3000;
const corsOption = cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
});

app.use(express.json());
app.use(corsOption);


connectDB();
app.get("/", (req, res) => {
  res.send("✅Server is running");
});

app.listen(PORT, (req, res) => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
