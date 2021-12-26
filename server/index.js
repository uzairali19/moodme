import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import moodsRouter from "./routes/moods.js";

const app = express();

app.use("/moods", moodsRouter);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION =
  "mongodb+srv://uzairali:nAdB7wuwbqqslCFu@moodme-trail.wntop.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION)
  .then(() => {
    app.listen(PORT, () => console.log(`Connected at: ${PORT}`));
  })
  .catch((err) => console.log(err));
