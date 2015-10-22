var codegen = require('echoprint-codegen');
 
var opts = {
  file: 'test4_1.mp3',
  index: 10,
  offset: 30
}
 
codegen(opts, function (err, data) {
  if (err) return console.error(err);
  console.log(data);
});