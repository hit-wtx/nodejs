/**
 * Created by wtx on 2018/7/8.
 */

// file: test/main.test.js
var main = require('../test/fibonacci');
var should = require('should');

describe('/test/main.test.js', function () {
    it('should equal 55 when n === 10', function () {
        main.fibon(10).should.equal(55);
    });
});