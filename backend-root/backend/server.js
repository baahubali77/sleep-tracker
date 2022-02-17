const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/goals", require("./routes/SignUpRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`Server started at port ${port}`));
