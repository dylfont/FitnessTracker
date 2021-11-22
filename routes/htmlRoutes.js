const htmlRoutes = require("express").Router();
const path = require("path");

// GET Routes, stats and exercise changes 

htmlRoutes.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

htmlRoutes.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

module.exports = htmlRoutes;