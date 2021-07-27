const path = require("path");
const express = require("express");
const router = express.router();

//using router instead of app.get
router.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/notes.html"))
);

//create route for everything else using '*', could also use '/' route
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
