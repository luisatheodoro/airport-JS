function Plane(airport) {
  this.airport = airport;
  this.landed = null;
}

Plane.prototype = {
  land: function () {
    if (this.airport.instructPlaneToLand()) {
      this.landed = true;
    }
  }
};