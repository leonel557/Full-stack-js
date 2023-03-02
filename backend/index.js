require("dotenv").config();
const app = require("express")();
const cors = require('cors');
const bodyParser = require("body-parser");

// Parse body
app.use(bodyParser.json());

app.use((req, res, next) => {
  next();
}, cors({ maxAge: 84600, origin: process.env.NODE_ENV === "development" ? "*" : process.env.URL_APP }));

// Require all routes
app.use(require("./routes/files"));

// Run server
const port = process.env.PORT || 4000;

module.exports = app.listen(port, () => {
  console.log(`[SERVER] - Initialized on port ${port}`);
});
