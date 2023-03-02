const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');

// Assertion style
chai.should();

chai.use(chaiHttp);

describe('Files API', () => {
  /**
   * Test files list - GET route
   */
  describe('Files list GET', () => {
    it('Should get a list of files', (done) => {
      chai.request(server)
        .get('/files/list')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('object').that.include({ message: 'Ok' });
        })
        done();
    })
  })

  /**
   * Test files data - GET route
   */

  /**
   * Test files data with query params - GET route
   */
})