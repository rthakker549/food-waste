var express = require('express');
var router = express.Router();
let bc = require('badcube');
let calculateDistance = require('./MatchingUtility.js');

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

// Calculation logic
function getDistancesBetweenRestaurantAndShelters(restaurant, allShelters, callback){
    // address zipcode city state
    let shelterLocations = new Array();
    console.log(allShelters);
    allShelters.forEach(element => {
        let combinedAddress = "";
        combinedAddress += element.address + " ";
        combinedAddress += element.city + ",";
        combinedAddress += element.state + " ";
        combinedAddress += element.zipCode;
        shelterLocations.push(combinedAddress);
    })

    let restaurantString = "";
    restaurantString += restaurant.address + " ";
    restaurantString += restaurant.city + ",";
    restaurantString += restaurant.state + " ";
    restaurantString += restaurant.zipCode;
    calculateDistance(restaurantString, shelterLocations, function(distances){
        // process distances
        callback(distances);
    }); 
}

// Add new restaurant
router.post('/', function(req, res){
  let address = req.body.address;
  let zipCode = req.body.zipCode;
  let state = req.body.state;
  let city = req.body.city;
  let name = req.body.name;
  let foodExcess = req.body.foodExcess;
  let transactionHistory = req.body.transactionHistory;
  let phoneNumber = req.body.phoneNumber;
  let email = req.body.email;

  bc.Restaurants.insert({
      address: address,
      zipCode: zipCode,
      state: state,
      city : city,
      name: name,
      foodExcess: Array(foodExcess),
      transactionHistory: Array(transactionHistory),
      phoneNumber: phoneNumber,
      email: email
  });

  res.send("Restaurant created")
});

// Update restaurant
router.put('/update', function(req, res){
    let _id = req.body._id;
    let address = req.body.address;
    let zipCode = req.body.zipCode;
    let state = req.body.state;
    let city = req.body.city;
    let name = req.body.name;
    let phoneNumber = req.body.phoneNumber;
    let email = req.body.email;
  
    bc.Restaurants.update({_id : _id},{name : name, 
      phoneNumber : phoneNumber, email : email, address : address, zipCode : zipCode, state : state, city : city});
    restaurant = bc.Restaurants.find({_id : _id});
    res.send(restaurant);
})

// Get distances for shelters
router.post('/distances', function(req, res){
    let _id = req.body._id;
    let restaurant = bc.Restaurants.find({_id:_id});
    let shelters = bc.Shelters.findAll({});
    getDistancesBetweenRestaurantAndShelters(restaurant, shelters, function(result){
        res.send(result);

    });
})

module.exports = router;
