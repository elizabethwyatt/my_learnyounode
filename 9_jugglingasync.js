var http = require('http'),
	api = function(url){
		return {
			url: url,
			alldata: '',
			ended: false
		};
	},
	apiArray = [
		api(process.argv[2]),
		api(process.argv[3]),
		api(process.argv[4])
	],
	checkForCompletion = function(){
		var alldone = true;

		apiArray.forEach(function(apiItem){
			if(!apiItem.ended){
				alldone = false;
			}
		});

		if(alldone){
			apiArray.forEach(function(apiItem){
				console.log(apiItem.alldata);
			});
		}
	}
;

apiArray.forEach(function(apiItem){
	http.get(apiItem.url, function(res){
		res.setEncoding('utf8');
		res.on('data', function(data){
			apiItem.alldata += data;
		});
		res.on('end', function(data){
			apiItem.ended = true;
			checkForCompletion();
		});
	});
});