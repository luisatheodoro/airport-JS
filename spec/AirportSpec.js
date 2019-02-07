describe('Airport', function() {
  var airport;
  var weather;

  beforeEach(function() {
    airport = new Airport();
    cityAirport = new Airport();
    stansteadAirport = new Airport();
    weather = airport.weather;
    airfrance787 = { name : "AirFrance 787" };
  });

  describe("#instructPlaneToLand", function() {
    it("Can land a plane", function(){
      spyOn(weather, 'getWeather').and.returnValue('Sunny');
      expect(airport.instructPlaneToLand(airfrance787.name)).toEqual( true);
    });
    it("Cannot land plane if weather is stormy", function () {
      spyOn(weather, 'getWeather').and.returnValue('Stormy');
      expect(function() { airport.instructPlaneToLand(airfrance787.name); }).toThrowError("AirFrance 787 cannot land due to bad weather");
    });
    it("Cannot land plane if airport hangar is full", function () {
      spyOn(weather, 'getWeather').and.returnValue('Sunny');
      airport.capacity = 0;
      expect(function() { airport.instructPlaneToLand(airfrance787.name); }).toThrowError("AirFrance 787 cannot land due to airport full hangar");
    });
    it("Cannot land plane if it is already landed in this airport", function() {
      spyOn(weather, 'getWeather').and.returnValue('Sunny');
      cityAirport.instructPlaneToLand(airfrance787.name);
      expect(function() { cityAirport.instructPlaneToLand(airfrance787.name); }).toThrowError("AirFrance 787 cannot land due to airplane already being in this airport");
    });
  });

  describe("#instructPlaneToTakeOff", function () {
    it("Can take off plane safely", function () {
      spyOn(weather, 'getWeather').and.returnValue('Sunny');
      airport.instructPlaneToLand(airfrance787.name);
      expect(airport.instructPlaneToTakeOff(airfrance787.name)).toEqual(true);
    });

    it("Cannot take off plane if weather is stormy", function () {
      spyOn(weather, 'getWeather').and.returnValue('Sunny');
      airport.instructPlaneToLand(airfrance787.name);
      spyOn(weather, 'isStormy').and.returnValue(true);
      expect(function() { airport.instructPlaneToTakeOff(airfrance787.name); }).toThrowError("AirFrance 787 cannot take off due to bad weather");
    });

    it("Cannot take off if plane is not in the airport", function() {
      spyOn(weather, 'getWeather').and.returnValue('Sunny');
      expect(function() { airport.instructPlaneToTakeOff(airfrance787.name); }).toThrowError("AirFrance 787 cannot take off as this plane is not in this airport");
    });
  });

  describe("#Hangar", function () {
    it("Stores plane in the hangar when landed", function () {
      spyOn(weather, 'getWeather').and.returnValue('Sunny');
      airport.instructPlaneToLand(airfrance787.name);
      expect(airport.hangar).toEqual([airfrance787.name]);
    });
    it("Will set hangar status to empty when all planes have taken off", function(){
      spyOn(weather, 'getWeather').and.returnValue('Sunny');
      airport.instructPlaneToLand(airfrance787.name);
      airport.instructPlaneToTakeOff(airfrance787.name);
      expect(airport.hangar).toEqual( []);
    });
  });

  describe("#capacity", function () {
    it("Can change hangar capacity so different airports can use the app", function() {
      cityAirport.capacity = 2;
      expect(cityAirport.capacity).toEqual( 2);
      stansteadAirport.capacity = 3;
      expect(stansteadAirport.capacity).toEqual( 3);
    });
  });
});
