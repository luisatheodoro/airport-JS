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

  })

});