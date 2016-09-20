"use strict";
var expect = require('chai').expect;

var validatedParse = require('../src/JSON-parse-object-validator');

describe("File should exist", function(){
  it("Check that the file being test exists", function() {
  expect(validatedParse).to.not.be.undefined;
  });
});

describe( "Testing functionality of validatedParse", function(){
  it("Return false for 1234", function() {
    var input = 1234;
    var expected = false;
    var actual = validatedParse(input);
    expect(actual).to.eql(expected);
  });
  it("Return false for null", function() {
    var input = null;
    var expected = false;
    var actual = validatedParse(input);
    expect(actual).to.eql(expected);
  });
  it("Return false for incorrectly formatted foo bar object string", function() {
    var input = "{foo : bar}";
    var expected = false;
    var actual = validatedParse(input);
    expect(actual).to.eql(expected);
  });
  it("Return true for correctly formated foo bar object string", function() {
    var input = '{"foo":"bar"}';
    var expected = true;
    var actual = validatedParse(input);
    expect(actual).to.eql(expected);
  });
});
