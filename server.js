const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//using static middleware so html files have access to the css and js scripts
app.use(express.static("public"));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
require("./routes/apiRoutes")(app);
//important to have path for api routes above the path for html routes
require("./routes/htmlRoutes")(app);

//listener to 'start' ther server
app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
