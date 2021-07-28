const express = require("express");
const fs = require("fs");
const path = require("path");
const uuid = require("uuid/v1");
const router = express.router();
const dbPath = path.join(__dirname, "../data/db.json");

//get
router.get("/notes", (req, res) => fs.readFile(dbPath));

//post

//delete
