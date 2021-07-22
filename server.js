const express = require("express");
const app = express();

const PORT = 3001;

//routes
app.get("/", (req, res) => {
  res.send("server is working!");
});

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
