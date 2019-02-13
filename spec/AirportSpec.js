describe('Airport', function () {
  let weather;
  let cityAirport;
  let stansteadAirport;
  let airfrance787;
  let ryanAir677;

  beforeEach(function () {
    cityAirport = new Airport("City");
    stansteadAirport = new Airport("Stanstead");
    weather = cityAirport.weather;
    airfrance787 = {name: "AirFrance 787"};
    ryanAir677 = {name: "Ryan Air 677"};
  });

  describe("#canLand", function () {
    it("Can land a plane", function () {
      spyOn(weather, 'getWeather').and.returnValue('Sunny');
      expect(cityAirport.canLand(airfrance787.name)).toEqual(true);
    });
    it("Cannot land plane if weather is stormy", function () {
      spyOn(weather, 'getWeather').and.returnValue('Stormy');
      expect(function () {
        cityAirport.canLand(airfrance787.name);
      }).toThrowError("AirFrance 787 cannot land due to bad weather");
    });
    it("Cannot land plane if airport hangar is full", function () {
      spyOn(weather, 'getWeather').and.returnValue('Sunny');
      cityAirport.capacity = 0;
      expect(function () {
        cityAirport.canLand(airfrance787.name);
      }).toThrowError("AirFrance 787 cannot land due to airport full hangar");
    });
    it("Cannot land plane if it is already landed in this airport", function () {
      spyOn(weather, 'getWeather').and.returnValue('Sunny');
      cityAirport.canLand(airfrance787.name);
      expect(function () {
        cityAirport.canLand(airfrance787.name);
      }).toThrowError("AirFrance 787 cannot land due to airplane already being in this airport");
    });
  });

  describe("#canTakeOff", function () {
    it("Can take off plane safely", function () {
      spyOn(weather, 'getWeather').and.returnValue('Sunny');
      cityAirport.canLand(airfrance787.name);
      expect(cityAirport.canTakeOff(airfrance787.name)).toEqual(true);
    });

    it("Cannot take off plane if weather is stormy", function () {
      spyOn(weather, 'getWeather').and.returnValue('Sunny');
      cityAirport.canLand(airfrance787.name);
      spyOn(weather, 'isStormy').and.returnValue(true);
      expect(function () {
        cityAirport.canTakeOff(airfrance787.name);
      }).toThrowError("AirFrance 787 cannot take off due to bad weather");
    });

    it("Cannot take off if plane is not in the airport", function () {
      spyOn(weather, 'getWeather').and.returnValue('Sunny');
      cityAirport.canLand(ryanAir677.name);
      expect(function () {
        cityAirport.canTakeOff(airfrance787.name);
      }).toThrowError("AirFrance 787 cannot take off as this plane is not in this airport");
    });
  });

  describe("#Hangar", function () {
    it("Stores plane in the hangar when landed", function () {
      spyOn(weather, 'getWeather').and.returnValue('Sunny');
      cityAirport.canLand(airfrance787.name);
      expect(cityAirport.hangar).toEqual([airfrance787.name]);
    });
    it("Will set hangar status to empty when all planes have taken off", function () {
      spyOn(weather, 'getWeather').and.returnValue('Sunny');
      cityAirport.canLand(airfrance787.name);
      cityAirport.canTakeOff(airfrance787.name);
      expect(cityAirport.hangar).toEqual([]);
    });
  });

  describe("#capacity", function () {
    it("Can change hangar capacity so different airports can use the app", function () {
      cityAirport.capacity = 2;
      expect(cityAirport.capacity).toEqual(2);
      stansteadAirport.capacity = 3;
      expect(stansteadAirport.capacity).toEqual(3);
    });
  });
});
