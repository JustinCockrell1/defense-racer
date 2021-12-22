class Animation {
    constructor(x,y) {
        this.w=2;
        this.h=2;
        this.x=x-this.w/2;
        this.y = y-this.h/2;
   
        this.time = 5;
        this.alive = true;
    }
    draw() {

        ctx.drawImage(graphics.get("explosion2"),this.x*cellSize,this.y*cellSize, this.w*cellSize,this.h*cellSize)
    }
    tick(elapsedTime) {
        this.time-=elapsedTime;
        if(this.time<=0) {
            this.alive=false;
        }
    }
}