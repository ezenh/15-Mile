// Fecha del evento en formato mm/dd/yy
var fechaEvento = "12/02/23"; // Por ejemplo, 31 de octubre de 2023

function mostrarDiferenciaTiempo() {
// Convierte la fecha del evento a un objeto de fecha en JavaScript
var partesFecha = fechaEvento.split("/");
var fechaEventoJs = new Date("20" + partesFecha[2], partesFecha[0] - 1, partesFecha[1]);

function actualizarTiempo() {
// Obtiene la fecha y hora actual
var fechaActual = new Date();

// Calcula la diferencia en milisegundos
var diferencia = fechaEventoJs - fechaActual;

// Convierte la diferencia a días, horas y minutos
var diasFaltantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
var horasFaltantes = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutosFaltantes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
var segundosFaltantes = Math.floor((diferencia % (1000 * 60)) / 1000);

// Imprime el resultado solo cuando cambia el minuto
    // console.log("Días faltantes: " + diasFaltantes);
    document.getElementById("days").innerHTML = diasFaltantes

    // console.log("Horas faltantes: " + horasFaltantes);
    document.getElementById("hours").innerHTML = horasFaltantes

    // console.log("Minutos faltantes: " + minutosFaltantes);
    document.getElementById("minutes").innerHTML = minutosFaltantes

    // console.log("Segundos faltantes: " + segundosFaltantes);
    document.getElementById("seconds").innerHTML = segundosFaltantes

    // Actualiza el valor de los minutos
    mostrarDiferenciaTiempo.minutos = minutosFaltantes;
  }
 // Muestra el tiempo faltante inmediatamente
 actualizarTiempo();

 // Configura un temporizador para actualizar el tiempo cada minuto (60000 milisegundos)
 setInterval(actualizarTiempo, 1000);
}

// Inicia la función para mostrar el tiempo faltante
mostrarDiferenciaTiempo();


const userPosition = document.getElementById('userPosition');

async function initMap() {
// --> Verifica si la ubicacion esta habilitada en el dispositivo y, si no lo esta, devuelve error
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
// --> Obtener las coordenadas de la ubicación actual

          userPosition.addEventListener('click', function(event) {
            latitud = position.coords.latitude;
            longitud = position.coords.longitude;
            
            console.log(longitud)
            console.log(latitud)
            userPosition.href = "https://www.google.es/maps/dir/" + latitud + "," + longitud + "/Terrazas+de+San+Jos%C3%A9+Sal%C3%B3n+Bailable,+Presidente+2400,+Av.+Juan+Domingo+Per%C3%B3n,+Yerba+Buena,+Tucum%C3%A1n/@-26.8120634,-65.295557,13z/data=!3m1!4b1!4m18!1m7!3m6!1s0x942242c13b357d5f:0xfb7fce5f1be7ff6c!2sTerrazas+de+San+Jos%C3%A9+Sal%C3%B3n+Bailable!8m2!3d-26.7994286!4d-65.3043288!16s%2Fg%2F11c6_l78wy!4m9!1m1!4e1!1m5!1m1!1s0x942242c13b357d5f:0xfb7fce5f1be7ff6c!2m2!1d-65.3042962!2d-26.7994676!3e0?entry=ttu"
            console.log(userPosition.href)
          })
          }
    )}}
initMap()

function verificarScroll() {
  const main = document.getElementById("rest")
  var limiteSuperior = main.getBoundingClientRect().top;

  if (limiteSuperior <= 0) {
    console.log('Llego al borde')
  } else {
    console.log('no esta todavia')
  }
}

// Agrega un evento de desplazamiento para verificar continuamente
window.addEventListener('scroll', verificarScroll);

// Verifica el estado inicial
verificarScroll();
// const fotoGala = document.querySelector(".fotoGala")
// function changeFotoGala() {
//   if (fotoGala.id == "mujer" ) {
//     console.log('esta el de varon')
//     fotoGala.id = 'varon'
//     fotoGala.src = "./assets/images/suit.png"
//   } else {
//     console.log('esta el de mujer');
//     fotoGala.id = 'mujer'
//     fotoGala.src = "./assets/images/dress.png"
//   }
//   console.log(fotoGala.src)
//   }

//   changeFotoGala()
//   setInterval(changeFotoGala, 8000);
