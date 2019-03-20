require('chai').should();

const palindromeSwapper = require('../index.js');

describe('Palindrome Swapper', function () {

  it('should return racecar when the input is rcaecar', function () {
    palindromeSwapper('rcaecar').should.eql('racecar');
  });

  it('should return anna when the input is anna', function () {
    palindromeSwapper('anna').should.eql('anna');
  });

  it('should return kyaak when the input is kyaak', function () {
    palindromeSwapper('kyaak').should.eql('kayak');
  });

  it('should return -1 when the input is ahhhhhhhhh', function () {
    palindromeSwapper('ahhhhhhhhh').should.eql(-1);
  });

  it('should return -1 when the input is madam', function () {
    palindromeSwapper('madam').should.eql(-1);
  });

  it('should return madam when the input is maadm', function () {
    palindromeSwapper('maadm').should.eql('madam');
  });

});