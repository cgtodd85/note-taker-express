const express = require("express");
const fs = require("fs");
const path = require("path");
const { v1: uuidv1 } = require("uuid");
const router = express.Router();
const dbPath = path.join(__dirname, "../data/db.json");

//get
router.get("/notes", (req, res) => {
  fs.readFile(dbPath, (err, data) => {
    if (err) {
      throw err;
    } else {
      let notes = JSON.parse(data);
      return res.json(notes);
    }
  });
});

//post
router.post("/notes", (req, res) => {
  fs.readFile(dbPath, (err, data) => {
    if (err) {
      throw err;
    } else {
      let notes = JSON.parse(data);
      let newId = uuidv1();
      let newNote = { ...req.body, id: newId };
      notes.push(newNote);
      fs.writeFile(dbPath, JSON.stringify(notes), (err) =>
        err ? console.log(err) : console.log("added new note!")
      );
      return res.json(notes);
    }
  });
});

//delete

module.exports = router;
