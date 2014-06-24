var codes, http, httpError, util;

http = require('http');

util = require('util');

codes = http.STATUS_CODES;


/**
 * Build an HTTP error with a status code and / or a message.
 *
 * @param  {Number}       status  a status code
 * @param  {String|Error} message a message or an error
 *
 * @return {Error} an Error instance.
 */

module.exports = httpError = function(status, message) {
  var err, _ref, _ref1;
  if (typeof status === 'number') {
    if (message == null) {
      message = (_ref = codes[status]) != null ? _ref : codes[500];
    }
  } else {
    if (message == null) {
      message = status != null ? status : codes[500];
    }
    status = 500;
  }
  err = util.isError(message) ? message : new Error(message);
  err.name = 'HttpError';
  err.message = util.format('%s %s', status, (_ref1 = err.message || codes[status]) != null ? _ref1 : codes[500]);
  err.status = err.statusCode = status;
  Error.captureStackTrace(err, httpError);
  return err;
};
