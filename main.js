var Web3 = require('web3');
var contract = require("truffle-contract");
var fs = require('fs')
var provider = new Web3.providers.HttpProvider("http://localhost:8545");

//使用truffle-contract包的contract()方法
//请务必使用你自己编译的.json文件内容
fs.readFile('./build/contracts/Test.json', 'utf8', (err, data) => {
  if (err) throw err;
  var Test = contract(JSON.parse(data));

  Test.setProvider(provider);

  //没有默认地址，会报错
  //UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 3): Error: invalid address
  //务必设置为自己的钱包地址，如果不知道，查看自己的客户端启动时，观察打印到控制台的地址
  Test.defaults({
    from : process.env.ETHEREUM_ADDRESS
  });

  var instance;
  Test.deployed().then(function(contractInstance) {
    instance = contractInstance;
    return instance.f.call();
  }).then(function(result){
    console.log(result);
    return instance.g.call();
  }).then(function(result){
    console.log(result);
  });
});
