
let configTeclat = {prevent_repeat : true}
let eventTeclat = new window.keypress.Listener(this,configTeclat)

eventTeclat.simple_combo('w',sonidoW);
eventTeclat.simple_combo('a',sonidoA);
eventTeclat.simple_combo('s',sonidoS);
eventTeclat.simple_combo('d',sonidoD);
eventTeclat.simple_combo('q',sonidoQ);
eventTeclat.simple_combo('e',sonidoE);
eventTeclat.simple_combo('r',sonidoR);
eventTeclat.simple_combo('f',sonidoF);
eventTeclat.simple_combo(' ',sonidoSpaceBar);

eventTeclat.sequence_combo('1 2 3 4',sonidoFondo1);
eventTeclat.sequence_combo('5 6 7 8',sonidoFondo2);
eventTeclat.sequence_combo('0 9 8 7',sonidoFondo3);

function sonidoW(){

    var snd = new Audio("run-112647.mp3");
    snd.play();

}

function sonidoA(){

    var snd = new Audio("pistol-shot-233473.mp3");
    snd.play();
  
}

function sonidoS(){

    var snd = new Audio("punch-or-kick-sound-effect-2-239695.mp3");
    snd.play();
  
}

function sonidoD(){

    var snd = new Audio("shotgun-03-38220.mp3");
    snd.play();
  
}

function sonidoSpaceBar(){

    var snd = new Audio("boing-6222.mp3");
    snd.play();
  
}

function sonidoQ(){

    var snd = new Audio("ringtones-pink-panther.mp3");
    snd.play();
  
}

function sonidoE(){

    var snd = new Audio("ringtones-pink-panther.mp3");
    snd.play();
  
}

function sonidoR(){

    var snd = new Audio("mario-bros game over.mp3");
    snd.play();
  
}

function sonidoF(){

    var snd = new Audio("mario-bros-here-we-go-hoo.mp3");
    snd.play();
  
}

function sonidoFondo1(){

    var snd = new Audio("ringtones-super-mario-bros.mp3");
    snd.play();
  
}

function sonidoFondo2(){

    var snd = new Audio("juego-de-tronos-1.mp3");
    snd.play();
  
}

function sonidoFondo3(){

    var snd = new Audio("mision-imposible-peliculas-.mp3");
    snd.play();
  
}
