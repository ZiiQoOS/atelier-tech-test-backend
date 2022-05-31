const playersMockData = require('../mockdata/players.json');
const Player = require('../models/Player');

class PlayersService {
  static getPlayers() {
    const players = playersMockData.players?.map((player) => {
      return new Player(player);
    });
    return players
  }

  static getPlayerById(id) {
    const player = playersMockData.players?.find((player) => player.id == id);
    return player ? new Player(player) : null;
  }
}

module.exports = PlayersService;
