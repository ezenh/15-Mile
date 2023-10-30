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
    console.log("Días faltantes: " + diasFaltantes);
    document.getElementById("days").innerHTML = diasFaltantes

    console.log("Horas faltantes: " + horasFaltantes);
    document.getElementById("hours").innerHTML = horasFaltantes

    console.log("Minutos faltantes: " + minutosFaltantes);
    document.getElementById("minutes").innerHTML = minutosFaltantes

    console.log("Segundos faltantes: " + segundosFaltantes);
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