const express = require("express");
const router = express.Router();
const PlayersControllers = require("../controllers/PlayersController");

router.get("/", PlayersControllers.getPlayers);
router.get("/:id", PlayersControllers.getPlayerById);

// router.get("/statistics", PlayersControllers.fetchStatistics);


module.exports = router;