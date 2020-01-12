let bc = require('badcube');
const googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyAsOwjMvnngb1TYDM8W0aqxFZYNdkM7tH8',
    Promise: Promise
  });

let destinationDistanceData = new Array();
module.exports = function getDistancesBetweenRestaurantAndShelters(restaurant, allShelters, callback){
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

function getDistancesBetweenRestaurantAndShelters2(restaurant, allShelters, callback){
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
calculateDistance = async function (origin, destinations, callback){    
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
    let allRequests = bc.Requests.findAll({});
    console.log(allRequests);
    if(allRequests.length === 0){
        return false;
    }
    let requestedShelters = allRequests.map(e => e.shelterId );
    console.log("1" + requestedShelters);
    let allShelters = bc.Shelters.findAll({});
    console.log("2" + allShelters);
    let sheltersInNeed = allShelters.filter(e => {
       return requestedShelters.includes(e._id);
    });
    console.log("3" + sheltersInNeed);

    if(sheltersInNeed.length <= 0){
        return false;
    }
    // Get averages array
    let sum = 0;
    let shelterProvisions = [];
    sheltersInNeed.forEach(e => {
        let len = e.foodServed.length;
        if(len > 0){
            sum += e.foodServed[len - 1].foodInKgsServed / e.foodServed[len - 1].peopleCount; 
        }
        if (len > 1){
            sum += e.foodServed[len - 2].foodInKgsServed / e.foodServed[len - 2].peopleCount;
        }
        if(len > 2){
            sum += e.foodServed[len - 3].foodInKgsServed / e.foodServed[len - 3].peopleCount;
        }
        if(len <= 0){
            console.log("Something went terribly wrong");
        }
        console.log(sum);
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
        console.log("var" + varianceShelterProvision);
    })
    percentiles = GetMatchHelper(sheltersInNeed, averageShelterProvision, Math.sqrt(varianceShelterProvision));
    return percentiles;
}

function GetMatchHelper(shelters, average, stdev){
    let matchPercentages = [];
    if(stdev !== 0){
        var normal = distributions.Normal(average /* mean */, stdev /* std deviation */);
    }

    shelters.forEach(e => {
        let len = e.foodServed.length;
        let sum = 0;
        if(len > 0){
            sum += e.foodServed[len - 1].foodInKgsServed / e.foodServed[len - 1].peopleCount; 
        }
        if (len > 1){
            sum += e.foodServed[len - 2].foodInKgsServed / e.foodServed[len - 2].peopleCount;
        }
        if(len > 2){
            sum +=e.foodServed[len - 3].foodInKgsServed / e.foodServed[len - 3].peopleCount;
        }
        if(len == 0){
            sum = average*len;
        }
        if(len < 0){
            console.log("Something went terribly wrong");
        }
        let avg = sum / len;
        matchPercentages.push({shelter : e, percentile : normal !== undefined ? normal.cdf(avg) : 0});
    })

    return matchPercentages;
}

module.exports = function TopXMatches(Offer, x){
    matches = GetNeedPercentages(Offer);
    if(matches === false){
        return [];
    }
    matches = matches.sort((e,f) =>{
        if(e.percentile > f.percentile) return 1;
        if(e.percentile < f.percentile) return  -1;
        return 0;
    });
    let needful = [];
    while(x > needful.length && matches.length > 0){
        needful.push(matches.pop());
    }
    return needful;
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
