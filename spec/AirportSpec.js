describe('Airport', function() {
  var airport;
  var weather;

  beforeEach(function() {
    airport = new Airport();
    weather = airport.weather;
    airfrance787 = { name : "AirFrance 787" };

  });

  describe("#instructPlaneToLand", function() {
    it("Can land a plane", function(){
      expect(airport.instructPlaneToLand(airfrance787.name)).toEqual( true);
    });
    it("Cannot land plane if weather is stormy", function () {
      spyOn(weather, 'getWeather').and.returnValue('Stormy');
      expect(function() { airport.instructPlaneToLand(airfrance787.name); }).toThrowError("AirFrance 787 cannot land due to bad weather");
    });

  });

  describe("#instructPlaneToTakeOff", function () {
    it("Can take off plane safely", function () {
      airport.instructPlaneToLand(airfrance787.name);
      expect(airport.instructPlaneToTakeOff(airfrance787.name)).toEqual(true);
    });

    it("Cannot take off plane if weather is stormy", function () {
      spyOn(weather, 'getWeather').and.returnValue('Stormy');
      expect(function() { airport.instructPlaneToTakeOff(airfrance787.name); }).toThrowError("AirFrance 787 cannot take off due to bad weather");
    });

  });

});