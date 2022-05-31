const PlayersService = require("../services/PlayersService");

exports.getPlayers = (req, res, next) => {
    const players = PlayersService.getPlayers().sort((a, b) => b.points - a.points);
    players.length > 0 ? res.status(200).json(players) : res.status(204);
};

exports.getPlayerById = (req, res, next) => {
    const id = req.params.id;
    const player = PlayersService.getPlayerById(id);

    player ?
        res.status(200).json(player) :
        res.status(404).json({
            message: 'Player not found, please select a valid id.'
        })
};