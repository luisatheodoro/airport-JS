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
    this._isNotParked(plane);
    this._throwErrorIfStormy(plane, "take off");
    this._removePlaneFromHangar(plane);
    return true;
  },

  _isNotParked: function(plane) {
    if (this._findPlaneIndex(plane) === -1){
      throw new Error(`${plane} cannot take off as this plane is not in this airport`)
    }
  },

  _findPlaneIndex: function(plane) {
    return this.hangar.indexOf(plane)
  },

  _throwErrorIfStormy: function(plane, situation) {
    if (this.weather.isStormy()) {
      throw new Error(`${plane} cannot ${situation} due to bad weather`)
    }
  },

  _removePlaneFromHangar: function(plane) {
    this.hangar.splice(this._findPlaneIndex(plane), 1);
  },
};
