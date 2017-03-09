/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// var https = require('https');

var fs = require('fs');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// Determine port to listen on
var port = (process.env.PORT || process.env.VCAP_APP_PORT || 6001);


// // start server on the specified port and binding host
var server = app.listen(port, function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});


// /*For local https test only*/
// var options = {
//   key: fs.readFileSync('./privatekey.pem'),
//   cert: fs.readFileSync('./certification.pem')
// };
//
// var SSLPORT = 3011;
//
// var httpsServer = https.createServer(options, app);
//
//
// httpsServer.listen(SSLPORT, function() {
//   console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT);
// });

