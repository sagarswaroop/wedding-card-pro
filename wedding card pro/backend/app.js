const express = require("express");
const bodyParser = require('body-parser');
const chalk = require('chalk');
const cors = require('cors');
const confirmRout = require('../backend/route/confirmrout');
const log = require('./utils/logger');
const app = express();
var port = "3000"

app.set('view engine', 'ejs');
app.listen(process.env.PORT || port, () => {
    console.log(chalk.white(`backend Server Started at http://localhost:${port}`));
});

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static('public'));


app.use('/', confirmRout);
app.use((req, res) => {
    log.error("404 invalid url request");
    res.render("error");


});