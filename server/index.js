import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnect } from "./config/dbConnect.js";
import userRoutes from "./routes/UserRoutes.js";

dotenv.config();
dbConnect();
const PORT = process.env.PORT ;

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api", userRoutes);

app.get("/", (req, res) =>{
     res.send("Hello world")
    });


app.listen(PORT, () => console.log(`Server running on ${PORT}`));
