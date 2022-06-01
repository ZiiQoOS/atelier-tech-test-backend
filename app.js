const bodyParser = require("body-parser");
const cors = require('cors');
const express = require("express");

// swagger imports
const swaggerJsDoc = require('swagger-jsdoc');
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

// Swagger config
const options = {
  definition,
  apis: ["src/players/routes/*.js"]
}
const swaggerDocs = swaggerJsDoc(options);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


// Endpoints
// Home endpoint
app.get("/", async (req, res, next) => {
  res.status(200).json({
    message: 'Hello there, this the player manager api!'
  });
});
// Players endpoints
app.use("/", PlayersRoutes);


app.listen(PORT, (req) => {
  console.log(`server is listening on http://localhost:${PORT}`);
});

// Catching uncaught errors
process.on('uncaughtException', err => {
  console.error('an uncaught exception', err)
});

process.on('unhandledRejection', err => {
  console.error('an unhandled rejection', err)
});