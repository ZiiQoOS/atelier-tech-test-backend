const _ = require('lodash');
const playersMockData = require('../mockdata/players.json');
const Player = require('../models/Player');
const {
  calculateWinRatioByCountry,
  calculateBMIByPlayer,
  calculateHeightMedian
} = require('../helpers/stats-helpers');

class StatsService {

  static getStats() {
    const players = playersMockData.players;
    return {
      topRatioCountry: this.gettopRatioCountry(players),
      meanPlayersBMI: this.meanPlayersBMI(players),
      medianHeightPlayers: this.medianHeightPlayers(players)
    }
  }

  static gettopRatioCountry(players) {
    const topRatioCountry = players
      .map(player => { // get the number of 1 and 0 (win and loss) for each country
        return {
          code: player.country.code,
          flag: player.country.picture,
          ratio: _.countBy(player.data.last)
        };
      })
      .map(country => { // flat the array to get the ratio by country
        return {
          code: country.code,
          flag: country.flag,
          ratio: calculateWinRatioByCountry(country)
        }
      })
      .reduce((accumulator, current) => { // accumulate the ratios for players with the same country
        const code = current.code;
        const found = accumulator.find((elem) => elem.country == code);
        if (found) found.ratio += current.ratio;
        else accumulator.push(current);
        return accumulator;
      }, [])
      .sort((a, b) => b.ratio - a.ratio)[0];
    return topRatioCountry;
  }

  static meanPlayersBMI(players) {
    const sumOfBMIs = players
      .map(player => calculateBMIByPlayer(new Player(player).height, new Player(player).weight))
      .reduce((a, b) => a + b, 0)
    return sumOfBMIs / players.length;
  }

  static medianHeightPlayers(players) {
    const playersHeight = players.map(player => player.data.height);
    return calculateHeightMedian(playersHeight);
  }
}

module.exports = StatsService;