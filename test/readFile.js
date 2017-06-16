var fs = require('fs')

fs.readFile('./build/contracts/Test.json', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});