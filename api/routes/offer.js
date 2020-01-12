var express = require('express');
var router = express.Router();
let bc = require('badcube')

router.post('/', function(req, res){
  let restaurantId = req.body.restaurantId;
  let restaurantName = req.body.restaurantName;
  let foodQuantity = req.body.foodQuantity;
  let deliveryMethod = req.body.deliveryMethod;

  bc.Offers.insert({
      restaurantId: restaurantId,
      restaurantName: restaurantName,
      foodQuantity: Number(foodQuantity),
      deliveryMethod: deliveryMethod
  })

  res.send("Offer created")
})

module.exports = router;
