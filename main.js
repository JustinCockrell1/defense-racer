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

//Runs every tick
function tick(elapsedTime) {

    player.tick();
    rocket.tick();

    draw();
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
            player.vx=-0.1;
        break;
        case 'd':
        case 'ArrowRight':
            player.vx=.1;
        break;
        case 'w':
        case 'ArrowUp':
            player.vy = -0.6;
        break;

    }
    
});

window.addEventListener("click",(e)=>{
    if(e.clientX > window.innerWidth/2) {
        player.vx=.1;
    }
    else {
        player.vx=-0.1;
    }
});


//update on resize
window.addEventListener("resize",()=>{
    resizeCanvas();
});