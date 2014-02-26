http = require('http')
util = require('util')
codes = http.STATUS_CODES

# Builder; returns an Error instance.
module.exports = (status, message) ->
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
    return err
