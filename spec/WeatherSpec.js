describe('Weather', function () {
  var weather;

  beforeEach(function () {
    weather = new Weather();
  });

  describe('#getWeather', function () {

    it('returns sunny', function () {
      spyOn(Math,'random').and.returnValue(0);
      expect(weather.getWeather()).toEqual("Sunny");
    })
  })
});
