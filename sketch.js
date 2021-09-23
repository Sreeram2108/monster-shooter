function preload(){
  playerimg=loadImage('Belle.png')
monsterimg=loadImage('Monster.png')  
}

function setup() {
  createCanvas(800,550);
  player= createSprite(100, 500, 50, 50);
  player.addImage(playerimg)
  player.scale=0.3
  player.debug = false
  player.setCollider("rectangle",-60,30,260,300)
  obg=createGroup()
  edges=createEdgeSprites()
  ob1=createSprite(250,500,70,20)
  ob2=createSprite(350,400,70,20)
  ob3=createSprite(550,300,70,20)
  ob4=createSprite(150,300,70,20)
  ob5=createSprite(400,200,70,20)
  ob6=createSprite(550,100,70,20)
  ob7=createSprite(650,500,70,20)
  ob8=createSprite(250,100,70,20)
  obg.add(ob1)
  obg.add(ob2)
  obg.add(ob3)
  obg.add(ob4)
  obg.add(ob5)
  obg.add(ob6)
  obg.add(ob7)
  obg.add(ob8)
}

function draw() {
  background(0);
  player.collide(edges)
  if(keyDown('space')){
    player.velocityY=-3
    obg.setVelocityEach(0,3)
  }
  player.velocityY+=0.2
  player.velocityX=0
  if(keyDown('left')){
    player.velocityX=-2
    player.mirrorX(-1)
  }
  if(keyDown('right')){
    player.velocityX=2
    player.mirrorX(1)
  }
  if(ob1.y>550){
    ob1.y= 0
  }
  if(ob2.y>550){
    ob2.y= 0
  }
  if(ob3.y>550){
    ob3.y= 0
  }
  if(ob4.y>550){
    ob4.y= 0
  }
  if(ob5.y>550){
    ob5.y= 0
  }
  if(ob6.y>550){
    ob6.y= 0
  }
  if(ob7.y>550){
    ob7.y= 0
  }
  if(ob8.y>550){
    ob8.y= 0
  }
  
  if(frameCount%30===0){
    monster=createSprite(0,random(50,450))
 monster.addImage(monsterimg)  
 monster.scale=0.1
 switch(Math.round(random(1,2))) {
   case 1: monster.x = 0
   monster.velocityX = 2
   break
   case 2: monster.x = 800
   monster.velocityX = -2
   break
 }
  }
  player.collide(obg)
  drawSprites();
}