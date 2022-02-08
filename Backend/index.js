import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import contentRouter from "./routers/contentRouter.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/testfe", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log("Connect mongoose success");

app.use("/api/contents", contentRouter);
app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 50000;
app.listen(port, () => {
  console.log(` Server at http://localhost:${port}`);
});
