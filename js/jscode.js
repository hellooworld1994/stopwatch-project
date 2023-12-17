const thetimer =document.getElementById("pd7");

var timer = [0,0,0,0];

const txt = document.getElementById("txt");
txt.addEventListener("keypress",start);

var running = false;

const orgintext = document.getElementById("pd4").innerHTML;

const borderd = document.getElementById("d5");

var interval;

const btnreset = document.getElementById("bd6");

function leadingzero(time) {
     if (time<10) {
          time="0"+time;
     }
     return time;
}


function runtimer() {
     let currenttime = leadingzero(timer[0])  + ":" + leadingzero(timer[1])  + ":" + leadingzero(timer[2]);
     thetimer.innerHTML=currenttime;
     timer[3]++;

     timer[0] = Math.floor(timer[3] / 100 / 60) ;

     timer[1] = Math.floor((timer[3] / 100) - (timer[0] * 60));

     timer[2] = Math.floor(timer[3] - ((timer[1] * 100) - timer[0] * 6000));
}

function start() {
     let txtenter = txt.value.length;
     if (txtenter == 0 && !running) {
          running = true;
          interval= setInterval(runtimer,10);  
     } 
}

function spellchar() {
     let textenter = txt.value;
     let orgintextmatch = orgintext.substring(0,textenter.length);
     if (textenter == orgintext) {
         borderd.style.borderColor = "green";   
         clearInterval(interval);  
     }  
     else{
          if (textenter == orgintextmatch){
               borderd.style.borderColor = "yellow";  
          }
          else{
               borderd.style.borderColor = "red";
          }
     }
}

txt.addEventListener("keyup",spellchar);


function resetbtn() {
     clearInterval(interval);
     interval = null;
     timer = [0,0,0,0];
     txt.value = "";
     thetimer.innerHTML = "00:00:00";
     borderd.style.borderColor="rgba(0,0, 0,.5)";
     running = false;
}

btnreset.addEventListener("click",resetbtn);
