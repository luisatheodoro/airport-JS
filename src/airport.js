function Airport() {
  this.weather = new Weather();
  this.capacity = 10;
  this.hangar = [];

}

Airport.prototype = {

  instructPlaneToLand: function(plane) {
    if (this.weather.getWeather() === 'Stormy') {
      throw new Error(`${plane} cannot land due to bad weather`)
    }else if (this.hangar.length >= this.capacity) {
      throw new Error(`${plane} cannot land due to airport full hangar`)
    }else if (this.hangar.indexOf(plane) !== -1) {
      throw new Error(`${plane} cannot land due to airplane already being in this airport`)
    }
    this.hangar.push(plane);
    return true;
  },

  instructPlaneToTakeOff: function(plane) {
    if (this.weather.getWeather() === 'Stormy') {
      throw new Error(`${plane} cannot take off due to bad weather`)
    }else if (this.hangar.indexOf(plane) === -1) {
      throw new Error(`${plane} cannot take off as this plane is not in this airport`)
    }
    this.hangar.splice(this.hangar.indexOf(plane), 1);
    return true;
  }

};