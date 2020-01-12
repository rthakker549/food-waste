var express = require('express');
var router = express.Router();
let bc = require('badcube');
let getDistancesBetweenRestaurantAndShelters = require('./MatchingUtility.js');
let TopXMatches = require('./MatchingUtility.js');
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

router.post('/totalDonations', function(req, res){
    let _id = req.body._id;
    let currRestaurant = bc.Restaurants.find({_id: _id});

    res.send(TotalDonationsInTimePeriod(currRestaurant, 1));
});

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

router.post('/avgDonations', function(req, res){
    let _id = req.body._id;
    let currRestaurant = bc.Restaurants.find({_id: _id});

    res.send(AverageDonationsInTimePeriod(currRestaurant, 1));
});

router.post('/numTransactions', function(req, res){
    let _id = req.body._id;
    let currRestaurant = bc.Restaurants.find({_id: _id});

    res.send(Array(currRestaurant.transactionHistory).length);
})

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

<<<<<<< HEAD
  let toRet = bc.Restaurants.find({name : name});
  res.send(toRet);
=======
  res.send("Restaurant created");
>>>>>>> d7111e29680c70898e28c8ed620d65acff659cae
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

router.post('/TopMatches', function(req, res){
    let offer = {
        restaurantId: req.body.restaurantId,
        restaurantName: req.body.restaurantName,
        foodQuantity: req.body.foodQuantity,
    }
    let x = req.body.count;
    let mostNeedful = TopXMatches(offer, x);
    res.send(mostNeedful);
})
module.exports = router;
