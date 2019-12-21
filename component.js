function component(width, height, color, x, y) { //x,y position at x-axis, ya-axis
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.color = color
}
component.prototype.draw = function () {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);

}