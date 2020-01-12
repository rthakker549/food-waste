let bc = require('badcube');
const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyAsOwjMvnngb1TYDM8W0aqxFZYNdkM7tH8',
    Promise: Promise
  });

let destinationDistanceData = new Array();

module.exports = async function (origin, destinations, callback){    
    //var service = new googleMapsClient.DistanceMatrixService();
    
     googleMapsClient.distanceMatrix(
      {
        origins: [origin],
        destinations: destinations,
      }, function(err, response) {
        if (!err) {
          
    
        //   for (var i = 0; i < origins.length; i++) {
        //     var results = response.rows[i].elements;
        //     for (var j = 0; j < results.length; j++) {
        //       var element = results[j];
        //       var distance = element.distance.text;
        //       var to = destinations2[j];
        //       let pairedDestinationDistance = {dest: to, dist: distance};
        //       destinationDistanceData.push(pairedDestinationDistance);
        //     }
        //   }
            callback(response.json.rows[0].elements);
        }
    });
}


var distributions = require('distributions');

function GetNeedPercentages(Offer){
    // Retrieve Shelters in Need
    let rest = bc.Restaurants.find({_id : Offer.restaurantId});
    let allRequests = bc.Request.findAll({});
    let sheltersInNeed = allRequests.map(e => {
        bc.Shelters.find({_id : e.shelterId});
    });
    sheltersInNeed = sheltersInNeed.filter(e =>{
        if(/* Distance between e and rest > e.maxDistance return false*/false){
            return false;
        }
        return true;
    });
    if(sheltersInNeed.length <= 0){
        return false;
    }
    // Get averages array
    let sum = 0;
    let shelterProvisions = [];
    sheltersInNeed.foreach(e => {
        let len = e.foodServed.length;
        if(len > 0){
            sum += e.foodServed[len - 1]; 
        }
        if (len > 1){
            sum += e.foodServed[len - 2];
        }
        if(len > 2){
            sum += e.foodServed[len - 3];
        }
        if(len <= 0){
            console.log("Something went terribly wrong");
        }
        let avg = sum / len;
        shelterProvisions.push(avg);
    })
    let averageShelterProvision = 0;
    shelterProvisions.forEach(e => {
        averageShelterProvision += e;
    });
    // Get standard deviation
    averageShelterProvision /= shelterProvisions.length;
    let varianceShelterProvision = 0;
    shelterProvisions.forEach(e => {
        varianceShelterProvision += Math.pow(e - averageShelterProvision, 2) / shelterProvisions.length;
    })
    percentiles = GetMatchHelper(sheltersInNeed, averageShelterProvision, varianceShelterProvision);
    return percentiles;
}

function GetMatchHelper(shelters, average, stdev){
    let matchPercentages = [];
    var normal = distributions.Normal(average /* mean */, stdev /* std deviation */);

    shelters.forEach(e => {
        let len = e.foodServed.length;
        if(len > 0){
            sum += e.foodServed[len - 1]; 
        }
        if (len > 1){
            sum += e.foodServed[len - 2];
        }
        if(len > 2){
            sum += e.foodServed[len - 3];
        }
        if(len == 0){
            sum = average*len;
        }
        if(len < 0){
            console.log("Something went terribly wrong");
        }
        let avg = sum / len;
        matchPercentages.push({shelter : e, percentile : normal.cdf(avg)});
    })

    return matchPercentages;
}

function TopXMatches(Offer, x){
    matches = GetNeedPercentages();
    matches = matches.sort((e,f) =>{
        if(e.percentile > f.percentile) return 1;
        if(e.percentile < f.percentile) return  -1;
        return 0;
    });
    let needful = [];
    while(x > matches.length && matches.length > 0){
        needful.push(matches.pop());
    }
}

function ProcessTransaction(Request, Offer){
    let rest = bc.Restaurants.find(Offer.restaurantId);
    let shelt = bc.Shelters.find(Request.shelterId);

    let trans = {
        date: new Date(),
        donationInKg: Offer.foodQuantity <= Request.foodQuantity ? Offer.foodQuantity : Request.foodQuantity,
        shelterId: shelt._id
    } 
    rest.transactionHistory.push(trans);
    shelt.transactionHistory.push(trans);

    if(Offer.foodQuantity < Request.foodQuantity){
        bc.Offers.delete({_id : Offer._id});
        bc.Requests.update({_id : Request._id}, {foodQuantity : Request.foodQuantity - Offer.foodQuantity});
        return bc.Request.find({_id : Offer._id});
    }else if(Offer.foodQuantity > Request.foodQuantity){
        bc.Requests.delete({_id : Request._id});
        bc.Offers.update({_id : Offer._id}, {foodQuantity : Offer.foodQuantity - Request.foodQuantity});
        return bc.Offers.find({_id : Offer._id});
    }else{
        bc.Requests.delete({_id : Request._id});
        bc.Offers.delete({_id : Offer._id});
        return false;
    }
}
