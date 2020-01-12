var express = require('express');
var router = express.Router();
let bc = require('badcube');

module.exports = router;

// Fulfillment Logic
router.post('/', function(req, res){
  let address = req.body.address;
  let zipCode = req.body.zipCode;
  let state = req.body.state;
  let city = req.body.city;
  let name = req.body.name;
  let phoneNumber = req.body.phoneNumber;
  let email = req.body.email;
  let foodServed = req.body.foodServed;
  let demographics = req.body.demographics;
  let transactionHistory = req.body.transactionHistory;

  bc.Shelters.insert({
    address: address,
    zipCode: zipCode,
    state: state,
    city : city,
    name: name,
    phoneNumber: phoneNumber,
    email: email,
    foodServed: Array(foodServed),
    demographics: Object(demographics),
    transactionHistory: Array(transactionHistory)
  })
  let toRet = bc.Shelters.find({name : name});
  res.send(toRet);
})

// Update shelter info
router.put('/update', function(req, res){
  let _id = req.body._id;
  let address = req.body.address;
  let zipCode = req.body.zipCode;
  let state = req.body.state;
  let city = req.body.city;
  let name = req.body.name;
  let phoneNumber = req.body.phoneNumber;
  let email = req.body.email;
  let demographics = Object(req.body.demographics);

  bc.Shelters.update({_id : _id},{address : address, zipCode : zipCode, state : state, city : city, name : name, 
    phoneNumber : phoneNumber, email : email, demographics : demographics});
  shelter = bc.Shelters.find({_id : _id});
  res.send(shelter);
})

// Metrics Logic

