class Player extends PhysicsObject{
    constructor(x, y) {
        super(x,y,2,1,0,0,true);
    }

    draw() {
        ctx.fillStyle="blue";
        ctx.fillRect(this.x*cellSize,this.y*cellSize, this.w*cellSize, this.h*cellSize);
    }
}