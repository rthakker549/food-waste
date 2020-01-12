var express = require('express');
var router = express.Router();
let bc = require('badcube')

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

module.exports = router;
