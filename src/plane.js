function Plane(name, airport) {
  this.name = name;
  this.airport = airport;
  this.landed = false;
}

Plane.prototype = {
  land: function () {
    if (this.landed) {
      throw new Error('Cannot land, because plane is already landed');
    } else if (this.airport.canLand(this.name)) {
      this.landed = true;
    }
  },

  takeOff: function () {
    if (!this.landed) {
      throw new Error('Cannot take off, because plane has already taken off or is not in this airport');
    }else if (this.airport.canTakeOff(this.name)) {
      this.landed = false;
    }
  }
};
