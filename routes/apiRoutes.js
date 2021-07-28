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
router.delete("/notes/:id", (req, res) => {
  const noteId = req.params.id;
  fs.readFile(dbPath, (err, data) => {
    if (err) {
      throw err;
    } else {
      const notes = JSON.parse(data);
      const filteredNotes = notes.filter((note) => note.id !== noteId);
      fs.writeFile(dbPath, JSON.stringify(filteredNotes), (err) =>
        err ? console.log(err) : console.log("deleted a note!")
      );
      return res.json(notes);
    }
  });
});

///////////successfully deleted notes but for some reason I can't go add a new note after this

module.exports = router;
