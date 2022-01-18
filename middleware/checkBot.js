module.exports = function checkBot(req, res, next) {
  console.log("checkBot middleware working.");

  console.log(req.headers["user-agent"]);
  console.log(req.headers["host"]);
  console.log(req.socket.remoteAddress);
  console.log(req.ip);
  next();
};
