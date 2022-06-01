const bodyParser = require("body-parser");
const cors = require('cors');
const express = require("express");

const swaggerJdDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./src/swagger.json');


const config = require('./config/config');
const PlayersRoutes = require("./src/players/routes");

const PORT = process.env.PORT || 3000;

const app = express();
// Configure CORS
app.use(cors(config.cors));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
const definition = swaggerDocument.swaggerDefinition;

console.log("swaggerDefinition",definition.host);

const options = {
  definition,     
  apis:["src/players/routes/*.js"]
}
const swaggerDocs = swaggerJdDoc(options);

app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.use("/", PlayersRoutes);
// Home endpoint
app.get("/", (req, res, next) => {
  res.status(200).json({
    message: 'Hello there!'
  });
});



app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message
  })
});

app.listen(PORT, (req) => {
  console.log(`server is listening on http://localhost:${PORT}`);
});