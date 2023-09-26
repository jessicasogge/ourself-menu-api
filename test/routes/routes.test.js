const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const server = require('../../app.js');

describe('routing tests for menu route', () => {
    it('should sucessfully call /menu route ', (done) => {
        chai.request(server)
            .get(`/menu`)
            .end( (err, res) => {
                expect(res.status).to.eql(200);
                done();
            });
    });

    it('should sucessfully call /health-check route ', (done) => {
        chai.request(server)
            .get(`/health-check`)
            .end( (err, res) => {
                expect(res.status).to.eql(200);
                done();
            });
    });

    it('should 404 if route does not exist', (done) => {
        chai.request(server)
            .get(`/dfdfsdf`)
            .end( (err, res) => {
                expect(res.status).to.eql(404);
                done();
            });
    });
});
