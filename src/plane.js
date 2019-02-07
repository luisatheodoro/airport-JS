function Plane(airport) {
  this.airport = airport;
  this.landed = false;
}

Plane.prototype = {
  land: function () {
    if (this.airport.instructPlaneToLand()) {
      this.landed = true;
    }
  }
};