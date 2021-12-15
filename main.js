var ctx;
var canvas;

var tileImg = new Image();
tileImg.src="assets/tile.png";

var cellSize;

var player = new Player(1,1);
var rocket = new Rocket(3, 3);

//Run once when the page is loaded
function init(){
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");    

resizeCanvas();
window.requestAnimationFrame(tick)
}

//Draw everything
function draw() {
    ctx.fillStyle="white";
    ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height);
    ctx.strokeRect(0,0,ctx.canvas.width,ctx.canvas.height);
    for(let i = 0; i < 20; i++) {
    for(let j = 0; j < 3; j++) {
    ctx.drawImage(tileImg, i*cellSize, (17+j)*cellSize, cellSize, cellSize);
    }
    }
    player.draw();
    rocket.draw();
}


let prevTime = 0;
//Runs every tick
function tick(currentTime) {

    elapsedTime = (currentTime-prevTime)/1000;
    // console.log(currentTime);
    // console.log(prevTime);
    // console.log(elapsedTime);
    player.tick(elapsedTime);
    rocket.tick(elapsedTime);

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
        player.shootBullet(e.clientX, e.clientY);
    }
});


//update on resize
window.addEventListener("resize",()=>{
    resizeCanvas();
});