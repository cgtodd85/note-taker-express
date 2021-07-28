const path = require("path");
const express = require("express");
const router = express.Router();

//using router instead of app.get, and no need to include the /api before /notes
router.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/notes.html"))
);

//create route for everything else using '*', could also use '/' route
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
