require("dotenv").config();
const app = require("express")();
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`[SERVER] - Initialized on port ${port}`);
});
