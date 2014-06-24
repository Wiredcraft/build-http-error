http = require('http')
util = require('util')
codes = http.STATUS_CODES

###*
 * Build an HTTP error with a status code and / or a message.
 *
 * @param  {Number}       status  a status code
 * @param  {String|Error} message a message or an error
 *
 * @return {Error} an Error instance.
###
module.exports = httpError = (status, message) ->
    # Status must be a number.
    if typeof status is 'number'
        # Message is optional; default to an HTTP status message.
        message ?= codes[status] ? codes[500]
    else
        # Status is optional; default to 500.
        message ?= status ? codes[500]
        status = 500
    # Message can be an Error instance.
    err = if util.isError(message) then message else new Error(message)
    # Override name.
    err.name = 'HttpError'
    # Prefix message with the status code.
    err.message = util.format('%s %s', status, err.message or codes[status] ? codes[500])
    # Add or override status (also referred as statusCode).
    err.status = err.statusCode = status
    # Exclude this function call from the stack trace.
    Error.captureStackTrace(err, httpError)
    return err
