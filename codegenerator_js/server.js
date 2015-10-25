var express = require('express'),
    router = express.Router(),
    fs = require("fs"),
    multiparty = require('multiparty'),
	codegen = require('echoprint-codegen'),
	request = require('request'),
	formidable = require("formidable"),
	util = require('util');


var app = express(), 
	port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello, World!')
})

app.listen(port, function () {
  console.log('Listening on port ', port)
})




app.post('/file', function(req ,res) {
	console.log("Request handler 'upload' was called.");
	var form = new formidable.IncomingForm();
 
    var uploadFile = {uploadPath: '', type: '', size: 0};
    var maxSize = 2 * 1024 * 1024; //2MB
    var supportMimeTypes = ['image/jpg', 'image/jpeg', 'image/png'];
    var errors = [];

    form.on('error', function(err){
        if(fs.existsSync(uploadFile.path)) {
            fs.unlinkSync(uploadFile.path);
            console.log('error');
        }
    });

    form.on('close', function() {
        if(errors.length == 0) {
            res.send({status: 'ok', text: 'Success'});
        }
        else {
            if(fs.existsSync(uploadFile.path)) {
                fs.unlinkSync(uploadFile.path);
            }
            res.send({status: 'bad', errors: errors});
        }
    });

    // listen on part event for image file
    form.on('part', function(part) {
        uploadFile.size = part.byteCount;
        uploadFile.type = part.headers['content-type'];
        uploadFile.path = './files/' + part.filename;

        if(uploadFile.size > maxSize) {
            errors.push('File size is ' + uploadFile.size / 1024 / 1024 + '. Limit is' + (maxSize / 1024 / 1024) + 'MB.');
        }

        if(supportMimeTypes.indexOf(uploadFile.type) == -1) {
            errors.push('Unsupported mimetype ' + uploadFile.type);
        }

        if(errors.length == 0) {
            var out = fs.createWriteStream(uploadFile.path);
            part.pipe(out);
        }
        else {
            part.resume();
        }
    });

    // parse the form
    form.parse(req);
});
