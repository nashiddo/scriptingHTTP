var https = require('https');

function getAndPrintHTML (options) {



  //buffer and apend strings
 https.get(options, function (response) {
  response.setEncoding('utf8');

  response.on('data', function (data) {
  var print= data;
    console.log(print);


  });


});
}


getAndPrintHTML({host: 'sytantris.github.io', path: '/http-examples/step3.html'});
