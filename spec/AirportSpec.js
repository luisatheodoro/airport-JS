describe('Airport', function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
    airfrance787 = { name : "AirFrance 787" };

  });

  describe("#instructPlaneToLand", function() {
    it("Can land a plane", function(){
      expect(airport.instructPlaneToLand(airfrance787.name)).toEqual( true);
    });

  });

  describe("#instructPlaneToTakeOff", function () {
    it("Can take off plane safely", function () {
      airport.instructPlaneToLand(airfrance787.name);
      expect(airport.instructPlaneToTakeOff(airfrance787.name)).toEqual(true);
    });

  });

});