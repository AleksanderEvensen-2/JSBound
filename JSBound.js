var JB = { };




JB.Version = "v.1.0.0"

console.log('%cJSBound ' + JB.Version, 'background: #b30086; color: #000000; font-size: 30px');


JB.fpsCap = 25;
JB.Color = 'black';
JB.Width = null;
JB.Height = null;
JB.BackColor = null;
JB.img = { };
JB.key = {
  a:65,
  b:66,
  c:67,
  d:68,
  e:69,
  f:70,
  g:71,
  h:72,
  i:73,
  j:74,
  k:75,
  l:76,
  m:77,
  n:78,
  o:79,
  p:80,
  q:81,
  r:82,
  s:83,
  t:84,
  u:85,
  v:86,
  w:87,
  x:88,
  y:89,
  z:90,
  space:32,
}
var ctx;



JB.setFrames = function(fps){
  JB.fpsCap = fps;
}

JB.createCanvas = function(width, height) {

    document.body.style.margin = "0";

    var canvas = document.createElement('canvas');
    canvas.id = "canvas";

    JB.Width = width;
    JB.Height = height;

    canvas.width = width;
    canvas.height = height;
    canvas.style.position = "adsolute";



    document.body.appendChild(canvas);
}



/*


Color


*/

JB.setColor = function(color){
  JB.Color = color;
}


JB.backgroundColor = function(color){
  JB.BackColor = color;
}


/*


End Color


*/




/*


Drawing


*/


JB.addImage = function(Name, src){
  JB.img[Name] = new Image();
  JB.img[Name].src = src;
}


JB.fillRect = function(x, y, width, height){
  ctx.fillStyle = JB.Color;
  ctx.fillRect(x,y,width,height)
}




// <--End Drawings-->










window.onload = function(){
  ctx = document.getElementById("canvas").getContext("2d");
  JBsetup();
}


setInterval(function(){
  ctx.clearRect(0,0,JB.Width,JB.Height);


  if(JB.BackColor != null){
    ctx.save();
    ctx.fillStyle = JB.BackColor;
    ctx.fillRect(0,0,JB.Width,JB.Height);
    ctx.restore();
  }

  JBupdate();








},1000/JB.fpsCap);
