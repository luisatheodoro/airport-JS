describe('Weather', function () {
  var weather;

  beforeEach(function () {
    weather = new Weather();
  });

  describe('#getWeather', function () {

    it('returns sunny', function () {
      expect(weather.getWeather()).toEqual("Sunny");
    })
  })
});
