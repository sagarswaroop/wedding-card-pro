const mail = require('../utils/mail');
const log = require('../utils/logger');
const chalk = require('chalk');
var cotroller = {
    confirmation(req, res) {
        console.log(chalk.green('200 request has accepted'));
        log.debug("inside the confirmation method");
        var object = req.body;
        console.log("object in confiramtion  ", object);
        if (object) {
            var name = object.name;
            log.debug("request data got", object.name);
            console.log("objec data is" + object.name);
            res.json("Thank you");
            console.log('202 response created and has sent');
            mail(name);
        } else {
            console.log("data is not found");
            log.error("204 data is not availabe");

        }
    }
}

module.exports = cotroller;