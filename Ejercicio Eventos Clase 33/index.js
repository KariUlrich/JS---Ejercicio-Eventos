const respuesta = document.querySelector(".respuesta")
const respuestaCorrecta = document.querySelector(".boton2")
const respuestaIncorrecta = document.querySelector(".boton1")
const respuestaIncorrecta2 = document.querySelector(".boton3")

const adivinar = () => {
    respuestaCorrecta.style.backgroundColor = "green"
    respuesta.textContent = "¡Respuesta correcta!"
}
respuestaCorrecta.onclick = adivinar

const noAdivinar = () => {
    respuestaCorrecta.style.backgroundColor = "green"
    respuestaIncorrecta.style.backgroundColor = "red"
    respuestaIncorrecta2.style.backgroundColor = "red"
    respuesta.textContent = "¡Respuesta equivocada!"
}
respuestaIncorrecta.onclick = noAdivinar
respuestaIncorrecta2.onclick = noAdivinar
