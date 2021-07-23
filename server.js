const express = require("express");
const app = express();
const path = require("path");
const db = require("./db/db.json");
const PORT = 3001;

//routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => res.json(db));

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
