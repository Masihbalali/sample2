function createnewaccount() {
  document.getElementById('signin').style.zIndex = -1;
  document.getElementById('signin').style.opacity = 0.1;
  document.getElementById('signin').style.transition= "opacity  2s , box-shadow 1s";
  

  document.getElementById('create').style.opacity = 1;
  document.getElementById('create').style.transition= "opacity  2s  , box-shadow 1s";
}



function backtosignin() {
  document.getElementById('signin').style.zIndex = 1;
  document.getElementById('signin').style.opacity = 1;
  document.getElementById('signin').style.transition= "opacity  2s  , box-shadow 1s";
  
  document.getElementById('create').style.opacity = 0.1;
  document.getElementById('create').style.transition= "opacity  2s  , box-shadow 1s";
}



