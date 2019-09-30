const express = require("express");
const app = express();

app.listen(process.env.PORT || '4000', () => {
    console.log("server start at http://localhost:4000");
});

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use((req, res, next) => {
    // res.send("you have entered any wrong Keywrod");
    console.log('404 page not found');
    res.render('error');

})