describe('Plane', function() {
  var airFrance787;
  var cityAirport;

  beforeEach(function () {
    cityAirport = new Airport();
    airFrance787 = new Plane('AirFrance 787', cityAirport);
  });

  describe('#landed', function () {
    it('returns true if plane was able to land', function () {
      spyOn(cityAirport, 'canLand').and.returnValue(true);
      airFrance787.land();
      expect(airFrance787.landed).toEqual( true);
    });

    it("Returns false when plane was not able to land", function(){
      spyOn(cityAirport, 'canLand').and.returnValue(false);
      airFrance787.land();
      expect(airFrance787.landed).toEqual( false);
    });

    it("Returns false to '#landed' when plane has taken off" , function(){
      spyOn(cityAirport, 'canLand').and.returnValue(true);
      airFrance787.land();
      spyOn(cityAirport, 'canTakeOff').and.returnValue(true);
      airFrance787.takeOff();
      expect(airFrance787.landed).toEqual( false);
    });
  });

  describe("#land", function () {
    it("Plane cannot land if plane is already in land", function(){
      spyOn(cityAirport, 'canLand').and.returnValue(true);
      airFrance787.landed = true;
      expect(function() { airFrance787.land() }).toThrowError("Cannot land, because plane is already landed");
    });
  });

  describe('#take_off', function () {
    it("Plane cannot take off if plane is already flying", function(){
      airFrance787.landed = false;
      expect(function() { airFrance787.takeOff(); }).toThrowError("Cannot take off, because plane has already taken off or is not in this airport");
    });
  });
});
