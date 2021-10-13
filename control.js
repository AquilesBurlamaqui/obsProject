let ButtonS1 = document.getElementById("ScoreOne");
let ButtonS1Menos = document.getElementById("ScoreOneMenos");

let ButtonS1B = document.getElementById("ScoreOneB");
let ButtonS1BMenos = document.getElementById("ScoreOneBMenos");

let ButtonS1C = document.getElementById("ScoreOneC");
let ButtonS1CMenos = document.getElementById("ScoreOneCMenos");


let ButtonS2 = document.getElementById("ScoreTwo");
let ButtonS2Menos = document.getElementById("ScoreTwoMenos");

let ButtonS2B = document.getElementById("ScoreTwoB");
let ButtonS2BMenos = document.getElementById("ScoreTwoBMenos");

let ButtonS2C = document.getElementById("ScoreTwoC");
let ButtonS2CMenos = document.getElementById("ScoreTwoCMenos");

let Reset = document.getElementById("Reset");
let Pausar = document.getElementById("Pausar");
let input1 = document.getElementById("nomeLutador01");
let input11 = document.getElementById("nomeAcademia01");

let input2 = document.getElementById("nomeLutador02");
let input21 = document.getElementById("nomeAcademia02");

let inputTimer = document.getElementById("minutos");



let Score1 = 0;
let Score1B = 0;
let Score1C = 0;

let Score2 = 0;
let Score2B = 0;
let Score2C = 0;



localStorage.setItem('ScoreOne',Score1);
localStorage.setItem('ScoreOneB',Score1B);
localStorage.setItem('ScoreOneC',Score1C);
localStorage.setItem('timer',"true");

localStorage.setItem('ScoreTwo',Score2);
localStorage.setItem('ScoreTwoB',Score2B);
localStorage.setItem('ScoreTwoC',Score2C);

input1.addEventListener("change", function() {
    localStorage.setItem("nomeLutador01", input1.value);
});



input11.addEventListener("change", function() {
    localStorage.setItem("nomeAcademia01", input11.value);
});

input2.addEventListener("change", function() {
    localStorage.setItem("nomeLutador02", input2.value);
});

input21.addEventListener("change", function() {
    localStorage.setItem("nomeAcademia02", input21.value);
});

ButtonS1.addEventListener("click", function() {
    Score1 = Score1 + 1;
    localStorage.setItem('ScoreOne',Score1);
});

ButtonS1Menos.addEventListener("click", function() {
    Score1 = Score1 - 1;
    localStorage.setItem('ScoreOne',Score1);
});

ButtonS1B.addEventListener("click", function() {
    Score1B = Score1B + 1;
    localStorage.setItem('ScoreOneB',Score1B);
});
ButtonS1BMenos.addEventListener("click", function() {
    Score1B = Score1B - 1;
    localStorage.setItem('ScoreOneB',Score1B);
});

ButtonS1C.addEventListener("click", function() {
    Score1C = Score1C + 1;
    localStorage.setItem('ScoreOneC',Score1C);
});
ButtonS1CMenos.addEventListener("click", function() {
    Score1C = Score1C - 1;
    localStorage.setItem('ScoreOneC',Score1C);
});



ButtonS2.addEventListener("click", function() {
    Score2 = Score2 + 1;
    localStorage.setItem('ScoreTwo',Score2);
});

ButtonS2Menos.addEventListener("click", function() {
    Score2 = Score2 - 1;
    localStorage.setItem('ScoreTwo',Score2);
});

ButtonS2B.addEventListener("click", function() {
    Score2B = Score2B + 1;
    localStorage.setItem('ScoreTwoB',Score2B);
});
ButtonS2BMenos.addEventListener("click", function() {
    Score2B = Score2B - 1;
    localStorage.setItem('ScoreTwoB',Score2B);
});

ButtonS2C.addEventListener("click", function() {
    Score2C = Score2C + 1;
    localStorage.setItem('ScoreTwoC',Score2C);
});
ButtonS2CMenos.addEventListener("click", function() {
    Score2C = Score2C - 1;
    localStorage.setItem('ScoreTwoC',Score2C);
});

inputTimer.addEventListener("change", function() {
    localStorage.setItem("minutos", inputTimer.value);
});

var mudouTempo="true";
var pausado="false";

Reset.addEventListener("click", function() {
    if(mudouTempo=="true") {
       localStorage.setItem('timer',"false");
       mudouTempo="false";
    } else {
       localStorage.setItem('timer',"true");
       mudouTempo="true";
    }

});

Pausar.addEventListener("click", function() {
    if(pausado=="true") {
       localStorage.setItem('pausado',"false");
       pausado="false";
    } else {
       localStorage.setItem('pausado',"true");
       pausado="true";
    }

});


