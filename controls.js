var counterLeft=0; //counters to increse the speed of charcter when the charcter moves continuously
var counterRight=0;
function controls(characterName) {
    characterName.speedX = 0;
    if (keys[37]) { //left arrow
        counterLeft++;
        character1.image.src = charLeft;
        if (characterName.x < 0) { //to not exceed area limit
            characterName.x = 0;
        } else {
            if(counterLeft>30){counterLeft=30}
            characterName.speedX = -5-counterLeft/3;
        }

    }

    if (keys[39]) { //right arrow
        counterRight++;
        character1.image.src = charRight;
        if (characterName.x > gameArea.width - 30) { //to not exceed area limit
            characterName.x = gameArea.width - 30;
        } else {
            if(counterRight>30){counterRight=30}
            characterName.speedX = 5+counterRight/3;
        }
    }

    if (keys[32] && !characterName.jumping) { //space
        character1.image.src = charJump;
        if((characterName.speedX<-13 || characterName.speedX>13)&&levelCount<3){
            characterName.speedY = -12.5; 
        }
        else if ((characterName.speedX<-9 || characterName.speedX>9)&&levelCount>=3){
            characterName.speedY = -15; 
        }
        else {
            characterName.speedY = -10;
        }
        //characterName.jumping = true;
    }
}