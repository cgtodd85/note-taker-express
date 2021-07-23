const path = require("path");
const db = require("./db/db.json");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => res.json(db));
