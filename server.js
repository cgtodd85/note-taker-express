const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

//enables app to receive and use urlencoded and json data payloads
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//using static middleware so html files have access to the css and js scripts
app.use(express.static("public"));
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
//important to have path for api routes above the path for html routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//listener to 'start' ther server
app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
