let destinationDistanceData = new Array();

function calculateDistanceBetweenTwoLocations(origin, destinations){    
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin],
        destinations: Array(destinations),
        travelMode: 'DRIVING',
      }, callback);

      return destinationDistanceData;
}

function callback(response, status) {
    if (status == 'OK') {
      var origins = response.originAddresses;
      var destinations = response.destinationAddresses;
  
      for (var i = 0; i < origins.length; i++) {
        var results = response.rows[i].elements;
        for (var j = 0; j < results.length; j++) {
          var element = results[j];
          var distance = element.distance.text;
          var to = destinations[j];
          let pairedDestinationDistance = {dest: to, dist: distance};
          destinationDistanceData.push(pairedDestinationDistance);
        }
      }
    }
  }