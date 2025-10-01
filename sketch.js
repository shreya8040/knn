var points =[];
class Point   
{
  constructor()
  {
    this.x=Math.random()*width;
    this.y=Math.random()*height;
    this.class=floor(Math.random()*2);
    this.one=["✨"];
    this.zero=["❤️"];
    this.size = 30;
    
  }
  display()
  {
  stroke(0);
  strokeWeight(2);
  textSize(this.size);
  if(this.class==1)
    text(this.one, this.x,this.y);
  else
    text(this.zero, this.x,this.y);
  
  }
}
function setup() {
  createCanvas(1500, 600);
  test_point=new Point();
  test_point.display();
  for(var i=0; i<100 ;i++)
  {
    points.push(new Point());
  }
}

function draw() {
  background(200,250,100);
  for(var i=0;i<points.length;i++)
  {
    points[i].display();
  }
  classifyMouse();
}

function classifyMouse()
{
  let vardistance =[];
  for(var i=0;i<points.length;i++)
  {
      let distance = dist(points[i].x,points[i].y,mouseX,mouseY);
      vardistance.push([distance,points[i].class]);
  }
      vardistance.sort((a,b)=>a[0]-b[0]);
      let numzero =0;
      let numone=0;
      for(var i=0;i<5;i++)
      {
        if(vardistance[i][1]==1)
          numone++;
        else
          numzero++;
      }
  noStroke();
  if(numone>numzero)
    text("✨", mouseX,mouseY);
  else
   text("❤️", mouseX,mouseY);
  
}
