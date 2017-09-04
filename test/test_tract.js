var Hath = require('hath');

var tract = require('../lib/tract');

function testEmpty(t, done) {
    tract.parse('', (val, err) => {
        t.assert(null != err, 'empty gives error');
        done();
    })
}

function testMinimal(t, done) {
    tract.parse(`a:b\n\nhello`, (val, err) => {
        t.assert(null == err, 'minimal gives no error');
        t.assert('b' == val.a, 'minimal gives correct headerc value');
        t.assert('hello' == val.BODY, 'minimal gives correct body');
        done();
    })
}

function testMultilineBody(t, done) {
    tract.parse(`a:b\n\nhello\nthere`, (val, err) => {
        t.assert(null == err, 'multiline body gives no error');
        t.assert('hello\nthere' == val.BODY, 'multiline gives correct body');
        done();
    })
}

function testMissing(t, done) {
    tract.read('test/missing.tract', (val, err) => {
        t.assert(null != err, 'missing file gives error');
        done();
    })
}

function testPresent(t, done) {
    tract.read('test/present.tract', (val, err) => {
        t.assert(null === err, 'present file gives no error');
        done();
    })
}

module.exports = Hath.suite('Tract', [
    testEmpty,
    testMinimal,
    testMultilineBody,
    testMissing,
    testPresent
]);

if (module === require.main) {
    module.exports(new Hath());
}