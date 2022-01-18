//const checkBot = require("../middleware/checkBot");
const supertest = require("supertest");
const assert = require("assert");
const app = require("../app");

//app.use(checkBot);
describe("GET /", function () {
  it("it should has status code 200", function (done) {
    supertest(app)
      .get("/")
      .expect(200)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
});
