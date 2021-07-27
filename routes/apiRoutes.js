const db = require("../data/db.json");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => res.json(db));
};

/*
require dependencies

define routes

module exports
*/
