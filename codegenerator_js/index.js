var fs = require("fs"),
	codegen = require('echoprint-codegen'),
	request = require('request');

var opts = {
	file: 'test.wav',
	index: 10,
	offset: 30
}
codegen(opts, function (err, data) {
	if (err) return console.error(err);
	var treak = data;
	var formData = {code: treak.code, version: treak.metadata.version.toString(), length : treak.metadata.duration};
	request.get({url:'http://52.27.204.237:37760/query?code='+treak.code+'&version='+treak.metadata.version.toString()}, function optionalCallback(err, httpResponse, body) {
		if (err) {
			return console.error('upload failed:', err);
		}
		var data = JSON.parse(body);
		if(data.success){
			console.log({artist: data.match.artist, track: data.match.track, artist_id: data.match.artist_id});
		}else{
			console.log({error: {status: data.status}});
		}
	});
});
