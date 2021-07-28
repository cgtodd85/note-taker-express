const express = require("express");
const fs = require("fs");
const path = require("path");
const { v1: uuidv1 } = require("uuid");
const router = express.Router();

//path.join or require? require caches the result so path,join is better?
//path.join assures separators are in the correct places
//or just use file path alone as variable?
// using this alone did not work: const dbFile = "../data/db.json";

const dbFile = path.join(__dirname, "../data/db.json");

//get
router.get("/notes", (req, res) => {
  fs.readFile(dbFile, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let notes = JSON.parse(data);
      res.json(notes);
    }
  });
});

//post
router.post("/notes", (req, res) => {
  fs.readFile(dbFile, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const notes = JSON.parse(data);
      const newId = uuidv1();
      const newNote = { ...req.body, id: newId };
      notes.push(newNote);
      fs.writeFile(dbFile, JSON.stringify(notes, null, 2), (err) =>
        err ? console.log(err) : console.log("added new note!")
      );
      res.json(notes);
    }
  });
});

//delete
router.delete("/notes/:id", (req, res) => {
  const noteId = req.params.id;
  fs.readFile(dbFile, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const notes = JSON.parse(data);
      const filteredNotes = notes.filter((note) => note.id !== noteId);
      fs.writeFile(dbFile, JSON.stringify(filteredNotes, null, 2), (err) =>
        err ? console.log(err) : console.log("deleted a note!")
      );
      res.json();
    }
  });
});

module.exports = router;
