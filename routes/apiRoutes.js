const express = require("express");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid/v1");
const router = express.router();
const dbPath = path.join(__dirname, "../data/db.json");

//get
router.get("/notes", (req, res) => {
  fs.readFile(dbPath, (err, data) => {
    if (err) {
      return res.json(500);
    } else {
      let notes = JSON.parse(data);
      return res.json(notes);
    }
  });
});

//post

//delete

/**
 * potential ?
 * 
 * if (err) {
    res.status(500);
    return res.json();
  } else {
    fs.readFile(dbPath, (err, data) => {
      
    });
    //

    return res.json();
  }
 * 
 * 
 * 
 * 
 * 
 */
