import "./config/env.js"
import express from "express";
import cors from "cors";
import {Message} from "./model.js";
import { dbConnect } from "./db.js";

dbConnect();

const PORT=process.env.PORT;



const app = express();

app.use(
  cors({
    origin: "*",
  }),
);

app.use(express.json());
app.use(express.urlencoded());

app.post("/", async(req, res) => {
  const { id1,id2 } = req.body;
  console.log(id1, id2);

  const message =await Message.create({
    id1,
    id2,

  })

  res.status(201).json({ message: "succeful" });
});



app.listen(PORT, () => {
  console.log("server started..........");
});
