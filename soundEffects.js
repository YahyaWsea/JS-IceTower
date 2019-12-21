var soundEffects = {
    'jumb_high' : 'assets/Sound Effects/jump_hi.wav',
    'jumb_low' : 'assets/Sound Effects/jump_lo.wav',
    'failing' : 'assets/Sound Effects/falling.wav',
}
// change src to the desired sound effect then .play()
var audio = document.getElementsByTagName('audio')[0];

function jump(){    
    audio.src = soundEffects['jumb_low'];
    audio.play();
    
}

function fail(){
    audio.src = soundEffects['failing'];
    audio.play();
}