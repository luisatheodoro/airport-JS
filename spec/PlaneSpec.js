describe('Plane', function() {
  var airFrance787;
  var cityAirport;
  var gatwickAirport;

  beforeEach(function () {
    cityAirport = {
      name: function () {
        return 'City';
      },
      canLand: function (plane) {
        return true;
      },
      canTakeOff: function (plane) {
        return true;
      }
    };
    gatwickAirport = {
      name: function () {
        return 'Gatwick';
      },
      canLand: function (plane) {
        return true;
      },
      canTakeOff: function (plane) {
        return true;
      }
    };
    airFrance787 = new Plane('AirFrance 787');
  });

  describe('#landed', function () {
    it('returns true if plane was able to land', function () {
      airFrance787.land(cityAirport);
      expect(airFrance787.landed).toEqual( true);
    });

    it("Returns false when plane was not able to land", function(){
      spyOn(cityAirport, 'canLand').and.returnValue(false);
      airFrance787.land(cityAirport);
      expect(airFrance787.landed).toEqual( false);
    });

    it("Returns false to '#landed' when plane has taken off" , function(){
      airFrance787.land(cityAirport);
      airFrance787.takeOff(cityAirport);
      expect(airFrance787.landed).toEqual( false);
    });
  });

  describe("#land", function () {
    it("Plane cannot land if plane is already in land", function(){
      airFrance787.landed = true;
      expect(function() { airFrance787.land(cityAirport) }).toThrowError("Cannot land, because plane is already landed");
    });
  });

  describe('#take_off', function () {
    it("Plane cannot take off if plane is already flying", function(){
      airFrance787.landed = false;
      expect(function() { airFrance787.takeOff(cityAirport) }).toThrowError("Cannot take off, because plane has already taken off or is not in this airport");
    });
  });

  describe('#_isLandedAt', function () {
    it("Plane saves the airport it landed", function(){
      airFrance787.land(cityAirport);
      expect(airFrance787._isLandedAt.length).toBe(1);
    });

    it("Will set _isLandedAt status to empty when all plane has taken off from airport", function(){
      airFrance787.land(cityAirport);
      airFrance787.takeOff(cityAirport);
      expect(airFrance787._isLandedAt.length).toBe(0);
    });
  });
});
