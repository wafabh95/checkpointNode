var fs = require('fs');

var filename = process.argv[2];

file = fs.readFile('input.txt', function(err, data) {
  console.log(data.toString().split('\n').length - 1);
});