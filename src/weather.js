function Weather() {
}

Weather.prototype = {
  _randomWeather: function () {
    let forecasts = ['Sunny', 'Sunny', 'Sunny', 'Sunny', 'Stormy'];
    return forecasts[Math.floor(Math.random() * 5)];
  },

  getWeather: function () {
    return this._randomWeather();
  },
  isStormy: function () {
    return this.getWeather() === 'Stormy';
  }
};
