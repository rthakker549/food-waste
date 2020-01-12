var express = require('express');
var router = express.Router();
let bc = require('badcube');

// Add an Offer
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

// Update an Offer
router.put('/update', function(req, res){
  let _id = req.body._id;
  let foodQuantity = req.body.foodQuantity;
  let deliveryMethod = req.body.deliveryMethod;

  bc.Offers.update({_id : _id},{foodQuantity : foodQuantity, deliveryMethod : deliveryMethod});
  offer = bc.Offers.find({_id : _id});
  res.send(offer);
});
  
router.delete('/deleteOffer', function(req, res){
    let _id = req.body._id;
    bc.Offers.delete({_id: _id});
    res.send("Offer update completed")
})

router.get('/getAll', function(req, res){
  let offers = bc.Offers.findAll({});
  res.send(offers);
})
module.exports = router;
