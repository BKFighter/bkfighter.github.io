var x;
var y;
var sideBarSel=false;
var length=50;



document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);


function onMouseUpdate(e) {
  x = e.pageX;
  y = e.pageY;
  checkNavBar();
 
}

function getMouseX() {
  return x;
}

function getMouseY() {
  return y;
}

function checkNavBar(){
  
  if(!sideBarSel&&getMouseX() < 50){
    
    sideBarSel=!sideBarSel;
    navOut();
    
  }else{
    
    if(sideBarSel&& getMouseX() > 150){
      
      sideBarSel=!sideBarSel;
      navIn();
      
    }
  
  }
  
}

function navOut(){
  
  document.getElementById("nav-bar").style.width="150px";
  
  document.getElementById("nav-bar").style.height="50px";
  
  document.getElementById("nav-bar").innerHTML="<h2>Navigation</h2>";
  
  length=50;
  
  outLp();
  
}
function outLp(){
  
  length=length+25;
  setTimeout(function(){ doneChc(); }, 10);
  
}
function doneChc(){
  
  document.getElementById("nav-bar").style.height=length+"px";
  
  if(length<500&&sideBarSel){
    
   outLp(); 
    
  }else{
   if(sideBarSel){
    document.getElementById("nav-bar").innerHTML="<h2>Navigation</h2><a href='http://bkfighter.github.io/index.html' class='nav-btn'>Home</a><h2>Games</h2><a href='http://bkfighter.github.io/tilight.html' class='nav-btn'>Tilight</a><br /><a href='http://bkfighter.github.io/penaltyshootout.html' class='nav-btn'>Penalty Shootout</a><br /><a href='http://bkfighter.github.io/scratch.html' class='nav-btn'>Scratch</a>";
   }
    
    
  }
  
}



function navIn(){
  
  length=50;
  
  document.getElementById("nav-bar").style.width="0px";
  document.getElementById("nav-bar").innerHTML="<h2 style='color:#37474F;position:fixed;left:20px;'>Nav</h2>";
  
}
