function Plane(airport) {
  this.airport = airport;
  this.landed = false;
}

Plane.prototype = {
  land: function () {
    if (this.landed) {
      throw new Error('Cannot land, because plane is already landed');
    } else if (this.airport.instructPlaneToLand()) {
      this.landed = true;
    }
  },

  takeOff: function () {
    if (!this.landed) {
      throw new Error('Cannot take off, because plane has already taken off');
    }
  }
};