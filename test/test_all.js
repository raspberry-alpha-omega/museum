var Hath = require('hath');

module.exports = Hath.suite('All', [
    require('./test_tract')
]);

if (module === require.main) {
    module.exports(new Hath());
}