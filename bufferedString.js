var https = require('https');



function getAndPrintHTML(){

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


  //buffer and apend strings
 https.get(requestOptions, function (response) {
  response.setEncoding('utf8');


  //add code here
 response.on('data', function (data) {
  var buffer= data;
    console.log(buffer);
  });

});
}

getAndPrintHTML();

//append each chuck of data
//console.log each data
