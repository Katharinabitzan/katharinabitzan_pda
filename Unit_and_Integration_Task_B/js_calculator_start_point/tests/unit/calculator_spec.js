var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should be able to add two numbers', function() {
    calculator.previousTotal = 4;
    calculator.add(1);
    let actual = calculator.runningTotal;
    let expected = 5;
    assert.equal(expected, actual)
  });

  it('should be able to subtract two numbers', function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    let actual = calculator.runningTotal;
    let expected = 3;
    assert.equal(expected, actual)
  });

  it('should be able to multiply two numbers', function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    let actual = calculator.runningTotal;
    let expected = 15;
    assert.equal(expected, actual)
  });

  it('should be able to divide two numbers', function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    let actual = calculator.runningTotal;
    let expected = 3;
    assert.equal(expected, actual);
  });

  it('should be able to concatenate multiple number button clicks', function() {
    calculator.runningTotal = 0;
    calculator.numberClick(5);
    calculator.numberClick(3);
    calculator.numberClick(2);
    let actual = calculator.runningTotal;
    let expected = 532;
    assert.deepStrictEqual(expected, actual);
  });

  it('should chain multiple operations together', function() {
    calculator.runningTotal = 0;
    calculator.numberClick(5);
    calculator.operatorClick("-");
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    let actual = calculator.runningTotal;
    let expected = 7;
    assert.deepStrictEqual(expected, actual);
  });

  it('should clear the running total without affecting the calculation', function() {
    calculator.runningTotal = 0;
    calculator.numberClick(5);
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    let actual = calculator.runningTotal;
    let expected = 6;
    assert.deepStrictEqual(expected, actual);
  });

});
