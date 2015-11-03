var fs = require("fs"),
	codegen = require('echoprint-codegen'),
	request = require('request');

fs.readdir( process.argv[2], function (err, files) { 
	if (!err) {
		files.forEach(function(item, i, arr) {
			setTimeout(function(){
				if(item.slice(-3) == 'mp3'){
				var opts = {
					  file: item,
					  index: 10,
					  offset: 30
					}
<<<<<<< HEAD
						codegen(opts, function (err, data) {
							if (err) return console.error(err);
							var treak = data;
							var formData = {code: treak.code, version: treak.metadata.version.toString(), track: treak.metadata.title, length : treak.metadata.duration, artist: treak.metadata.artist};
							
								request.post({url:'http://54.148.221.105:37760/ingest', form: formData}, function optionalCallback(err, httpResponse, body) {
									if (err) {
										return console.error('upload failed:', err);
									}
									console.log(body);
								});
							
						});
			}
			},1500);
				
=======
				codegen(opts, function (err, data) {
					if (err) return console.error(err);
					var treak = data;
					var formData = {code: treak.code, version: treak.metadata.version.toString(), track: treak.metadata.title, length : treak.metadata.duration, artist: treak.metadata.artist};

					request.post({url:'http://54.148.221.105:37760/ingest', form: formData}, function optionalCallback(err, httpResponse, body) {
						if (err) {
							return console.error('upload failed:', err);
						}
						console.log(body);
					});
				});
			}	
>>>>>>> 0a9cf588d0a3f8c45323a6a3945438f9fa53b6c1
		});
	}
	else
		throw err; 
});
