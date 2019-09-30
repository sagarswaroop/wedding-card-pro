const rout = require('express').Router();
const confirmCtrl = require('../controller/confirmctrl');

rout.post('/coming', (confirmCtrl.confirmation));

module.exports = rout;