var fs = require("fs"),
	codegen = require('echoprint-codegen'),
	request = require('request');

// fs.readdir( process.argv[2], function (err, files) { 
// 	if (!err) {
// 		files.forEach(function(item, i, arr) {
// 			if(item.slice(-3) == 'mp3'){
// 				var opts = {
// 					  file: item,
// 					  index: 10,
// 					  offset: 30
// 					}
// 				codegen(opts, function (err, data) {
// 					if (err) return console.error(err);
// 					var treak = data;
// 					var formData = {code: treak.code, version: treak.metadata.version.toString(), track: treak.metadata.title, length : treak.metadata.duration, artist: treak.metadata.artist};

// 					request.post({url:'http://52.27.204.237:37760/ingest', form: formData}, function optionalCallback(err, httpResponse, body) {
// 						if (err) {
// 							return console.error('upload failed:', err);
// 						}
// 						console.log(body);
// 					});
// 				});
// 			}	
// 		});
// 	}
// 	else
// 		throw err; 
// });

var opts = {
	file: 'test.mp3',
	index: 10,
	offset: 30
}
codegen(opts, function (err, data) {
	if (err) return console.error(err);
	var treak = data;
	var formData = {code: treak.code, version: treak.metadata.version.toString(), length : treak.metadata.duration};
	request.get({url:'http://52.27.204.237:37760/query?code='+treak.code+'&version='+treak.metadata.version.toString()+'&length='+treak.metadata.duration}, function optionalCallback(err, httpResponse, body) {
		if (err) {
			return console.error('upload failed:', err);
		}
		var data = JSON.parse(body);
		console.log(data.match.artist+'-'+data.match.track);
	});
});

// request.post({url:'http://52.27.204.237:37760/ingest', form: {code: treak[0].code, version: treak[0].metadata.version, track: treak[0].metadata.title, length: treak[0].metadata.duration, artist: treak[0].metadata.artist}, function(error, response, body){ 
// 	console.log(body);
// });

// var opts = {
//   file: 'test4_1.mp3',
//   index: 10,
//   offset: 30
// }
 
// codegen(opts, function (err, data) {
//   if (err) return console.error(err);
//   console.log(data);
// });