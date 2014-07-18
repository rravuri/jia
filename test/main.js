var should = require('should');
var jia = require('../index.js');

describe('jia', function() { 
	it('root export should be an object', function(){
		jia.should.be.type('object');
	})
});