const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
// middleware
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));



// test route
app.get("/", (req, res) => {
  res.send("Server Running");
});

// connect DB
mongoose.connect(process.env.MONGO_URI) 
.then(() => console.log("MongoDB Connected ✅")) 
.catch(err => console.log("Mongo Error ❌", err));

// start server
app.listen(5000, () => console.log("Server running on port 5000"));

