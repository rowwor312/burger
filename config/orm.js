// Linking to the connection.js file
var connection = require('./connection.js');

var orm = {
  // Selecting everything from whatever the table input (tableData) is put into this method and it will use a callback to put this result into the next file in the file system.
  
  selectAll: function(tableData, cb){
    connection.query('SELECT * FROM ' + tableData + ';', function(err,result){
      if(err) throw err;
      cb(result);
    });
  },
  // Updating the id for whatever the table input (tableData) is put into this method and it will update the boolean value to true. In short, the burger will be "eaten." Just like above, this usees a callback to put this result into the next file in the file system.
  
  updateSetWhere: function(tableData, condition, cb){
    connection.query('UPDATE ' + tableData +' SET devoured=true WHERE id=' + condition + ';', function(err,result){
      if(err)throw err;
      cb(result);
    });
  },
  // Adding name of the new burger into the database
  insertIntoValues: function(tableData, val, cb){
    connection.query('INSERT INTO ' + tableData + " (burger_name) VALUES ('"+val+"');", function(err,result){
      if(err)throw err;
      cb(result);
    });
  }
};

// Export
module.exports = orm;