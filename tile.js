function tile(width, height, color, x, y, imageSrc) {
    component.call(this, width, height, color, x, y)
    this.image = new Image();
    this.image.src = imageSrc;
    this.id = tileID;
}
tile.prototype = Object.create(component.prototype);
tile.prototype.drawTile = function () {
    //context.fillStyle = this.color;
    //context.fillRect(this.x, this.y, this.width, this.height);
    //console.log(this.image);
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
}