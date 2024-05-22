import express from "express";
import authRoute from "./routes/auth.route.js";
const app = express();

app.use("/api/auths", authRoute)

app.listen(8800, () => {
    console.log("Server is running!");
});