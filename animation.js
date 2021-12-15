class Animation {
    constructor(x,y) {
        this.x=x;
        this.y = y;
        this.w=2;
        this.h=2;
        this.time = 5;
        this.alive = true;
    }
    draw() {
        ctx.fillStyle="black";
        ctx.fillRect(this.x*cellSize,this.y*cellSize, this.w*cellSize,this.h*cellSize);
    }
    tick(elapsedTime) {
        this.time-=this.elapsedTime;
    }
}