const nodemailer = require('nodemailer');
const privateDetails = require('dotenv');
const log = require('./logger');

var toEmail = 'sagarswaroop00@gamil.com';

var configMail = function(name) {
    log.debug('mail function is runnig for ' + name);
    var tranporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'sagarx2050@gamil.com',
            pass: 'write here password'
        }
    });

    let mailOptions = {
        from: 'sagarx2050@gmail.com',
        to: toEmail,
        subject: name + ' is comming in your wedding',
        text: name + 'is free for comming in your wedding',
        html: `<b>${name}</b>`
    }

    tranporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("erro is sending", error);
            log.error('error in sending the mail for ', error);
        } else {
            console.log("mail sent", info);
            log.debug('mail sent', info);
        }
    });
}

module.exports = configMail;