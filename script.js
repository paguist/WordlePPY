let intentos = 6;
let diccionario = ["PIEZA","PUERTA","TEXTO", "RATON", "MANTA", "MENTA"];

const button = document.getElementById("guess-button");
button.addEventListener("click", intentar);

function obtenerPalabra (){
    let aleatorio= Math.floor(Math.random()*diccionario.length)
    return diccionario[aleatorio]
}

let palabraOculta = obtenerPalabra()
console.log (palabraOculta)

function intentar(){
    const INTENTO = document.getElementById("guess-input").value.toUpperCase()
    intentos --
    if (intentos== 0 ){
        terminar("PERDISTE!")
    }else{
        let fila = document.createElement("div")
        fila.className = "row"
        for (const i in INTENTO){
            let letra = document.createElement("span")
            letra.className = "letter"
            letra.innerText = INTENTO [i]
            fila.appendChild(letra)
            if (INTENTO[i] == palabraOculta[i]){
                letra.style.background = "#59D978"
            }else if (palabraOculta.includes(INTENTO[i])){
                letra.style.background = "#DBD62B"
            } else {
                letra.style.background = "#707454"
            }
        }
    let grilla = document.getElementById("grid")
    grilla.appendChild(fila)
    if (palabraOculta == INTENTO){
        terminar("GANASTE!")   
    }
}

function terminar(mensaje){
    const input = document.getElementById("guess-input");
    input.disabled = true;
    button.disabled = true;
    let p = document.getElementById("guesses");
    p.innerHTML = "<h1>" + mensaje + "</h1>"
    
}
}
