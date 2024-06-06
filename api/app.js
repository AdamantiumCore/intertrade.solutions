import express from "express";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import {globalErrorHandler} from "./middleware/globalErrorHandler.js";

const app = express();

app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/auth", authRoute)
app.use("/api/v1/test", testRoute)
app.use("/api/v1/user", userRoute)
app.use(globalErrorHandler());

export default app;