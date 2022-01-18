const listBotsPattern = new Map([
  ["Headless Chrome", /HeadlessChrome/],
  ["Wget", /[wW]get/],
  ["Python urllib", /Python\-urllib/],
  ["PHP crawl", /phpcrawl/],
  ["PhantomJS", /PhantomJS/],
]);

// analyse incoming request by ise user-agent header field
function isKnownBotUserAgent(userAgent) {
  for (const [botName, botPattern] of listBotsPattern.entries()) {
    if (userAgent.match(botPattern)) {
      return {
        isBot: true,
        nameBot: botName,
      };
    }
  }

  return {
    isBot: false,
  };
}

module.exports = function checkBot(req, res, next) {
  req.botInfo = isKnownBotUserAgent(req.header("User-Agent"));
  console.log("checkBot middleware working.");

  console.log(req.headers["user-agent"]);
  console.log(req.headers["host"]);
  console.log(req.socket.remoteAddress);
  console.log(req.ip);
  next();
};
