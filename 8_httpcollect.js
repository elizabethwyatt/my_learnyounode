var http = require('http'),
	url = process.argv[2],
	alldata = '';

http.get(url, function(res){
	res.setEncoding('utf8');
	res.on('data', function(data){
		alldata += data;
	});
	res.on('end', function(data){
		console.log(alldata.length);
		console.log(alldata);
	});
});