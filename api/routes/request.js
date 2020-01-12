var express = require('express');
var router = express.Router();
let bc = require('badcube')

// Add a request
router.post('/', function(req, res){
  let shelterId = req.body.shelterId;
  let shelterName = req.body.shelterName;
  let foodQuantity = req.body.foodQuantity;
  let deliveryMethod = req.body.deliveryMethod;

  bc.Requests.insert({
      shelterId: shelterId,
      shelterName: shelterName,
      foodQuantity: Number(foodQuantity),
      deliveryMethod: deliveryMethod
  })

  res.send("Request created")
})


// Update a Request
router.put('/update', function(req, res){
  let _id = req.body._id;
  let foodQuantity = req.body.foodQuantity;
  let deliveryMethod = req.body.deliveryMethod;

  bc.Restaurants.update({_id : _id},{foodQuantity : foodQuantity, deliveryMethod : deliveryMethod});
  restaurant = bc.Restaurants.find({_id : _id});
  res.send(restaurant);
})

router.delete('/deleteRequest', function(req, res){
    let _id = req.body._id;
    bc.Requests.delete({_id:_id});
    res.send("Request update completed")
})

module.exports = router;
