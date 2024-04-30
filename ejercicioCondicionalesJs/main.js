console.log("Ejercicio1");
let num 
let num1
num = parseInt(prompt("ingrese num"))
num1 = parseInt(prompt("ingrese num1"))
if (num>num1){
    console.log("num es mayor");
}else{
    console.log("num es menor");
}

console.log("Ejercicio2");
let num2
let num3
num2 = parseInt(prompt("ingrese num2"))
num3 = parseInt(prompt("ingrese num3"))
if (num2===num3){
    console.log("Los numeros son iguales");
}else{
    console.log("los numeros son distintos");
}

console.log("Ejercicio3");
let num4
let num5
num4 = parseInt(prompt("ingrese num4"))
num15 = parseInt(prompt("ingrese num5"))
if (num4>num5){
    console.log("num4 es mayor");
}else if(num5>num4){
    console.log("num5 es mayor");
}else{
    console.log("los numeros son iguales");
}

console.log("Ejercicio4");
let num6
let num7
let num8
num6 = parseInt(prompt("ingrese num6"))
num7 = parseInt(prompt("ingrese num7"))
num8 = parseInt(prompt("ingrese num8"))
if (num6<num7 && num6<num8){
    console.log("num6 es menor");
}else if(num7<num8 && num7<num6){
    console.log("num7 es menor");
}else if(num8<num7 && num8<num6){
    console.log("num8 es menor");
}else{
    console.log("los numeros son iguales");
}

console.log("Ejecicio5");
let alex = {
    edad: parseInt(prompt("ingrese edad de Alex")),
    estatura: parseInt(prompt("ingrese estatura de Alex")),
}
let gloria = {
    edad: parseInt(prompt("ingrese edad de Gloria")),
    estatura: parseInt(prompt("ingrese estatura de Gloria")),
}
if(alex.edad>gloria.edad){
    console.log("la edad de Alex es mayor");
}else{
    console.log("la edad de Gloria es mayor");
}
if(alex.estatura>gloria.estatura){
    console.log("la estatura de Alex es mayor");
}else{
    console.log("la estatura de Gloria es mayor");
}

console.log("ejercicio6");
let nombre = prompt("ingrese nombre")
let edad = parseInt(prompt("ingrese edad"))
let altura = parseInt(prompt("ingrese estatura"))
let vision = parseInt(prompt("ingrese estado de vision"))
if(edad>17 && altura>150 && vision>=8){
    console.log("Capacitado para conducir");
}else{
    console.log("No capacitado para conducir");
}

console.log("ejercicio7");
let nombre1 = "Andres"
let nombre2 = prompt("nombre")
let pase = prompt("vip o normal")
let entrada = prompt("Posee entrada? (si o no)") 
if(nombre2 === nombre1 || pase === "vip"){
    alert("Bienvenid@")
    console.log("Bienvenid@");  
}else if(entrada === "si"){
    let deseaUtilizarla = prompt("desea utilizarla? (si o no)")
    if(deseaUtilizarla === "si"){
        alert("Bienvenid@")
        console.log("Bienvenid@");
    }
}else{
    let deseaComprar = prompt("Desea comprar? (si o no)")
    if(deseaComprar === "si"){
        let dineroDisponible = prompt("dinero disponible")
        if(dineroDisponible >= 1000){
            alert("Venta exitosa")
            alert("Bienvenid@")
        }else{
            alert("Venta rechazada")
        }
    }else{
        alert("Hasta luego")
    }
}

console.log("ejercicio8");
let numeroIncognito = 7
let numeroIngresado = parseInt(prompt("ingrese un numero"))
if(numeroIngresado < numeroIncognito){
    alert("el numero ingresado es menor intentalo de nuevo")
 }else if(numeroIngresado > numeroIncognito){
    alert("el numero ingresado es mayor intentalo de nuevo")
 }else{
    alert("Ganaste, haz adivinado el número.”")
 }
  numeroIngresado = parseInt(prompt("ingrese un numero"))
 if(numeroIngresado < numeroIncognito){
    alert("el numero ingresado es menor intentalo de nuevo")
 }else if(numeroIngresado > numeroIncognito){
    alert("el numero ingresado es mayor intentalo de nuevo")
 }else{
    alert("Ganaste, haz adivinado el número.”")
 }
  numeroIngresado = parseInt(prompt("ingrese un numero"))
 if(numeroIngresado < numeroIncognito){
    alert("el numero ingresado es menor intentalo de nuevo")
 }else if(numeroIngresado > numeroIncognito){
    alert("el numero ingresado es mayor intentalo de nuevo")
 }else{
    alert("Ganaste, haz adivinado el número.”")
 }

