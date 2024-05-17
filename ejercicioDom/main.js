let arrayPrincipal =[crearTarjeta]
let guardar = document.getElementById("guardar")
let titulo = document.getElementById("titulo")
let nota = document.getElementById("nota")

guardar.addEventListener("click", (dar) => {
    crearTarjeta(padreTarjet)
} )

console.log(titulo);
let padreTarjet = document.querySelector(".padre")
console.log(padreTarjet);

function crearTarjeta(padre) {
    let nuevaTarjeta = document.createElement("div") 
    nuevaTarjeta.classList.add("padre")
    nuevaTarjeta.innerHTML = `
    <div class="card w-25">
         <div class="card-header">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked>
                    <label class="form-check-label" for="flexCheckChecked">
                       ${titulo.value}
                    </label>
                </div>
            </div>
            <div class="card-body">
                <p class="card-text">${nota.value}</p>
                <button class="boton" id="borrar" onClick-="eliminar(titulo.value)">Borrar nota</button>
         </div>
    </div>`  
     padre.appendChild(nuevaTarjeta)
}
console.log(crearTarjeta);

function pintar(arreglo, padre) {
    padre.innerHTML=""
    for (let i = 0; i < arreglo.length; i++) {
        crearTarjeta(padreTarjet)
    }
}
pintar(arrayPrincipal, padreTarjet)

function eliminar(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === titulo.value) {
                array.splice(i,1)
            }
        }
}
eliminar(arrayPrincipal)

// let padreTarjetas = document.querySelector(".autos")

// pintarTarjetas(autos, padreTarjetas)

// function eliminarTarjeta(nombreAuto) {
//     for (let i = 0; i < autos.length; i++) {
//         if (autos[i].nombre === nombreAuto) {
//             autos.splice(i, 1)
//         }
//     }
//     pintarTarjetas(autos, padreTarjetas)
// }
// function pintarTarjetas(arregloAPintar, divPadre) {
//     divPadre.innerHTML = ""
//     for (let i = 0; i < arregloAPintar.length; i++) {
//         crearTarjeta(divPadre, arregloAPintar[i])
//     }
// }


// let checkbox = document.getElementById("form")
// console.log(checkbox);

// checkbox.addEventListener('change',(evento)=> {

//     let checkboxCheck = document.querySelectorAll("input[type=checkbox]:checked")
//     console.log(checkboxCheck);
//     let autosFiltrados = autos.filter(auto => {
//         for (let i = 0; i < checkboxCheck.length; i++) {    
//             if (checkboxCheck[i].value == auto.color) {
//                 return auto
//             }  
//         }
//     } )


//     if (checkboxCheck.length != 0) {
//         pintarTarjetas(autosFiltrados,padreTarjetas)
//     }else{
//         pintarTarjetas(autos,padreTarjetas)
//     }
    
// })


// let buscar = document.getElementById("buscar")
// console.log(buscar);

// buscar.addEventListener('input',(e) => {
//     console.log(e.target.value);

//     let autosFiltrados2 = autos.filter(auto => auto.nombre.toLowerCase().includes(e.target.value.toLowerCase()))
//     console.log(autosFiltrados2);


//     if (e.target.value != "") {
//         pintarTarjetas(autosFiltrados2,padreTarjetas)
//     }else{
//         pintarTarjetas(autos,padreTarjetas)
//     }
   
// }