var canvas=document.querySelector('canvas');
var c=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

/*var x=Math.random()*innerWidth;
var y=Math.random()*innerHeight;
var dx=5;
var dy=5;
var radius=40;*/

/*  c.beginPath();
  c.arc(x,y,radius,0,Math.PI*2,false);
  c.stroke();
  if(x+radius>innerWidth||x-radius<0)
  {
  dx=-dx;
  }
  if(y+radius>innerHeight||y-radius<0)
  {
  dy=-dy;
  }
  x+=dx;
  y+=dy;*/
  var mouse ={
    x:undefined,
    y:undefined
  }
  var minRadius=2;
  var maxRadius=40;
  var colorArray=[
    'green',
    'yellow',
    'red',
    'blue',
    'purple'
  ];
window.addEventListener('touchmove',
function (event) {
  mouse.x=event.x;
  mouse.y=event.y;
  
}
)

window.addEventListener('resize',function()
{
  canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
})





function Circle(x,y,dx,dy,radius) {
  this.x=x;
  this.y=y;
  this.dx=dx;
  this.dy=dy;
  this.radius=radius;
  this.minRadius=minRadius;
  this.color=colorArray[Math.floor(Math.random()*colorArray.length)]
  this.draw=function () {
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);  
    c.fillStyle=this.color;
    c.fill()
   
    
  }
  this.update=function () {
    
   if(this.x+this.radius>innerWidth||this.x-this.radius<0)
  {
  this.dx=-this.dx;
 }
 if(this.y+this.radius>innerHeight||this.y-this.radius<0)
 {
 this.dy=-this.dy;
 }
 this.x+=this.dx;
 this.y+=this.dy;


 if(mouse.x-this.x<50&&mouse.x-this.x>-50&&
  mouse.y-this.y<50&&mouse.y-this.y>-50) 
 {
  if(this.radius<maxRadius)
  {
    this.radius+=1;
  }
 
 }
 else if(this.radius>minRadius){
  this.radius-=1
 }


 this.draw();
  }
}


var circleArray=[];

function init()
{
  circleArray=[];
  for (var i = 0; i <1000; i++) {
    var circle=new Circle()
    var x=Math.random()*(innerWidth-radius*2)+radius;
    var y=Math.random()*(innerHeight-radius*2)+radius;
    var dx=(Math.random()-0.5);
    var dy=(Math.random()-0.5);
    var radius=Math.random()*3+1;
    
    circleArray.push(new Circle(x,y,dx,dy,radius))
  }
}
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0,0,innerWidth,innerHeight)
  
  for (var i = 0; i <circleArray.length; i++) {
    circleArray[i].update();
  }
  
  
  
}
init()
animate()


