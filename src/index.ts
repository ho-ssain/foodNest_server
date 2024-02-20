import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/user.route";

//===========⬇️ creating express server
const app = express();

//===========⬇️
app.use(express.json());
app.use(cors());

//===========⬇️ Connecting to the Database
mongoose
  .connect(process.env.DB_CONNECTION_STRING as string, {
    autoIndex: true,
    dbName: "foodNest",
  })
  .then((c) => console.log(`Connected to ${c.connection.name} Database`))
  .catch((err) => console.log(err));

//===========⬇️ API end-points

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "Health OK!" });
});

app.use("/api/my/user", myUserRoute);

//........................................................
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// 🖥️💻
//===========⬇️ starting the server (listening to the port)
app.listen(process.env.PORT || 4000, () => {
  console.log(`Listening the Server on Port: ${process.env.PORT}`);
});
