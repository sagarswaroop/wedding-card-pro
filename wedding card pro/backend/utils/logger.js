const { transports, createLogger, format } = require('winston');

const logger = createLogger({
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.File({ filename: '../logs/debug.log', level: 'debug' }),
        new transports.File({ filename: '../logs/error.log', level: 'error' })
    ]
});

module.exports = logger;