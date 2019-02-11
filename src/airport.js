function Airport() {
  this.weather = new Weather();
  this.capacity = 10;
  this.hangar = [];

}

Airport.prototype = {

  canLand: function(plane) {
    this._isAlreadyParked(plane);
    this._isCapacityFull(plane);
    this._throwErrorIfStormy(plane, "land");
    this._addPlaneToHangar(plane);
    return true;
  },

  canTakeOff: function(plane) {
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

  _isAlreadyParked: function(plane) {
    if (this._findPlaneIndex(plane) !== -1) {
      throw new Error(`${plane} cannot land due to airplane already being in this airport`)
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

  _addPlaneToHangar: function(plane) {
    this.hangar.push(plane);
  },

  _isCapacityFull: function(plane) {
    if (this.hangar.length >= this.capacity) {
      throw new Error(`${plane} cannot land due to airport full hangar`)
    }
  },
};
