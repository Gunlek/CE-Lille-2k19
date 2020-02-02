var express = require('express');
let session = require('express-session');

var app = express();

app.use(session({
    secret: "website-ce"
}));

app.use(express.static('statics'));

app.get('/', (req, res) => {
    res.render('home.html.twig');
});

app.get('/le-ce/', (req, res) => {
    res.render('ce.html.twig');
});

app.get('/ateliers/', (req, res) => {
    res.render('ateliers.html.twig');
});

app.get('/billetterie/', (req, res) => {
    res.render('billetterie.html.twig');
});

app.get('/organisation/', (req, res) => {
    res.render('organisation.html.twig');
});

app.get('/contact/', (req, res) => {
    res.render('contact.html.twig');
});

app.listen(8080);