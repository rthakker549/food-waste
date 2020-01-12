var express = require('express');
var router = express.Router();
let bc = require('badcube')

/* Get all Shelters */
router.get('/', function(req, res) {
  let allShelters = bc.Shelters.findAll({});
  res.json(allShelters);
});

router.post('/shelter', function(req, res){
  let id = req.body.id;
  let location = req.body.location;
  let name = req.body.name;
  let phoneNumber = req.body.phoneNumber;
  let email = req.body.email;
  let foodServed = req.body.foodServed;
  let demographics = req.body.demographics;
  let transactionHistory = req.body.transactionHistory;

  bc.Shelters.insert({
    id: Number (id),
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

module.exports = router;
