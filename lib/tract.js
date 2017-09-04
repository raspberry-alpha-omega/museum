const fs = require('fs')

const HEAD = 'h'
const BODY = 'b'

function split(s, map) {
    var parts = s.split(':')
    var key = parts[0].trim()
    var val = parts[1].trim()
    map[key] = val
}

function parse(s, next) {
    if (!s) return next(null, new Error('No data to parse'))
    var lines = s.split('\n')
    if (0 == lines.length) return next(null, new Error('No data to parse'))
    var state = HEAD
    var ret = {}
    var body = []
    for (i in lines) {
        var line = lines[i]
        if (HEAD === state) {
            var trimmed = line.trim()
            if ('' === trimmed) {
                state = BODY
            } else {
                split(trimmed, ret)
            }
        } else {
            body.push(line)
        }
    }
    ret.BODY = body.join('\n')
    next(ret, null)
}

function read(path, next) {
    fs.stat(path, (err, stats) => {
        if (err) return next(null, err)
        if (stats.isDirectory()) return next(null, new Error(`file ${path} is a directory`))

        var s = fs.readFileSync(path, "utf8");
        parse(s, next)
    })
}

module.exports = {
    read: read,
    parse: parse
}