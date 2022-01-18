module.exports = function checkBot(req, res, next) {
  console.log("checkBot middleware working.");
  next();
};
