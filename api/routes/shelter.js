var express = require('express');
var router = express.Router();
let bc = require('badcube');

module.exports = router;

router.post('/', function(req, res){
  let location = req.body.location;
  let name = req.body.name;
  let phoneNumber = req.body.phoneNumber;
  let email = req.body.email;
  let foodServed = req.body.foodServed;
  let demographics = req.body.demographics;
  let transactionHistory = req.body.transactionHistory;

  bc.Shelters.insert({
    location: location,
    name: name,
    phoneNumber: phoneNumber,
    email: email,
    foodServed: Array(foodServed),
    demographics: Object(demographics),
    transactionHistory: Array(transactionHistory)
  })

  res.send("Shelter created")
})

