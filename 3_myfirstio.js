var fs = require('fs'),
	file = process.argv[2],
	buf = fs.readFileSync(file),
	str = buf.toString(),
	split = str.split('\n'),
	breaks = split.length - 1;

console.log(breaks);