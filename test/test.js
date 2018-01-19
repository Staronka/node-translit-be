/*global describe, it */
'use strict';
var mocha = require('mocha');
var should = require('should');
var translit = require('../');

describe('translit-be node module', function () {
    it('simple transliteration', function () {
        translit.toASCII("Ягор Кур'яновiч").should.be.equal("Yagor Kur'yanovich");
    });
});
