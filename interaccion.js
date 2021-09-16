//Todas las Constantes Creadas
const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");
const $progress = document.querySelector("#progress");

$play.addEventListener("click", presionarPlay);
$pause.addEventListener("click", presionarPause);
$backward.addEventListener("click", presionarBackward);
$forward.addEventListener("click", presionarForward);

function presionarPlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  console.log("Le diste click al boton play");
}

function presionarPause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
  console.log("Le diste click al boton pause");
}

function presionarBackward(){
  $video.currentTime-= 10;
  console.log("Para atras 10 seg") 
}
//Funcion para retroceder el video 10 seg. 
function presionarForward(){
  $video.currentTime+= 10;
}

// Evento para Extraer el total del tiempo del video.
$video.addEventListener("loadedmetadata", loadedTime)
// Funcion para mostrar el tiempo completo del video.
function loadedTime() {
  $progress.max = $video.duration;
  console.log('Mi video dura:', $video.duration, 'segundos')
}

//Evento que cuenta el tiempo actual.
$video.addEventListener("timeupdate", timeUpdate)

function timeUpdate() {
  $progress.value = $video.currentTime;
  //console.log('contando tiempo', $video.currentTime)
}

// Evento de la barra de progreso para poder manipularla
$progress.addEventListener("input", inputMove )

function inputMove() {
  $video.currentTime = $progress.value
  //console.log($progress.value)
}



