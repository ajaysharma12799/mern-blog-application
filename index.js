const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db.config");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 4321;

if (process.env.NODE_ENV === "development") {
  require("dotenv").config();
}

connectDB();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: "true" }));

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/post", require("./routes/post.routes"));

app.listen(PORT, (error) => {
  if (error) {
    console.log(error?.message);
  }
  console.log(`Server Running on Port ${PORT}`);
});
