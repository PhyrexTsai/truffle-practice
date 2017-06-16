var Web3 = require("web3")
var contract = require("truffle-contract")
var provider = new Web3.providers.HttpProvider("http://localhost:8545")

var Test = contract({
  "contract_name": "Test",
  "abi": [
    {
      "constant": false,
      "inputs": [],
      "name": "f",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "g",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "type": "function"
    }
  ],
  "unlinked_binary": "0x6060604052341561000c57fe5b5b6101ec8061001c6000396000f300606060405263ffffffff60e060020a60003504166326121ff0811461002c578063e2179b8e146100bc575bfe5b341561003457fe5b61003c61014c565b604080516020808252835181830152835191928392908301918501908083838215610082575b80518252602083111561008257601f199092019160209182019101610062565b505050905090810190601f1680156100ae5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156100c457fe5b61003c61017d565b604080516020808252835181830152835191928392908301918501908083838215610082575b80518252602083111561008257601f199092019160209182019101610062565b505050905090810190601f1680156100ae5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101546101ae565b5060408051808201909152600a815260b060020a696d6574686f64206628290260208201525b90565b6101856101ae565b5060408051808201909152600a815260b060020a696d6574686f64206728290260208201525b90565b604080516020810190915260008152905600a165627a7a723058206b0c84915c0fede4165956c73ef25fccd543c2b56969fbf3f05c8e0820f5e4720029",
  "networks": {
    "16888": {
      "links": {},
      "events": {},
      "updated_at": 1497500472548
    }
  },
  "schema_version": "0.0.5",
  "updated_at": 1497500472548
})

Test.defaults({
	from: "0x2707318718f1c69ff55f5192cec64e117fdbbfde"
})

Test.setProvider(provider);

var instance;
Test.deployed().then(function(contractInstance) {
	instance = contractInstance;
	return instance.f.call()
}).then(function(result) {
	console.log(result)
	return instance.g.call()
}).then(function(result) {
	console.log(result)
})





