let frames = 1;

function start() {
    //frames = 0;
    refreshRate = setInterval(updateGame, intervalTime);
}

function clear() {
    context.clearRect(0, 0, gameArea.width, gameArea.height);
}

function touchTile(character, tile) {
    var characterLeft = character.x;
    var characterRight = character.x + (character.width);
    var characterBottom = character.y + (character.height);
    var tileLeft = tile.x;
    var tileRight = tile.x + (tile.width);
    var tileTop = tile.y;
    if (characterBottom - tileTop < 15 && characterBottom - tileTop > -5 && characterRight <= tileRight + character.width
        && characterLeft + character.width >= tileLeft && character.gravitySpeed >= Math.abs(character.speedY)) {
        character.gravity = 0;
        character.gravitySpeed = levelCount;
        character.speedY = 0;
        character.jumping = false;
        return true
    }
}



// create selected character
var character1 = selectCharacter();
////////////////////////////////////////////////////////////

const tilesArray = [];
var bg = new Image();
bg.src = ""
function updateGame() {
    if(character1.y > gameArea.height){
        clearInterval(refreshRate);
        GameOver("Game Over");
    }
    
    clear();
    frames += 1;
    randomizeTiles();
    character1.gravity = 0.4;
    tilesArray.forEach((tile) => {
        tile.y += levelCount;
        tile.drawTile();

    })
    if(tilesArray[0])
        if (tilesArray[0].y > gameArea.height) { // to remove tile when reach the bottom 
            tilesArray.shift();
            if (tilesArray[0] == character1.tile) {
                character1.tile = null;
            }
        }
    for (let i = 0; i < tilesArray.length; i++) {
        if (touchTile(character1, tilesArray[i])) {
            if (character1.tile == null || character1.tile.id != tilesArray[i].id) {
                character1.tile = tilesArray[i];
                touching = true;
                // console.log(tilesArray[i].id);
                gameScore(tilesArray[i].id);
                gameLevel();
                //gameSpeed();
            }
        };
    }
    controls(character1);
    character1.newPostion();
    character1.drawCharacter();
    if (state == 0)
        Idle();
    if (state == 1)
        Pause();
}
function gameScore(id) {
    console.log(id);
    score = id * 5;
    jump();
    scoreSpan.innerHTML = score;
}


function gameLevel() {
    levelSpan.innerHTML = levelCount;
    if (score == 100) {
        levelCount += 1;
    }
    if (score == 200) {
        levelCount += 1;
    }

        // console.log(scoreLevel);
    
}
// function gameSpeed() {
//     if(score % 20 ===0){
//         clearInterval(refreshRate);
//         intervalTime -=2;
//         refreshRate = setInterval(updateGame, intervalTime);
//     }
// }


//pause game
function Pause() {

}

//create Tile with screen width for standing or new levels
 function BigTile(){
     tileID++;
     tilesArray.push(new tile(gameArea.width+20, 20, "green", -10, window.innerHeight-20, 'images/tile.png'))
}

//Idle state
function Idle() {
   state = 0;

    if(!started){
        BigTile()
        for(let i = window.innerHeight-155; i >= 50; i = i - 100)
            randomizeTiles(i);
        for(let i = 0; i < tilesArray.length; i++){
            tilesArray[i].image = new Image();
            tilesArray[i].image.src = 'images/tile.png';
            tilesArray[i].image.onload = function() {
                context.drawImage(tilesArray[i].image, tilesArray[i].x, tilesArray[i].y, tilesArray[i].width, tilesArray[i].height);
            }
        }
        started = 1
        clearInterval(refreshRate);
    }

}

function GameOver(){
    var gameOver = document.getElementById("GameOver");
    var gameCanvas = document.getElementsByTagName("canvas")[0];
    gameOver.style.display = 'block';
    gameCanvas.style.opacity = 0.5;
    fail();
    
}

window.onload = function(){
    start();
}