//creating the game area "container"
var state = 0 // 0 for idle, 1 pause, 3 running
var intervalTime = 0;
var started = 0; //flag if game not started draw ready tiles
var level = 20; //starting level speed
// const gameArea = document.createElement("canvas");

const gameArea = document.getElementById("game_area");
var scoreSpan = document.getElementById("score");
var levelSpan = document.getElementById("level");
gameArea.width = 700;
gameArea.height = window.innerHeight;
//gameArea.style.backgroundColor = 'blue';

// document.body.insertBefore(gameArea, document.body.childNodes[0]);
const context = gameArea.getContext('2d');
var scoreDiv = document.getElementById("score");
var levelDiv = document.getElementById("level");
var tileID = 0;
var score = 0;
var levelCount = 1;
//////////////////////////////////////////////////////////////////////////////

//add eventlistener to windows when keyDown or Key Up
const keys = {};
window.addEventListener('keydown', function (e) {
    keys[e.keyCode] = true;
    //check if game is idle or paused
    if (state != 3) {
        state = 3;
        intervalTime = level;
        // console.log(intervalTime);
        //gameSpeed();
        refreshRate = setInterval(updateGame, intervalTime); //resume game
    }
    if (e.keyCode == 112 || e.keyCode == 80) // press p for pause
    {
        state = 1;
        clearInterval(refreshRate);
    }

});
window.addEventListener('keyup', function (e) {
    counterLeft=counterRight=0; 
    keys[e.keyCode] = false;
    character1.image.src = charFront;
})

//creating tiles with random size at random position every 100 frames '2 seconds'
function randomizeTiles(y = 0) {
    const position = Math.floor(Math.random() * (gameArea.width - 175));
    const maxWidth = 400;
    const minWidth = 200;
    const width = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);
    //adding tile at specific height (y) for start
    if (y != 0) {
        tileID++;
        tilesArray.push(new tile(width, 20, "green", position, y, 'images/tile.png'))
    }
    else if (frames == 1 || (levelCount == 1 && frames % 100 == 0 )) {
        tileID++;
        tilesArray.push(new tile(width, 20, "green", position, 50, 'images/tile.png'))
    }
    else if (levelCount == 2 && frames % 50 == 0) {
        tileID++;
        tilesArray.push(new tile(width, 20, "green", position, 50, 'images/tile.png'))
    }
    else if (levelCount == 3 && frames % 33 == 0) {
        tileID++;
        tilesArray.push(new tile(width, 20, "green", position, 50, 'images/tile.png'))
    }

}