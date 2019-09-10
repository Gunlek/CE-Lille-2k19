var express = require('express');
let session = require('express-session');

var app = express();

app.use(session({
    secret: "website-ce"
}));

app.use(express.static('statics'));

app.get('/', (req, res) => {
    res.render('home/home.html.twig');
});

app.listen(8080);