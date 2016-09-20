'use strict';

const winston = require('winston');

module.exports = config => (category, options) => {
  const logger = new winston.Logger();
  return logger;
};
