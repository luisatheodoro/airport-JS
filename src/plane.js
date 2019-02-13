function Plane(name) {
  this.name = name;
  this.landed = false;
}

Plane.prototype = {
  land: function (airport) {
    if (this.landed) {
      throw new Error('Cannot land, because plane is already landed');
    } else if (airport.canLand(this.name)) {
      this.landed = true;
    }
  },

  takeOff: function (airport) {
    if (!this.landed) {
      throw new Error('Cannot take off, because plane has already taken off or is not in this airport');
    }else if (airport.canTakeOff(this.name)) {
      this.landed = false;
    }
  }
};
