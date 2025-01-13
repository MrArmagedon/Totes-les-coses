
let n1, n2, operacio;

function num1(){
    document.getElementById("pantalla").value = document.getElementById("pantalla").value+"1"
    document.getElementById("pantalla").focus()
}

function num2(){
    document.getElementById("pantalla").value = document.getElementById("pantalla").value+"2"
    document.getElementById("pantalla").focus()
}

function num3(){
    document.getElementById("pantalla").value = document.getElementById("pantalla").value+"3"
    document.getElementById("pantalla").focus()
}

function num4(){
    document.getElementById("pantalla").value = document.getElementById("pantalla").value+"4"
    document.getElementById("pantalla").focus()
}

function num5(){
    document.getElementById("pantalla").value = document.getElementById("pantalla").value+"5"
    document.getElementById("pantalla").focus()
}

function num6(){
    document.getElementById("pantalla").value = document.getElementById("pantalla").value+"6"
    document.getElementById("pantalla").focus()
}

function num7(){
    document.getElementById("pantalla").value = document.getElementById("pantalla").value+"7"
    document.getElementById("pantalla").focus()
}

function num8(){
    document.getElementById("pantalla").value = document.getElementById("pantalla").value+"8"
    document.getElementById("pantalla").focus()
}

function num9(){
    document.getElementById("pantalla").value = document.getElementById("pantalla").value+"9"
    document.getElementById("pantalla").focus()
}

function num0(){
    document.getElementById("pantalla").value = document.getElementById("pantalla").value+"0"
    document.getElementById("pantalla").focus()
}

function numPI(){
    document.getElementById("pantalla").value = Math.PI
    document.getElementById("pantalla").focus()
}

function numE(){
    document.getElementById("pantalla").value = Math.E
    document.getElementById("pantalla").focus()
}

function suma(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    operacio = "+"
    document.getElementById("pantalla").value = ""
    document.getElementById("pantalla").focus()
}

function resta(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    operacio = "-"
    document.getElementById("pantalla").value = ""
    document.getElementById("pantalla").focus()
}

function mult(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    operacio = "*"
    document.getElementById("pantalla").value = ""
    document.getElementById("pantalla").focus()
}

function divi(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    operacio = "/"
    document.getElementById("pantalla").value = ""
    document.getElementById("pantalla").focus()
}

function arrel2(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    let resultat = Math.sqrt(n1)
    document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus()
}

function arrel3(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    let resultat = Math.cbrt(n1)
    document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus()
}

function elev2(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    let resultat = n1*n1
    document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus()
}

function elev3(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    let resultat = n1*n1*n1
    document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus()
}

function ln(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    let resultat = Math.log(n1)
    document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus()
}

function log(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    let resultat = Math.log10(n1)
    document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus()
}

function sin(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    let resultat = Math.sin(n1)
    document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus()
}

function cos(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    let resultat = Math.cos(n1)
    document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus()
}

function tan(){
    n1 = parseFloat(document.getElementById("pantalla").value)
    let resultat = Math.tan(n1)
    document.getElementById("pantalla").value = resultat
    document.getElementById("pantalla").focus()
}

function calcula(){
    let resultat;
    n2 = parseFloat(document.getElementById("pantalla").value)
   
    if(operacio=="+"){
        resultat = n1+n2
        document.getElementById("pantalla").value = resultat
    }

    else if(operacio=="-"){
        resultat = n1-n2
        document.getElementById("pantalla").value = resultat

    }

    else if(operacio=="*"){
        resultat = n1*n2
        document.getElementById("pantalla").value = resultat

    }

    else if(operacio=="/"){
        resultat = n1/n2
        document.getElementById("pantalla").value = resultat

    }

    document.getElementById("pantalla").focus()

}

function restart(){
    n1 = parseFloat(document.value = "0")
    document.getElementById("pantalla").value = ""
    document.getElementById("pantalla").focus()
}

