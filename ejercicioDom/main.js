let arrayPrincipal =[
    {
        id:1,
        titulo: "Sacar la basura",
        texto: "Mi mama me va matar si no lo hago",
        realizada: false
    }
]
let global = arrayPrincipal[0].id
let guardar = document.getElementById("guardar")
let titulo = document.getElementById("titulo")
let nota = document.getElementById("nota")
let borrarText = document.getElementById("borrarTexto")

borrarText.addEventListener("click", eliminar =>{
    eliminar.preventDefault()
    if (titulo.value !== "" && nota.value !== "") {
       titulo.value = ""
       nota.value = "" 
    }
})

for (let i = 0; i < arrayPrincipal.length; i++) {
    guardar.addEventListener("click", (dar) => {
        dar.preventDefault()
        if (titulo.value !== "" && nota.value !== "") {
            crearTarjeta(padreTarjet, arrayPrincipal[i])
        }
    } )
}
console.log(guardar);

let padreTarjet = document.querySelector(".padre")

function crearTarjeta(padre, tarjeta) {
    let nuevaTarjeta = document.createElement("div") 
    nuevaTarjeta.classList.add("card")
    nuevaTarjeta.classList.add("col-2")
    nuevaTarjeta.classList.add("ms-4")
    nuevaTarjeta.innerHTML = `
         <div class="card-header">
                <div class="form-check">
                <input onClick="marcarRealizada(${nota.id})" type="checkbox" ${nota.realizada? "checked": ""}>
                    <label class="form-check-label" for="flexCheckChecked">
                       ${titulo.value}
                    </label>
                </div>
            </div>
            <div class="card-body">
                <p class="card-text"> ${nota.value}</p>
                <button class="boton" onClick="borrarNota(${tarjeta.global})">Borrar nota</button>
         </div>`  
     padre.appendChild(nuevaTarjeta)
}
console.log(padreTarjet);
function pintar(arreglo, padreTar) {
    padreTar.innerHTML=""
    for (let i = 0; i < arreglo.length; i++) {
        crearTarjeta(padreTarjet, arrayPrincipal[i])
    }
    global++
}
pintar(arrayPrincipal, padreTarjet)

function agregarNota(titulo, texto){
      let object = {
        id: global++,
        titulo: titulo,
        texto: texto,
        realizada: false
       }  
       arrayPrincipal.push(object)
    }
agregarNota(titulo, nota)
console.log(arrayPrincipal);

console.log(global);

function borrarNota(id) {
    for (let i = 0; i < arrayPrincipal.length; i++) {
        if (arrayPrincipal[i].id === id) {
            arrayPrincipal.splice(i,1)
        }
        pintar(arrayPrincipal[i], padreTarjet)
    }
}
