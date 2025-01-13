
function canviaNom(){
    let nombre = document.getElementById("name").value;
    document.getElementById("nom").innerHTML = nombre;
}

function canviaColor(){
    let color = document.getElementById("color").value;
    document.body.style.color = color;
}

function canviaFons(){
    let fons = document.getElementById("fons").value;
    document.body.style.backgroundColor = fons;
}

function canviaFoto1(){
    let imatge1 = document.getElementById("image1").value;
    document.getElementById("img1").src = imatge1;
}

function canviaFoto2(){
    let imatge2 = document.getElementById("image2").value;
    document.getElementById("img2").src = imatge2;
}

function canviaFoto3(){
    let imatge3 = document.getElementById("image3").value;
    document.getElementById("img3").src = imatge3;
}

function canviaTot(){
    let nombre = document.getElementById("name").value;
    document.getElementById("nom").innerHTML = nombre;

    let color = document.getElementById("color").value;
    document.body.style.color = color;

    let fons = document.getElementById("fons").value;
    document.body.style.backgroundColor = fons;

    let imatge1 = document.getElementById("image1").value;
    document.getElementById("img1").src = imatge1;

    let imatge2 = document.getElementById("image2").value;
    document.getElementById("img2").src = imatge2;

    let imatge3 = document.getElementById("image3").value;
    document.getElementById("img3").src = imatge3;
}