describe('Plane', function() {
  var airFrance787;
  var cityAirport;

  beforeEach(function () {
    cityAirport = new Airport();
    airFrance787 = new Plane(cityAirport);
  });

  describe('#landed', function () {
    it('returns true if plane was able to land', function () {
      spyOn(cityAirport, 'instructPlaneToLand').and.returnValue(true);
      airFrance787.land();
      expect(airFrance787.landed).toEqual( true);
    });

    it("Returns false when plane was not able to land", function(){
      spyOn(cityAirport, 'instructPlaneToLand').and.returnValue(false);
      airFrance787.land();
      expect(airFrance787.landed).toEqual( false);
    });
  });

  describe("#land", function () {
    it("Plane cannot land if plane is already in land", function(){
      spyOn(cityAirport, 'instructPlaneToLand').and.returnValue(true);
      airFrance787.landed = true;
      expect(function() { airFrance787.land() }).toThrowError("Cannot land, because plane is already landed");
    });
  });
});