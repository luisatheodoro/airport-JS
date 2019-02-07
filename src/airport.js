function Airport() {
  this.weather = new Weather();

}

Airport.prototype = {

  instructPlaneToLand: function(plane) {
    return true;
  },

  instructPlaneToTakeOff: function(plane) {
    if (this.weather.getWeather() === 'Stormy') {
      throw new Error(`${plane} cannot take off due to bad weather`)
    }
    return true;
  }


};