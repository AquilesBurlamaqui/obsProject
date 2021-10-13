var mudouTempo="true";
var terminou;
var pausado="false";
var meuTimer;
var minutos=5;

function reload() {
    document.getElementById('scoreOne').innerHTML = localStorage.getItem('ScoreOne');
    document.getElementById('scoreOneB').innerHTML = localStorage.getItem('ScoreOneB');
    document.getElementById('scoreOneC').innerHTML = localStorage.getItem('ScoreOneC');

    document.getElementById('scoreTwo').innerHTML = localStorage.getItem('ScoreTwo');
    document.getElementById('scoreTwoB').innerHTML = localStorage.getItem('ScoreTwoB');
    document.getElementById('scoreTwoC').innerHTML = localStorage.getItem('ScoreTwoC');

    document.getElementById('nomeLutador01').innerHTML = localStorage.getItem('nomeLutador01');
    document.getElementById('nomeAcademia01').innerHTML = localStorage.getItem('nomeAcademia01');
    document.getElementById('nomeLutador02').innerHTML = localStorage.getItem('nomeLutador02');
    document.getElementById('nomeAcademia02').innerHTML = localStorage.getItem('nomeAcademia02');
    if(mudouTempo!=localStorage.getItem('timer')){
        terminou = false;
        clearInterval(meuTimer); 
        contador();
        mudouTempo=localStorage.getItem('timer');
    }
 
    pausado=localStorage.getItem('pausado');
    minutos = parseInt(localStorage.getItem('minutos'));


} setInterval('reload()',1)

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    terminou = false;
    meuTimer = setInterval(function () {
        if(!terminou && pausado!="false") {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            if (--timer < 0) {
                timer = duration;
                terminou=true;
                clearInterval(meuTimer);
            }
        }
    }, 1000);
}
function contador() {
    var duration = 60 * minutos; // Converter para segundos
        display = document.getElementById('timer'); // selecionando o timer
    startTimer(duration, display); // iniciando o timer
}

onload.contador();

