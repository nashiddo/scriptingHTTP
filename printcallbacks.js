var https = require('https');

function getHTML (options, callback) {

  var opt ='';

 https.get(options, function (response) {
  response.setEncoding('utf8');

  response.on('data', function (data) {
    opt += data;


   response.on('end', function() {
    console.log('Response stream complete.');
    callback(opt);
  });

});

});
}



function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML);


