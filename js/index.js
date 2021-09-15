const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");

$play.addEventListener("click", handlePlay => {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  console.log("le diste clic al botón de play");
})

$pause.addEventListener("click", handlePause => {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
  console.log("le diste clic al botón de pausa");
})

$backward.addEventListener("click",handleBackward=>{
  $video.currentTime -= 10;
  console.log("para atrás 10 segundos",$video.currentTime);
})

$forward.addEventListener("click",handleForward=>{
  $video.currentTime += 10;
  console.log("para adelante 10 segundos",$video.currentTime);
})

const $progress = document.querySelector("#progress");
$video.addEventListener("loadedmetadata", handleLoaded => {
  $progress.max = $video.duration;
  console.log("ha cargado mi video",$video.duration)
})


$video.addEventListener("timeupdate", handleTimeUpDate => {
  $progress.value = $video.currentTime;
  console.log("tiempo actual",$video.currentTime);
})

$progress.addEventListener("input", handleInput => {
  $video.currentTime = $progress.value;
  console.log($progress.value);
})
















