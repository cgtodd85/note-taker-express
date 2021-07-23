const express = require("express");
const app = express();
const db = require("./db/db.json");
const PORT = 3001;

//routes
app.get("/", (req, res) => {
  res.send("server is working!");
});

app.get("/notes", (req, res) => res.json(db));

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
