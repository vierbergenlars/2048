function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.getTileNumber = function() {
	return parseInt(Math.log(this.value)/Math.log(2))-1;
}

Tile.prototype.getDisplayText = function() {
	var texts = ["E","L","F","!","als","serieuze","ploeg","Industria","2014","2015","E.L.F!"];
	return texts[this.getTileNumber()];
}

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};
