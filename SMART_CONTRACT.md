## Smart Contract Step by Step

參考：http://truffle.tryblockchain.org/

這邊會考慮使用 truffle + openzeppelin
truffle 是一個 framework 可以測試並且部署 solidity 
openzeppelin 會提供一些額外的 smart contract 讓你的合約更安全

Install Ethereum testrpc

```
sudo npm install -g ethereumjs-testrpc
```

Install truffle for global service

```
sudo npm install -g truffle
```
  
Check truffle version

```
truffle version
```

Initial truffle project

```
truffle init

-- output
Downloading project...
Project initialized.

  Documentation: http://truffleframework.com/docs

Commands:

  Compile: truffle compile
  Migrate: truffle migrate
  Test:    truffle test
```

Bind truffle with npm

```
npm init
```

```
npm install truffle-contract 

npm install truffle-contract --save

npm install web3

npm install web3 --save
```

Migrate truffle

```
-- attach geth to unlock account
geth attach

-- use web3 unlock account
personal.unlockAccount(eth.coinbase, 'password', 60000)

-- run migrate
truffle migrate

-- output
Using network 'development'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  Migrations: 0xb1b00f28a1453ad661262d15e1108dd71a23a788
Saving successful migration to network...
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying Greeter...
  Greeter: 0x552c9923dd3ab52821da9343a38262aaa3e12ea0
Saving successful migration to network...
Saving artifacts...
```

Try truffle console
```
truffle console
```

```
Greeter.deployed().then(function(instance){ return instance.setGreeting('test'); });

-- output
{ tx: '0xe73a27fedefd5d0fae74a0059f4f051b942d8424ef0fa2848612f3f33c91c77b',
  receipt:
   { blockHash: '0xd410129abdb4c306bea9486822fe27df2f6d3647e94b0bf16ed4f9aef8af0a14',
     blockNumber: 514743,
     contractAddress: null,
     cumulativeGasUsed: 42766,
     from: '0x2707318718f1c69ff55f5192cec64e117fdbbfde',
     gasUsed: 42766,
     logs: [],
     logsBloom: '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
     root: '0xc96cb563a9d32c9684fd020cec9db6e0b9974db2d96d0d619242a339031e6754',
     to: '0x552c9923dd3ab52821da9343a38262aaa3e12ea0',
     transactionHash: '0xe73a27fedefd5d0fae74a0059f4f051b942d8424ef0fa2848612f3f33c91c77b',
     transactionIndex: 0 },
  logs: [] }
```

```
Greeter.deployed().then(function(instance){ return instance.greet(); });

-- output
'test'
```

### example

Reference: http://truffle.tryblockchain.org/truffle3.0-integrate-nodejs.html

exmpale file: main.js

```
node main.js

-- output
method f()
method g()
```

### Test truffle

```
truffle test test/testTest.js

-- output, should wait long time
Using network 'development'.



  Contract: Test
    ✓ should call MetaCoin f() and g()


  1 passing (33ms)
```

