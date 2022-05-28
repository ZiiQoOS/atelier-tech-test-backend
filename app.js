const express = require("express");
const bodyParser = require("body-parser");
const PlayersRoutes = require("./src/players/routes");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');


// Set up CORS
app.use(cors({
  origin: true,
  credentials: true,
  methods: 'POST,GET,PUT,OPTIONS,DELETE'
}));

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