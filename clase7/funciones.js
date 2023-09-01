console.log("Hola Mundo");

function trasladar() {
    let cuadrado = document.getElementById("cuadrado");

    cuadrado.classList.add("trasladar");

    setTimeout(() => {
        cuadrado.classList.remove("trasladar");
    }, "1500");

    console.log(cuadrado);
}

function redimensionar() {
    let cuadrado = document.getElementById("cuadrado");

    cuadrado.classList.add("redimensionar");

    setTimeout(() => {
        cuadrado.classList.remove("redimensionar");
    }, "1500");

    console.log(cuadrado);

}

function deformar() {
    let cuadrado = document.getElementById("cuadrado");

    cuadrado.classList.add("deformar");
   
    setTimeout(()=>{
       cuadrado.classList.remove("deformar");
    }, "1500");
   
    console.log(cuadrado);
}

function rotar() {
    let cuadrado = document.getElementById("cuadrado");

    cuadrado.classList.add("rotar");
   
    setTimeout(()=>{
       cuadrado.classList.remove("rotar");
    }, "1500");
   
    console.log(cuadrado);
}
