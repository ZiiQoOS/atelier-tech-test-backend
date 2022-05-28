const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const PORT = process.env.PORT || 3000;
const PlayersRoutes = require("./src/players/routes");
const config = require('./config/config');

const app = express();

// Configure CORS
app.use(cors(config.cors));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use("/", PlayersRoutes);


app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message
  })
});

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});