var express = require('express');
var router = express.Router();
let bc = require('badcube');

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

router.delete('/deleteOffer', function(req, res){
    let _id = req.body._id;
    bc.Offers.delete({_id: _id});
    res.send("Offer update completed")
})

module.exports = router;
