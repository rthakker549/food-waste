var express = require('express');
var router = express.Router();

module.exports = router;


// Metrics Business Logic
function TotalDonationsInTimePeriod(restaurant, days){
    let transaction = restaurant.transactionHistory;
    if(transaction === undefined){
        return false;
    }
    if(days === 0){
        return 0;
    }
    let donations = 0;
    // Current date
    let currD = new Date();
    // Date x days ago
    let oldD = new Date();
    oldD.setDate(currD.getDate() - days);
    transaction.array.forEach(element => {
        if(element.transDate.getTime() >= oldD.getTime()){
            donations += element.foodQuantity;
        }
    });
    return donations;
}

function AverageDonationsInTimePeriod(restaurant, days){
    let totDonations = TotalDonationsInTimePeriod(restaurant, days);
    if(days === 0){
        return undefined;
    }
    if(totDonations === false){
        return false;
    }
    return totDonations / days;
}

function MostDonationsInATransaction(restaurant){
    let maxDonations = 0;
    let transaction = restaurant.transactionHistory;
    
    transaction.array.forEach(element => {
        if(element.foodQuantity > maxDonations){
            maxDonations = element.foodQuantity;
        }
    })
    return maxDonations;
}

function AverageDonationsAllTime(restaurant){
    let totDonations = 0;
    let days = 0;

    transaction.array.forEach(element => {
        totDonations += element.foodQuantity;
        days++;
    })

    if(days === 0){
        return undefined;
    }
    if(totDonations === false){
        return false;
    }
    return totDonations / days;
}

// Profile Business Logic

// Routing
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
