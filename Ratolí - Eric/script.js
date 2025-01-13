let miPantalla;
let ctx;
let FPS = 50;
let imatgeProta;
let imatgeEnemic1;

let anchoF = 50;
let altoF = 50;

let hierba = '#5FD13C';
let agua = '#2BC7FF';
let tierra = '#815418';
let pared = '#C7430B';
let llave1 = '#FFF700';
let llave2 = '';
let puerta1 = '#3D20F9';
let puerta2 = '';

let escenari = [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [1, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 1],
    [1, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 4, 0, 1],
    [1, 0, 0, 0, 2, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 2, 0, 2, 0, 1],
    [1, 0, 0, 0, 2, 0, 2, 0, 0, 2, 2, 2, 2, 0, 0, 2, 0, 2, 0, 1],
    [1, 0, 0, 0, 2, 0, 2, 0, 0, 2, 2, 0, 2, 0, 0, 2, 0, 2, 0, 1],
    [1, 0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 1],
    [1, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 2, 0, 1],
    [1, 0, 2, 0, 0, 2, 0, 2, 2, 2, 2, 0, 0, 2, 0, 2, 0, 2, 0, 1],
    [1, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 2, 2, 0, 2, 0, 2, 0, 1],
    [1, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 1],
    [1, 0, 2, 2, 2, 2, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1],
    [1, 0, 2, 0, 0, 2, 2, 2, 0, 2, 0, 0, 2, 2, 2, 0, 2, 0, 0, 0],
    [1, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0],
    [1, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]


function inicializar() {

    miPantalla = document.getElementById("pantalla")
    ctx = miPantalla.getContext('2d');
    imatgeProta = new Image();
    imatgeProta.src = './Caballero pixel art Juego.png'

    imatgeEnemic1 = new Image();
    imatgeEnemic1.src = './Esqueleto enemigo juego.png'

    setInterval(function () {
        principal()
    }, 1000 / FPS)
}

function principal() {

    borrarPantalla()
    dibuixaEscenari()
    pri1.dibujo()
    p1.dibuixa()
    p2.dibuixa()
    p3.dibuixa()
    p1.mueve()
    p2.mueve()
    p3.mueve()
}

function borrarPantalla() {

    miPantalla.width = 1000;
    miPantalla.height = 800;
}

let player = function (x, y, ancho, alto,) {

    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.llave1 = false;
    this.llave2 = false;

    this.muerte = function(y,x){

        if( this.x == x && this.y == y){

            alert("Has muerto")
            this.x = 900
            this.y = 700
            this.llave1 = false;
            escenari[3][17] = 4
        }
    }

    this.dibujo = function () {

        ctx.drawImage(imatgeProta, this.x, this.y)
    }

    this.colisio = function (y, x) {

        let choque = false;

        if (escenari[y][x] == 1 || escenari[y][x] == 3 || escenari[y][x] == 0) {

            choque = true;
        }

        if (escenari[y][x] == 4) {

            this.llave1 = true;
            alert('Has cogido la primera llave')
            escenari[y][x] = 2

        }

        if (escenari[y][x] == 6) {

            if (this.llave1 == true) {

                alert('Has entrado en la puerta')

            } else {

                alert('No tienes la llave')
            }

        }

        return choque

    }

    this.arriba = function () {

        if (this.colisio((this.y - 50) / 50, this.x / 50)) {


        } else {

            this.y -= 50
        }
    }

    this.abajo = function () {

        if (this.colisio((this.y + 50) / 50, this.x / 50)) {


        } else {

            this.y += 50
        }
    }

    this.derecha = function () {

        if (this.colisio(this.y / 50, (this.x + 50) / 50)) {


        } else {

            this.x += 50
        }
    }

    this.izquierda = function () {

        if (this.colisio(this.y / 50, (this.x - 50) / 50)) {


        } else {

            this.x -= 50
        }
    }
}

let personaje = function (x, y, ancho, alto, vel) {

    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.vel = vel;
    this.retraso = 25;
    this.fotograma = 0;



    this.dibuixa = function () {

        ctx.drawImage(imatgeEnemic1, this.x, this.y)
    }

    this.mueve = function () {

        pri1.muerte(this.y,this.x)

        if (this.fotograma < this.retraso) {

            this.fotograma++

        } else {

            this.fotograma = 0

            let posicio = Math.floor(Math.random() * 4);

            if (posicio == 0) {

                if (this.colisio(((this.y - 50) / 50), this.x / 50)) {


                } else {

                    this.y -= 50
                }
            }

            else if (posicio == 1) {

                if (this.colisio(((this.y + 50) / 50), this.x / 50)) {


                } else {

                    this.y += 50
                }
            }

            else if (posicio == 2) {

                if (this.colisio(this.y / 50, (this.x + 50) / 50)) {


                } else {

                    this.x += 50
                }
            }

            else if (posicio == 3) {

                if (this.colisio(this.y / 50, (this.x - 50) / 50)) {


                } else {

                    this.x -= 50
                }
            }
        }
    }

    this.colisio = function (y, x) {

        let choque = false;

        if (escenari[y][x] != 2) {

            choque = true;
        }

        return choque

    }
}

let p1 = new personaje(750, 350, 20, 20, 1);
let p2 = new personaje(200, 350, 50, 50, 1);
let p3 = new personaje(650, 500, 70, 70, 1);
let pri1 = new player(900, 700, 40, 40);


document.addEventListener("keydown", function (tecla) {

    if (tecla.key == "w") {
        pri1.arriba()
    }

    if (tecla.key == "s") {
        pri1.abajo()
    }

    if (tecla.key == "d") {
        pri1.derecha()
    }

    if (tecla.key == "a") {
        pri1.izquierda()
    }
})

function dibuixaEscenari() {

    for (let y = 0; y < 16; y++) {

        for (let x = 0; x < 20; x++) {

            if (escenari[y][x] == 0) {
                color = hierba
            }

            if (escenari[y][x] == 1) {
                color = agua
            }

            if (escenari[y][x] == 2) {
                color = tierra
            }

            if (escenari[y][x] == 3) {
                color = pared
            }

            if (escenari[y][x] == 4) {
                color = llave1
            }

            if (escenari[y][x] == 5) {
                color = llave2
            }

            if (escenari[y][x] == 6) {
                color = puerta1
            }

            if (escenari[y][x] == 7) {
                color = puerta2
            }
            ctx.fillStyle = color;
            ctx.fillRect(x * anchoF, y * altoF, anchoF, altoF)
        }
    }
}