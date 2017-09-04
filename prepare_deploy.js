const fs = require('fs');
const async = require('async')
const tract = require('./lib/tract')

const dataFolder = './data';
const derivedFolder = './derived';

function explore(src, collection, next) {
    console.log(`explore ${src}`)
    var ret = { files: [] }
    fs.readdir(src, (err, files) => {
        console.log(`explore kids of ${src}`)
        async.forEach(files, (file, done) => {
            var path = src + '/' + file
            fs.stat(path, (err, stats) => {
                if (err) return done(err)
                if (stats.isDirectory()) return explore(path, collection, done)
                if (file === 'index.tract') {
                    console.log(`found index ${path}`)
                    tract.read(path, (val, err) => {
                        if (err) return done(err)
                        val.PATH = path
                        ret.index = val
                        done()
                    })
                } else {
                    ret.files.push(path)
                    done()
                }
            })
        }, (err) => {
            collection.push(ret)
            next(err)
        })
    })
}

function build(src, dest, next) {
    console.log(`build ${src}`)
    fs.stat(src, (err, stats) => {
        if (err) return next(err)
        if (stats.isDirectory()) {
            var collection = []
            explore(src, collection, (err) => {
                console.log(`done exploring err=${err}`)
                if (!err) {
                    fs.writeFileSync(dest + '/index.json', JSON.stringify(collection, null, 2))
                }
                next(err)
            })
        } else {
            next(new Error(`cannot build - ${src} is not a directory`))
        }
    })
}

build(dataFolder, derivedFolder, (err) => {
    fs.writeFileSync('config.json', JSON.stringify({
        deploy_date: process.env.DD
    }))
})