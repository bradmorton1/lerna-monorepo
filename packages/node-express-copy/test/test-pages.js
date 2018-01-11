const app = require('../app.js');

let chai = require('chai')
    , chaihttp = require('chai-http')
    , should = chai.should();

var expect = chai.expect;
chai.use(chaihttp);

var assert = 
chai.assert;

describe('self passing test', function () {
    it('should pass', function(done) {
        assert.equal('bar', 'bar');
        done();
    });
});

describe('Should be able to load and read app', () => {
    it('it should successfully ping app', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
            done();
            });
    });
});

after('my after hook', function () {
    require('../app').handler();
});


/*describe('Browser and Node.js', function ()  {

    it('should be status 200', function (done) {
        chai.request(url)
        .get('/html')
        .end((err, res), function () {
          res.status.should.equal(200);
          done(err);
        });
      
    });
});

it('Should be able to read main page content', function(done) {
    request('http://localhost:3000', function(error, response, body) {
        expect(body).to.equal('Hello World!');
        done();
    })
}) */

