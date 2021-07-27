const path = require("path");
const express = require("express");
const router = express.router();

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  app.get("/notes", (req, res) =>
    res.sendFile(path.join(__dirname, "../public/notes.html"))
  );
};
