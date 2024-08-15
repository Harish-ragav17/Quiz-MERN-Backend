const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser= require("cookie-parser")
dotenv.config();
const userRoutes = require("./routes/users");
const quizRoutes = require("./routes/quiz");
const url2 = "http://localhost:3000";

const app = express();
app.use(cors({ credentials: true, origin: url2 }));
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@sampledata.jus9cnn.mongodb.net/Quizapp?retryWrites=true&w=majority&appName=Sampledata`
  )
  .then(() => {
    console.log("Database Connected");
  });


app.use("/user", userRoutes);
app.use("/quiz", quizRoutes);

app.listen(8001, () => {
  console.log("server started");
});
