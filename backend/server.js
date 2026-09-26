const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

const urlRoutes = require("./routes/urlRoutes");
const Url = require("./models/Url");

app.use("/api", urlRoutes);

app.get("/", (req, res) => {
  res.send("URL Shortener API is running");
});

const PORT = process.env.PORT || 5000;

app.get("/:shortCode", async (req, res) => {
  try {
    const { shortCode } = req.params;

    const url = await Url.findOne({ shortCode });

    if (!url) {
      return res.status(404).send("Short URL not found");
    }

    res.redirect(url.originalUrl);
  } catch (error) {
    console.error(error);

    res.status(500).send("Server error");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});