const routeTests = (server, request) => {
  describe('Testing routes', function () {

    // requires main server before each test
    beforeEach(function () {
      server;
    });

    // restarts after each test
    afterEach(function () {
      server.close();
    });

    it('responds to /', function (done) {
    request(server)
      .get('/')
      .expect({hi: 'there'}, done);
    });
  });
}

module.exports = routes;