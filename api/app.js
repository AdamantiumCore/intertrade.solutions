import express from "express";
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import searchRoute from "./routes/search.route.js";
import cookieParser from "cookie-parser";
import {globalErrorHandler} from "./middleware/globalErrorHandler.js";

const app = express();
const corsOptions = {
    origin: process.env.CORS_URL
  }
  
app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())

app.use("/api/v1/auth", authRoute)
app.use("/api/v1/test", testRoute)
app.use("/api/v1/user", userRoute)
app.use("/api/v1/search", searchRoute)
app.use(globalErrorHandler());
export default app;