//var
var player
var block1
var block2
var block3
var block4


// Preload

function preload()
{


}

// Setup
function setup()
{
  createCanvas(windowWidth, windowHeight)
  
player = createSprite(500,500,50,50)
block1 = createSprite(Math.round(random(0,width)), 500, 400, 40)
/*block2 = createSprite()
block3 = createSprite()
block4 = createSprite()
*/


}

// Draw
function draw()
{
background("white")
drawSprites()

//MOVEMENT
if (keyDown("LEFT")){
  player.x -= 10;
}

if (keyDown("RIGHT")){
  player.x += 10;
}

console.log(mouseX, mouseY)




}

