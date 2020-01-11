var express = require('express');
var router = express.Router();
let bc = require('badcube')

/* Get all Restauants */
router.get('/', function(req, res) {
  let allRestaurants = bc.Restaurants.findAll({});
  res.json(allRestaurants);
});

router.post('/restaurant', function(req, res){
  let id = req.body.id;
  let location = req.body.location;
  let name = req.body.name;
  let foodExcess = req.body.foodExcess;
  let mostRecentExcessEntry = req.body.mostRecentExcessEntry;
  let mostRecentFoodSubmission = req.body.mostRecentFoodSubmission;
  let transactionHistory = req.body.transactionHistory;
  let phoneNumber = req.body.phoneNumber;
  let email = req.body.email;

  bc.Restaurants.insert({
      id: Number (id),
      location: location,
      name: name,
      foodExcess: Array(foodExcess),
      mostRecentExcessEntry: Date(mostRecentExcessEntry),
      mostRecentFoodSubmission: Date(mostRecentFoodSubmission),
      transactionHistory: Array(transactionHistory),
      phoneNumber: phoneNumber,
      email: email
  })

  res.send("Restaurant created")
})

module.exports = router;
