var httpError = require('../');

describe('HTTP Error:', function() {

    it('should be a function', function() {
        httpError.should.be.type('function');
    });

    it('should work without arguments', function() {
        var err = httpError();
        err.should.be.instanceOf(Error);
        err.should.have.property('status', 500);
        err.should.have.property('message', '500 Internal Server Error');
    });

    it('should work with status 500', function() {
        var err = httpError(500);
        err.should.be.instanceOf(Error);
        err.should.have.property('status', 500);
        err.should.have.property('message', '500 Internal Server Error');
    });

    it('should work with status 401', function() {
        var err = httpError(401);
        err.should.be.instanceOf(Error);
        err.should.have.property('status', 401);
        err.should.have.property('message', '401 Unauthorized');
    });

    it('should work with status 999', function() {
        var err = httpError(999);
        err.should.be.instanceOf(Error);
        err.should.have.property('status', 999);
        err.should.have.property('message', '999 Internal Server Error');
    });

    it('should work with only a message', function() {
        var err = httpError('Lorem ipsum');
        err.should.be.instanceOf(Error);
        err.should.have.property('status', 500);
        err.should.have.property('message', '500 Lorem ipsum');
    });

    it('should work with 500 and a message', function() {
        var err = httpError(500, 'Lorem ipsum');
        err.should.be.instanceOf(Error);
        err.should.have.property('status', 500);
        err.should.have.property('message', '500 Lorem ipsum');
    });

    it('should work with 401 and a message', function() {
        var err = httpError(401, 'Lorem ipsum');
        err.should.be.instanceOf(Error);
        err.should.have.property('status', 401);
        err.should.have.property('message', '401 Lorem ipsum');
    });

    it('should work with 999 and a message', function() {
        var err = httpError(999, 'Lorem ipsum');
        err.should.be.instanceOf(Error);
        err.should.have.property('status', 999);
        err.should.have.property('message', '999 Lorem ipsum');
    });

    it('should work with an error', function() {
        var err = httpError(new Error());
        err.should.be.instanceOf(Error);
        err.should.have.property('status', 500);
        err.should.have.property('message', '500 Internal Server Error');
    });

    it('should work with an error that has a message', function() {
        var err = httpError(new Error('Lorem ipsum'));
        err.should.be.instanceOf(Error);
        err.should.have.property('status', 500);
        err.should.have.property('message', '500 Lorem ipsum');
    });

    it('should work with 500 and an error', function() {
        var err = httpError(500, new Error());
        err.should.be.instanceOf(Error);
        err.should.have.property('status', 500);
        err.should.have.property('message', '500 Internal Server Error');
    });

    it('should work with 500 and an error that has a message', function() {
        var err = httpError(500, new Error('Lorem ipsum'));
        err.should.be.instanceOf(Error);
        err.should.have.property('status', 500);
        err.should.have.property('message', '500 Lorem ipsum');
    });

    it('should work with 401 and an error', function() {
        var err = httpError(401, new Error());
        err.should.be.instanceOf(Error);
        err.should.have.property('status', 401);
        err.should.have.property('message', '401 Unauthorized');
    });

    it('should work with 401 and an error that has a message', function() {
        var err = httpError(401, new Error('Lorem ipsum'));
        err.should.be.instanceOf(Error);
        err.should.have.property('status', 401);
        err.should.have.property('message', '401 Lorem ipsum');
    });

    it('should work with 999 and an error', function() {
        var err = httpError(999, new Error());
        err.should.be.instanceOf(Error);
        err.should.have.property('status', 999);
        err.should.have.property('message', '999 Internal Server Error');
    });

    it('should work with 999 and an error that has a message', function() {
        var err = httpError(999, new Error('Lorem ipsum'));
        err.should.be.instanceOf(Error);
        err.should.have.property('status', 999);
        err.should.have.property('message', '999 Lorem ipsum');
    });
});
