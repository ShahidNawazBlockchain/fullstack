import dotenv from "dotenv";
import connectionDB from "./src/db/index.js";
import { app } from "./src/app.js";

dotenv.config({
  path: "./.env",
});

connectionDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`server is runing on port :${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(`db connection is fail!! :${error}`);
  });
