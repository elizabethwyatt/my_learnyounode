var module = require('./6_module.js'),
	dir = process.argv[2],
	ext = process.argv[3];

module(dir, ext, function(err, list){
	if(!err){
		list.forEach(function(item){
			console.log(item);
		});
	}
});