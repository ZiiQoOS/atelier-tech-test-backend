
const StatsService = require("../services/StatsService");

exports.getStats = (req, res, next) => {
  const stats = StatsService.getStats();
  res.status(200).json(stats);
};