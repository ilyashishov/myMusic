var codegen = require('echoprint-codegen');
var fs = require('fs');

fs.readdir( process.argv[2], function (err, files) { 
	if (!err) {
		files.forEach(function(item, i, arr) {
			if(item.slice(-3) == 'mp3'){
				var opts = {
					  file: item,
					  index: 10,
					  offset: 30
					}
				codegen(opts, function (err, data) {
					if (err) return console.error(err);
						console.log(data);
				});
			}	
		});
	}
	else
		throw err; 
});

 
// var opts = {
//   file: 'test4_1.mp3',
//   index: 10,
//   offset: 30
// }
 
// codegen(opts, function (err, data) {
//   if (err) return console.error(err);
//   console.log(data);
// });


// function loadXMLDoc() {
//     var xmlhttp;

//     if (window.XMLHttpRequest) {
//         // code for IE7+, Firefox, Chrome, Opera, Safari
//         xmlhttp = new XMLHttpRequest();
//     } else {
//         // code for IE6, IE5
//         xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
//     }

//     xmlhttp.onreadystatechange = function() {
//         if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
//            if(xmlhttp.status == 200){
//                document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
//            }
//            else if(xmlhttp.status == 400) {
//               alert('There was an error 400')
//            }
//            else {
//                alert('something else other than 200 was returned')
//            }
//         }
//     }

//     xmlhttp.open("GET", "http://52.27.204.237:37760", true);
//     xmlhttp.send();
// }

// loadXMLDoc();