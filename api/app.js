import express from "express";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/auth", authRoute)
app.use("/api/v1/test", testRoute)

app.listen(8800, () => {
    console.log("Server is running!");
});