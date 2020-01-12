var express = require('express');
var router = express.Router();
let bc = require('badcube');

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

router.post('/', function(req, res){
  let location = req.body.location;
  let name = req.body.name;
  let foodExcess = req.body.foodExcess;
  let transactionHistory = req.body.transactionHistory;
  let phoneNumber = req.body.phoneNumber;
  let email = req.body.email;

  bc.Restaurants.insert({
      location: location,
      name: name,
      foodExcess: Array(foodExcess),
      transactionHistory: Array(transactionHistory),
      phoneNumber: phoneNumber,
      email: email
  });

  res.send("Restaurant created")
});

module.exports = router;
