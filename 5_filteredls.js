var path = require('path'),
	fs = require('fs'),
	dir = process.argv[2],
	ext = '.' + process.argv[3];

fs.readdir(dir, function(err, list){
	if(!err){
		list.forEach(function(item){
			if(path.extname(item) == ext){
				console.log(item);
			}
		});
	}
});