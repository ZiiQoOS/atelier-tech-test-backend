const express = require("express");
const router = express.Router();
const PlayersControllers = require("../controllers/PlayersController");
const StatsController = require("../controllers/StatsController");

/* Players routes */
router.get("/players", PlayersControllers.getPlayers);
router.get("/players/:id", PlayersControllers.getPlayerById);

/* Statistics routes */
router.get("/stats", StatsController.getStats);




module.exports = router;