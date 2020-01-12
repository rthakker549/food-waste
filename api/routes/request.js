var express = require('express');
var router = express.Router();
let bc = require('badcube')

// Add a request
router.post('/', function(req, res){
  let shelterId = req.body.shelterId;
  let shelterName = req.body.shelterName;
  let foodQuantity = req.body.foodQuantity;
  let maxDistance = req.body.maxDistance;

  bc.Requests.insert({
      shelterId: shelterId,
      shelterName: shelterName,
      foodQuantity: Number(foodQuantity),
      maxDistance : Number(maxDistance)
  })

  res.send("Request created")
})


// Update a Request
router.put('/update', function(req, res){
  let _id = req.body._id;
  let foodQuantity = req.body.foodQuantity;
  let maxDistance = req.body.maxDistance;
  
  bc.Requests.update({_id : _id},{foodQuantity : foodQuantity, maxDistance : maxDistance});
  request = bc.Requests.find({_id : _id});
  res.send(request);
})

router.delete('/deleteRequest', function(req, res){
    let _id = req.body._id;
    bc.Requests.delete({_id:_id});
    res.send("Request update completed")
})

router.get('/getAll', function(req, res){
  let pendingRequests = bc.Requests.findAll({});
  res.send(pendingRequests);
})

module.exports = router;
