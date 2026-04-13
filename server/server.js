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
app.use("/api/myfxbook", require("./routes/myfxbook") );
app.use("/api/mt5", require("./routes/mt5"));


// test route
app.get("/", (req, res) => {
  res.send("Server Running");
});

mongoose.connect(process.env.MONGO_URI) 
.then(() => console.log("MongoDB Connected ✅")) 
.catch(err => console.log("Mongo Error ❌", err));

app.listen(5000, () => console.log("Server running on port 5000"));

