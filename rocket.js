class Rocket extends PhysicsObject{
    constructor(x,y) {
        super(x,y,1.5,4,0,0,false);
  
    }

 

    draw() {
        ctx.fillStyle="green";
        ctx.fillRect(this.x*cellSize, this.y*cellSize, this.w*cellSize,this.h*cellSize);
    }
}



