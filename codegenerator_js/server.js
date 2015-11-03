var express = require('express'),
router = express.Router(),
fs = require("fs"),
<<<<<<< HEAD
codegen = require('echoprint-codegen'),
request = require('request'),
=======
multiparty = require('multiparty'),
codegen = require('echoprint-codegen'),
request = require('request'),
formidable = require("formidable"),
>>>>>>> a8e39c9eb36ee34cf3d4e1d554b57feadd14ed42
util = require('util');


var app = express(), 
port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello, World!'+req.query.g);
})

app.listen(port, function () {
  console.log('Listening on port ', port)
})




app.post('/query', function(req ,res) {
    var fs = require("fs"),
    codegen = require('echoprint-codegen'),
    request = require('request');

    var opts = {
        file: 'test.mp3',
        index: 10,
        offset: 30
    }
    codegen(opts, function (err, data) {
<<<<<<< HEAD
        if (err) return console.error(err);
=======
        if (err){
            res.end('Error upload failed:');
            return console.error(err);
        } 
>>>>>>> a8e39c9eb36ee34cf3d4e1d554b57feadd14ed42
        var treak = data;
        var formData = {code: treak.code, version: treak.metadata.version.toString(), length : treak.metadata.duration};
        request.get({url:'http://52.27.204.237:37760/query?code='+treak.code+'&version='+treak.metadata.version.toString()}, function optionalCallback(err, httpResponse, body) {
            if (err) {
<<<<<<< HEAD
=======
                res.end('Error upload failed:');
>>>>>>> a8e39c9eb36ee34cf3d4e1d554b57feadd14ed42
                return console.error('upload failed:', err);
            }
            var data = JSON.parse(body);
            if(data.success){
                console.log({artist: data.match.artist, track: data.match.track, artist_id: data.match.artist_id});
                res.send({artist: data.match.artist, track: data.match.track, artist_id: data.match.artist_id});
            }else{
                console.log({error: {status: data.status}});
                res.send({error: {status: data.status}});
            }
        });
    });

});
