var filterFiles = function(dir, ext, callback){
	var path = require('path'),
		fs = require('fs'),
		files = [];

	fs.readdir(dir, function(err, list){
		if(err){
			return callback(err, null);
		} else {
			list.forEach(function(item){
				if(path.extname(item) == '.' + ext){
					files.push(item);
				}
			});
			return callback(null, files);
		}
	});
};

module.exports = filterFiles;