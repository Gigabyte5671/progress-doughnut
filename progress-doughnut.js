var doughnut_bar = document.getElementById("doughnut-bar");
var doughnut_text = document.getElementById("doughnut-text");
var other_text = document.getElementById("other-text");
var input = document.getElementById("input");
input.oninput = function(){calculateBarPolygon(this.value);}

function calculateBarPolygon(a){
  var x1 = 50;
  var y1 = 50;
  
  var x2 = 50;
  var y2 = 0;
  
  var x3 = 50;
  var y3 = 50;
  
  var x4 = 50;
  var y4 = 50;
  
  var x5 = 50;
  var y5 = 50;
  
  var x6 = 50;
  var y6 = 50;
  
  var x7 = 50;
  var y7 = 50;
  
  if(a <= 45){
      x3 = (Math.tan(rad(a)) * 50) + 50;
      y3 = 0;
  }
  if(45 < a && a <= 90){
      x3 = 100;
      y3 = 0;
      x4 = 100;
      y4 = Math.tan(rad(a - 45)) * 50;
  }
  if(90 < a && a <= 135){
      x3 = 100;
      y3 = 0;
      x4 = 100;
      y4 = (Math.tan(rad(a - 90)) * 50) + 50;
  }
  if(135 < a && a <= 180){
      x3 = 100;
      y3 = 0;
      x4 = 100;
      y4 = 100;
      x5 = 100 - (Math.tan(rad(a - 135)) * 50);
      y5 = 100;
  }
  if(180 < a && a <= 225){
      x3 = 100;
      y3 = 0;
      x4 = 100;
      y4 = 100;
      x5 = 50 - (Math.tan(rad(a - 180)) * 50);
      y5 = 100;
  }
  if(225 < a && a <= 270){
      x3 = 100;
      y3 = 0;
      x4 = 100;
      y4 = 100;
      x5 = 0;
      y5 = 100;
      x6 = 0;
      y6 = 100 - (Math.tan(rad(a - 225)) * 50);
  }
  if(270 < a && a <= 315){
      x3 = 100;
      y3 = 0;
      x4 = 100;
      y4 = 100;
      x5 = 0;
      y5 = 100;
      x6 = 0;
      y6 = 50 - (Math.tan(rad(a - 270)) * 50);
  }
  if(315 < a && a <= 360){
      x3 = 100;
      y3 = 0;
      x4 = 100;
      y4 = 100;
      x5 = 0;
      y5 = 100;
      x6 = 0;
      y6 = 0;
      x7 = Math.tan(rad(a - 315)) * 50;
      y7 = 0;
  }
  
  doughnut_text.innerHTML = a + "&deg;";
  
  var output = "polygon(" 
             + (Math.round(x1 * 1000) / 1000) + "% "
             + (Math.round(y1 * 1000) / 1000) + "%, "
             + (Math.round(x2 * 1000) / 1000) + "% "
             + (Math.round(y2 * 1000) / 1000) + "%, "
             + (Math.round(x3 * 1000) / 1000) + "% "
             + (Math.round(y3 * 1000) / 1000) + "%, "
             + (Math.round(x4 * 1000) / 1000) + "% "
             + (Math.round(y4 * 1000) / 1000) + "%, "
             + (Math.round(x5 * 1000) / 1000) + "% "
             + (Math.round(y5 * 1000) / 1000) + "%, "
             + (Math.round(x6 * 1000) / 1000) + "% "
             + (Math.round(y6 * 1000) / 1000) + "%, "
             + (Math.round(x7 * 1000) / 1000) + "% "
             + (Math.round(y7 * 1000) / 1000) + "%"
             + ")";
  
  other_text.innerHTML = output;
  doughnut_bar.style.clipPath = output;
}


function rad(deg){
  return (deg * (Math.PI / 180));
}