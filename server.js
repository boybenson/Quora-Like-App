import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from "./routers/authRouter.js";
import errorHandler from "./middlewares/errorHandler.js";
import storyRouter from "./routers/storyRouter.js";

const port = process.env.PORT || 8080;

const app = express();

//database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database connected");
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//middlewares
app.use(cors());
app.use(express.json());

// route middlewares
app.use("/api/auth", authRouter);
app.use("/api/stories", storyRouter);

// error handler
app.use(errorHandler);
