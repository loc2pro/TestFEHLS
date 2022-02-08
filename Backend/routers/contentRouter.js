import express from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Content from "../models/contentModel.js";

const contentRouter = express.Router();

contentRouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {
    const contents = await Content.find({});
    res.send(contents);
  })
);

contentRouter.get(
  "/send",
  expressAsyncHandler(async (req, res) => {
    // await content.remove({});
    const createdcontents = await Content.insertMany(data.contents);
    res.send({ createdcontents });
  })
);
contentRouter.get(
  "/:id",
  expressAsyncHandler(async (req, res) => {
    const content = await Content.findById(req.params.id);
    if (content) {
      res.send(content);
    } else {
      res.status(400).send({ message: "Content not found" });
    }
  })
);
export default contentRouter;