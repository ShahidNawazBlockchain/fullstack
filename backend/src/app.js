import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);
app.use(
  express.json({
    limit: "160kb",
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: "160kb",
  })
);
app.use(express.static("public"));

app.use(cookieParser());

import userRouter from "./routes/user.routes.js";
app.use("/api/v1/users", userRouter);

import listRoutes from "./routes/list.routes.js";
app.use("/api/v1/lists", listRoutes);

export { app };
