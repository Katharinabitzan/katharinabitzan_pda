var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  });

it('should update the display with the result of the operation', function(){
  running_total =
  element(by.css('#running_total'))
  element(by.css('#number4')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('6');
});

it('should chain multiple operations together', function(){
  running_total =
  element(by.css('#running_total'))
  element(by.css('#number4')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number3')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('6');
});
//
it('should provide expected output for a range of numbers: negative', function(){
  element(by.css('#number7')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number5')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('-2');
});

it('should provide expected output for a range of numbers: decimals', function(){
  element(by.css('#number5')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('2.5');
});

it('should provide expected output for a range of numbers: large numbers', function(){
  element(by.css('#number5')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number2')).click();
  element(by.css('#number2')).click();
  element(by.css('#number2')).click();
  element(by.css('#number2')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('111110');
});

it('should return NaN if a number is divided by zero', function(){
  element(by.css('#number5')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('NaN');
});

});
