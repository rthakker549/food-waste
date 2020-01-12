var express = require('express');
var router = express.Router();
let bc = require('badcube');

module.exports = router;

router.post('/', function(req, res){
    restaurantId = req.body.restaurantId;
    foodOffered = req.body.foodOffered;
    restaurantName = req.body.restaurantName;
    deliveryMethod = req.body.deliveryMethod;
  
    bc.Offers.insert({
      restaurantId: restaurantId,
      foodOffered: Number(foodOffered),
      restaurantName: restaurantName,
      deliveryMethod: deliveryMethod
    })
  
    res.send("Shelter created")
  })