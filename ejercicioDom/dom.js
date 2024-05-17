let estatura = document.getElementById("estatura")
let peso = document.getElementById("peso")
let resultado = document.getElementById("resultado")
let calcular = document.getElementById("calcular")

calcular.addEventListener("click", function () {
    resultado = peso.value / ((estatura.value / 100) ** 2)
    document.getElementById("resultado").value = resultado.toFixed(3)
})

let pesos = document.getElementById("pesoCol")
let dolar = document.getElementById("dolar")
let resultadoDivisa

pesos.addEventListener("keyup", function myFunction() {
    resultadoDivisa = pesoCol.value * 0.0002567
    document.getElementById("dolar").value = resultadoDivisa.toFixed(3)
})
dolar.addEventListener("keyup", function myFunction() {
    resultadoDivisa = dolar.value * 3892.52
    document.getElementById("pesoCol").value = resultadoDivisa.toFixed(3)
})



