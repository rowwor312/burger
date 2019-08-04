var orm = require('../config/orm.js');

// Inserting burgers.
var burger = {
  selectAll: function(cb){
    orm.selectAll('burgers',function(res){
      cb(res);
    });
  },

  // Updating burgers.
  updateSetWhere: function(id,cb){
    orm.updateSetWhere('burgers',id,cb);
  },

  // Inserting/Creating new burger.
  insertIntoValues: function(name,cb){
    orm.insertIntoValues('burgers',name,cb);
  }
};

// Export.
module.exports = burger;