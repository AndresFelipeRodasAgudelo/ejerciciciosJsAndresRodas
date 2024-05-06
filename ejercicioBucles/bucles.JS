console.log("Ejercicio 1");
let num = parseInt(prompt("Ingrese un numero"))
for(let i=1; i<11; i++){
    console.log(num*i);
}

console.log("Ejercicio 2");
let num1 = parseInt(prompt("Ingrese un numero"))
let suma = num1
while (num1 != 0) {
    num1 = parseInt(prompt("Ingrese un numero"))
    suma += num1
    console.log(suma);
}

console.log("Ejercicio 3");
let num2 = 0
let num3 = 24
let intentos = 0
do {
    num2 = parseInt(prompt("Ingrese un numero del 1 al 100"))
    if (num2 < num3) {
        console.log("el numero ingresado es menor intentalo de nuevo")
    } else{
        console.log("el numero ingresado es mayor intentalo de nuevo")
    } 
    intentos++
} while (num2 != num3);
console.log("Adivinaste");
console.log("El numero de intentos fue: " + intentos);


console.log("Ejercicio 4");
let numero = parseInt(prompt("Numero"))
    if (numero <= 0) {
        console.log(numero +" No es primo");
    }
    let contador = 0
    for (let i = 1; i <= numero; i++) {
        if(numero % i === 0){
            contador++
        }
    }
    if(contador === 2){
        console.log(numero + " Es primo");
    }else{
        console.log(numero + " No es primo");
    }

console.log("Ejercicio 6");
let arrayElem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i=0; i<arrayElem.length; i++){
    console.log(arrayElem[i]);
}

console.log("Ejercicio 7");
let arrayNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 35]
for(let i=0; i<arrayNum.length; i++){
    console.log(arrayNum[i]*2);
}

console.log("Ejercicio 8");
let persona ={
    nombre: "Andres",
    edad: 26,
    parentezco: "Hijo",
    ocupacion: "Estudiante"
}
let persona2 ={
    nombre: "Alex",
    edad: 30,
    parentezco: "Hijo",
    ocupacion: "Empleado"
}
let persona3 ={
    nombre: "Alvaro",
    edad: 60,
    parentezco: "Padre",
    ocupacion: "Independiente"
}
let persona4 ={
    nombre: "Gloria",
    edad: 50,
    parentezco: "Madre",
    ocupacion: "Ama de casa"
}
let mascota ={
    nombre: "Milu",
    edad: 4,
    parentezco: "Mascota",
    ocupacion: "Dormir"
}
let arrayFamilia = [persona, persona2, persona3, persona4, mascota]
for(i=0; i<arrayFamilia.length; i++){
    console.log(arrayFamilia[i]);
}

console.log("Ejercicio 9");
let arrayNum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let i=0; i<arrayNum1.length; i++){
    console.log(arrayNum1[i++]);
}

console.log("Ejercicio 11");
let num11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < num11.length; i++) {
    console.log(num11[9]);
}

console.log("Ejercicio 12");
let num12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < num12.length; i++) {
    console.log(num12[0]);
}

console.log("Ejercicio 13");
let jugador1 = prompt("Nombre de jugador 1")
let jugador2 = prompt("Nombre de jugador 2")
let mano1
let mano2
do {
    mano1 = prompt(jugador1 + " Piedra, papel o tijera")
    mano2 = prompt(jugador2 + " Piedra, papel o tijera")
     if(mano1 === "piedra" && mano2 === "tijera"){
        console.log(jugador1 + " ganó");
     }else if(mano1 === "piedra" && mano2 === "papel"){
        console.log(jugador2 + " ganó");
     }else if(mano1 === "papel" && mano2 === "tijera"){
        console.log(jugador2 + " ganó");
     }else if(mano1 === "papel" && mano2 === "piedra"){
        console.log(jugador1 + " ganó");
     }else if(mano1 === "tijera" && mano2 === "piedra"){
        console.log(jugador2 + " ganó");
     }else if(mano1 === "tijera" && mano2 === "papel"){
        console.log(jugador1 + " ganó");
     }
} while (mano1 === mano2);


console.log("Ejercicio 14");
let asterisco = ["*", "**", "***", "****", "*****",]
for (let i = 0; i < 5; i++) {
    console.log(asterisco[i]);
}

console.log("Ejercicio 15");
let asterisco1 = ["*", "**", "***", "****", "*****",]
for (let i = 4; i >=0 ; i--) {
    console.log(asterisco1[i]);
}

console.log("Ejercicio 16");
let arrayNum2 = [100, 54, 78, 84, 64, 15, 75, 2, 1, 3]
let l, i, m, aux
l = arrayNum2.length
for (m = 1; m < l; m++) {
    for (let i = 0; i < (l-m); i++) {
        if (arrayNum2[i] > arrayNum2[i + 1]) {
            aux = arrayNum2[i];
            arrayNum2[i] = arrayNum2[i + 1];
            arrayNum2[i + 1] = aux
        }
    }
}
console.log(arrayNum2);