console.log("ejercicio 9");
let edadMia = parseInt(prompt("Mi edad"))
if(edadMia >= 0 && edadMia <= 12){
    alert("Soy infante")
}else if(edadMia >= 13 && edadMia <= 18){
    alert("Soy adolescente")
}else if(edadMia >= 19 && edadMia <= 45){
    alert("Soy aduto")
}else if(edadMia >= 46 && edadMia <= 100){
    alert("soy anciano")
}else{
    if(edadMia > 100){
        alert("en realidad tienes esa edad?")
    }
}

console.log("ejercicio 10");
let persona1 = prompt("1.piedra, papel o tijera")
let persona2 = prompt("2.piedra, papel o tijera")
let juego
if (persona1 === "piedra" && persona2 === "tijera") {
    alert("persona 1 ganó")
}else if (persona1 === "piedra" && persona2 === "papel") {
    alert("persona 2 ganó")
}else if (persona1 === "piedra" && persona2 === "piedra") {
    alert("empate")
}else if (persona1 === "papel" && persona2 === "piedra") {
    alert("persona 1 ganó")
}else if (persona1 === "papel" && persona2 === "tijera") {
    alert("persona 2 ganó")
}else if (persona1 === "papel" && persona2 === "papel") {
    alert("empate")
}else if (persona1 === "tijera" && persona2 === "papel") {
    alert("persona 1 ganó")
}else if (persona1 === "tijera" && persona2 === "piedra") {
    alert("persona 2 ganó")
}else if (persona1 === "tijera" && persona2 === "tijera") {
    alert("empate")
}else{
    alert("una de las personas hizo trampa")
}

console.log("ejercicio 11");
let color = prompt("ingrese un color")
switch (color) {
    case "blanco":
        alert("Falta de color")
        break;
    case "negro":
        alert("Falta de color")
        break;
    case "verde":
        alert("El color de la naturaleza")
        break;
    case "azul":
        alert("El color del agua")
        break;
    case "amarillo":
        alert("El color del sol")
        break;
    case "rojo":
        alert("El color del fuego")
        break;
    case "marron":
        alert("El color de la tierra")
        break;
    default:
        alert("Excelente elección, no lo teníamos pensado")
        break;
}

console.log("Ejercicio 12");
let operador1 = parseInt(prompt("numero 1"))
let operador2 = parseInt(prompt("numero 2"))
let operacion
operacion = operador1 + operador2
alert("resultado suma "+ operacion)
console.log("resultado suma "+ operacion);

operacion = operador1 - operador2
alert("resultado resta "+ operacion)
console.log("resultado resta "+ operacion);

operacion = operador1 * operador2
alert("resultado multiplicacion "+ operacion)
console.log("resultado multiplicacion "+ operacion);

operacion = operador1 / operador2
if(operador2 === 0){
    alert("error en division")
}else{
    alert("resultado division "+ operacion)
console.log("resultado division "+ operacion); 
}

console.log("Ejercicio 13");
let nombreCompleto = prompt("Nombre Completo")
let cedula = prompt("Numero de cedula")
let fechaExpedicion  = prompt("Fecha de expedicion de cedula")
let rh = prompt("Tipo de sangre")
let fechaNacimiento  = prompt("Fecha de nacimiento")
let lugarNacimiento  = prompt("Lugar de nacimiento")
let dni = {
     nombreCompleto ,
     cedula ,
     fechaExpedicion ,
     rh ,
     fechaNacimiento ,
     lugarNacimiento ,
}
let person = confirm("Tu nombre completo es "+ nombreCompleto + " con cedula número " + cedula + " expedida el dia de " + fechaExpedicion + ". Tipo de sangre " + rh + ". Fecha de nacimiento " + fechaNacimiento + " en el municipio de " + lugarNacimiento + "." )
if(person === true){
     console.table(dni)
     console.log("Registro exitoso");
     alert("Registro exitoso")
}else{
     console.log("Vuelva a intentarlo en un mes")
     alert("Vuelva a intentarlo en un mes")
}












