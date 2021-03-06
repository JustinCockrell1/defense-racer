var ctx;
var canvas;


var graphics = new Graphics();
graphics.add("car","assets/images/Justin'sGame_Left Five.png");
graphics.add("carleft","assets/images/Justin'sGame_Right Five.png");
graphics.add("tile","assets/images/tile.png");
graphics.add("background","assets/images/Justin'sGame_Background.png");
graphics.add("rocket","assets/images/Justin'sGame_Rocket Blue.png");
graphics.add("bullet","assets/images/Justin'sGame_Flyer.png");
graphics.add("explosion1","assets/images/Justin'sGame_Explosion 1.png");
graphics.add("explosion2","assets/images/Justin'sGame_Explosion 2.png");
graphics.add("explosion3","assets/images/Justin'sGame_Explosion 3.png");

var cellSize;

let player = new Player(1,1);
let rockets = new Manager();
let bullets = new Manager();
let animations = new Manager();

let gameRunning = false;

//Run once when the page is loaded
function init(){
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");    

resizeCanvas();
window.requestAnimationFrame(tick)
}

//Draw everything
function draw() {
    ctx.drawImage(graphics.get("background"), 0,0,ctx.canvas.width,ctx.canvas.height);
    // ctx.fillStyle="white";
    // ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
    // ctx.strokeRect(0,0,ctx.canvas.width,ctx.canvas.height);
    // for(let i = 0; i < 20; i++) {
    // for(let j = 0; j < 3; j++) {
    // ctx.drawImage(tileImg, i*cellSize, (17+j)*cellSize, cellSize, cellSize);
    // }
    // }
       player.draw();
    rockets.draw();
    bullets.draw();
    animations.draw();
}


let prevTime = 0;
//Runs every tick
function tick(currentTime) {

    elapsedTime = (currentTime-prevTime)/1000;
    // console.log(currentTime);
    // console.log(prevTime);
    // console.log(elapsedTime);
    player.tick(elapsedTime);
    rockets.tick(elapsedTime);
    bullets.tick(elapsedTime)
    animations.tick(elapsedTime);

    //Spawn rockets
    if(rockets.items.length<2) {
        generateRocket();
    }

    draw();
    prevTime = currentTime;
    window.requestAnimationFrame(tick);
}

//Resizes the canvas to stay fullscreen
function resizeCanvas() {
    if(window.innerWidth>window.innerHeight){
    ctx.canvas.width = window.innerHeight;
    ctx.canvas.height=window.innerHeight;
    }
    else {
    ctx.canvas.width=window.innerWidth;
    ctx.canvas.height=window.innerWidth;
    }
    cellSize = ctx.canvas.width/20;
}

function generateRocket() {
    let x=Math.random()*19;
    let vy = Math.random()*5+3;
    let vx = Math.random()*8-4;
    let y=-3 - Math.random()*10;
    rockets.add(new Rocket(x,y,vx,vy));
}

//declaring empty event listeners
window.addEventListener('touchstart', () => {});
window.addEventListener('touchend', () => {});
window.addEventListener('touchcancel', () => {});
window.addEventListener('touchmove', () => {});

//keypresses
window.addEventListener("keydown",(e)=>{

    let key = e.key;
    console.log(key);
    switch(key) {
        case 'a':
        case 'ArrowLeft':
            player.moveLeft();
        break;
        case 'd':
        case 'ArrowRight':
            player.moveRight();
        break;
        case 'w':
        case 'ArrowUp':
            player.jump();
        break;

    }
    
});

window.addEventListener("click",(e)=>{
    let mouseX,mouseY;
    mouseX = e.clientX - canvas.getBoundingClientRect().x;
    mouseY = e.clientY - canvas.getBoundingClientRect().y;
    if(mouseY > ctx.canvas.height *.8) {
    if(mouseX < ctx.canvas.width/3) {
        player.moveLeft();
    }
    else if(mouseX > ctx.canvas.width*.66){
        player.moveRight();
    }
    else {
        player.jump();
    }
    }
    else {
        player.shootBullet(mouseX, mouseY);
    }
});


//update on resize
window.addEventListener("resize",()=>{
    resizeCanvas();
});