
var timer = 60;
var score = 0;
var hitRandomNum = 0;

function makeBubble(){
    var clutter = "";

for(var i = 1; i <=152; i++){
    var random = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${random}</div>`;
}

document.querySelector("#panelBottom").innerHTML = clutter;

}

function getNewHit(){
   hitRandomNum = Math.floor(Math.random()*10);
   document.querySelector("#hitVal").textContent = hitRandomNum;
}

function runTimer(){
  var setTimer =  setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }else{
            clearInterval(setTimer);
             document.querySelector("#panelBottom").innerHTML = `<h1> Game Over ! </h1>`;
        }
       
    },1000);
}

function increaseScore(){
    score += 10; 
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#panelBottom").addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitRandomNum){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

// increaseScore();
getNewHit();
runTimer();
makeBubble();
