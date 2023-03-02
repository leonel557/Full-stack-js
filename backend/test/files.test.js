const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");

// Assertion style
chai.should();

chai.use(chaiHttp);

describe("Files API", () => {
  /**
   * Test files list - GET route
   */
  describe("Files list GET", () => {
    it("Should get a list of files", (done) => {
      chai
        .request(server)
        .get("/files/list")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object").that.include({ message: "Ok" });
        });
      done();
    });
  });

  /**
   * Test files data - GET route
   * Test files data with query param - GET route
   */
  describe("Files data GET", () => {
    it("Should get a list of files", (done) => {
      chai
        .request(server)
        .get("/files/data")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object").that.include({ message: "Ok" });

          const data = res.body.data;
          chai.expect(data).to.be.an("array").to.have.lengthOf.at.least(1);
        });
      done();
    });
    it("Should get only one file by file name", (done) => {
      chai
        .request(server)
        .get("/files/data?fileName=test1.csv")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an("object").that.include({ message: "Ok" });

          const data = res.body.data;
          chai.expect(data).to.be.an("array").to.have.lengthOf(1);

          const file = data[0];
          chai.expect(file).to.include({ file: "test1.csv" });
        });
      done();
    });
  });
});
