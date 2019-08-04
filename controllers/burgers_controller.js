var express = require("express");
var router = express.Router();
var burger = require('../models/burger.js');


router.get('/', function(req,res){
  burger.selectAll(function(burger_data){
    console.log(burger_data);
    res.render('index', {burger_data});
  });
});

// Updates devour burgers
router.put('/burgers/updateSetWhere', function(req,res){
  burger.updateSetWhere(req.body.burger_id, function(result){
    console.log(result);
    res.redirect('/');
  });
});

// Adds new burger
router.post('/burgers/insertIntoValues', function(req,res){
  burger.insertIntoValues(req.body.burger_name, function(result){
    console.log(result);
    res.redirect('/');
  });
});

// Export
module.exports = router;