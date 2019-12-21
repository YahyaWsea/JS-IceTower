var charLeft = 'images/left.png';
var charRight = 'images/right.png';
var charFront = 'images/idle.png';
var charJump = 'images/jump.png';
var charWidth = 40;
var charHeight = 50;

function Character(CharacterWidth, CharacterHeight, CharacterColor, x, y, imageSrc) {
    component.call(this, CharacterWidth, CharacterHeight, CharacterColor, x, y)
    this.jumping = false;
    this.speedX = 0;
    this.speedY = 0;
    this.gravitySpeed = 0;
    this.image = new Image();
    this.image.src = imageSrc;
    this.tile = null;
}
Character.prototype = Object.create(component.prototype);

//function to determine new position of charcter 
Character.prototype.newPostion = function () {
    this.gravitySpeed += this.gravity;
    this.x += this.speedX;
    this.y += this.speedY + this.gravitySpeed;
    this.hitBottom();
}

//function to check if charcter reach a groound or not
Character.prototype.hitBottom = function () {
    var rockbottom = gameArea.height - this.height;
    if (this.y >= rockbottom && started == 0) {
        this.y = rockbottom;
        this.gravitySpeed = 0;
        this.speedY = 0;
        this.jumping = false;
        return true;
    }
    return false;

}
Character.prototype.drawCharacter = function () {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
}
function selectCharacter(){
    var url = new URL(window.location.href);
    var char = url.searchParams.get("char");
    if(char == 1){ //Mario Character
        charLeft = 'assets/images/left.png';
        charRight = 'assets/images/right.png';
        charFront = 'assets/images/front.png';
        charJump = 'assets/images/jump.png';
        charWidth = 40;
        charHeight = 50;
    }
    var character = new Character(charWidth, charHeight, "orange", 350, gameArea.height - 70, charFront);
    return character; // return selected
}
