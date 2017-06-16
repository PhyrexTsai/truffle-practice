var Test = artifacts.require("./Test.sol");

contract('Test', function(accounts) {
	it("should call MetaCoin f() and g()", function() {
		return Test.deployed().then(function(contractInstance) {
	    instance = contractInstance;
	    return instance.f.call();
	  }).then(function(result){
	    assert.equal(result, "method f()");
	    return instance.g.call();
	  }).then(function(result){
	    assert.equal(result, "method g()");
	  });
	})
})	
