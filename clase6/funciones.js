console.log("Hola Mundo");

$(document).ready(function () {
    alert("PAAAAAAA");
});

let cuadrado = document.getElementById("cuadrado")

function hola(){
    alert("Vea pueeeees JS");
}

function azul_id(){
    let cuadrado = document.getElementById("cuadrado");
    cuadrado.style.backgroundColor = "blue";
    console.log(cuadrado)
}

function verde_clase(){
    document.getElementsByClassName("rojo")[0].style.backgroundColor = "green";
}

function reset_rojo(){
    let cuadrado = document.getElementById("cuadrado");
    cuadrado.style.backgroundColor = "red"
}
