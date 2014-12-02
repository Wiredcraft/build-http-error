# Build HTTP Error

(Node.js) Build an HTTP error with a status code and / or a message.

## How to use

See the test file for all the possible syntaxes. Here are a few quick examples:

```javascript
var httpError = require('build-http-error');
// or `carcass.httpError` if you have carcass installed.

var err = httpError(401);
// err.should.be.instanceOf(Error);
// err.should.have.property('status', 401);
// err.should.have.property('message', '401 Unauthorized');

var err = httpError(401, 'Lorem ipsum');
// err.should.be.instanceOf(Error);
// err.should.have.property('status', 401);
// err.should.have.property('message', '401 Lorem ipsum');

var err = httpError(401, new Error('Lorem ipsum'));
// err.should.be.instanceOf(Error);
// err.should.have.property('status', 401);
// err.should.have.property('message', '401 Lorem ipsum');
```
