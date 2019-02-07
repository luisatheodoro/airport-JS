describe('Weather', function () {
  var weather;

  beforeEach(function () {
    weather = new Weather();
  });

  describe('#getWeather', function () {

    it('returns sunny', function () {
      spyOn(Math,'random').and.returnValue(0);
      expect(weather.getWeather()).toEqual("Sunny");
    });

    it('returns true if is stormy', function(){
      spyOn(weather,'getWeather').and.returnValue("Stormy");
      expect(weather.isStormy()).toEqual(true);
    });
  })
});
