var express = require('express');
var bodyParser = require('body-parser');
var compress = require('compression');

var app = express();

var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

var package = require('../package')

var config
try {
    config = require('../config')
} catch (x) {
    config = { deploy_date: 'now' }
}

app.locals = app.globals || {}
console.log(`package version ${package.version}`)
app.locals.version = package.version
console.log(`deploy date ${config.deploy_date}`)
app.locals.ddate = config.deploy_date

app.use(compress());
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

var router = express.Router();

// ... other paths ...

router.get('/', function (req, res) {
    return res.render('index')
});

app.use('/', router);

app.use(express.static('static'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(
        `<!DOCTYPE html>
<html>
    <head>
    <title>Error</title>
    </head>
    <body>
    <h1>${err.message}</h1>
    <h2>${err.status}</h2>
    <pre>${err.stack}</pre>
    </body>
</html>`
    );
});

module.exports = app;
