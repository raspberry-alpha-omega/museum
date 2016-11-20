const async = require('async')
const express = require('express');
const app = express();
const fs = require('fs');
const dataFolder = './data/';

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.send('Hello World!');
});

function serve() {
    app.listen(4000, function () {
        console.log('Example app listening on port 4000!');
    });
}

function build(folder, app, next) {
    fs.readdir(folder, (err, files) => {
        var folders = []
        async.forEach(files, (file, done) => {
            fs.stat(folder + file, (err, stats) => {
                if (err) return done(err)
                if (stats.isDirectory()) folders.push(file)
                done()
            }) 
        }, (err) => {
            next(err)
        })
    })
}

build(dataFolder, app, (err) => {
    if (!err) serve()
})
