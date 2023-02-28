require("dotenv").config();
const app = require("express")();
const bodyParser = require('body-parser')

// Parse body
app.use(bodyParser.json())

// Require all routes
app.use(require('./routes/files'));

// Run server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`[SERVER] - Initialized on port ${port}`);
});
