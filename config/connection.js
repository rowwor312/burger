// Creating connection to mySQL database
var mysql = require('mysql');
// var connection;

// if (process.env.JAWSDB_URL){
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
  var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'rowwebdevelop2019$',
    database:'burgers_db'
  });
// }

// Establish connection
connection.connect(function(err) {
  if (err) {
    console.error("Error Connecting: " + err.stack);
    return;
  }
  console.log("Connected as Id: " + connection.threadId);
});

// Export
module.exports = connection;