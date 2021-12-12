class Rocket extends PhysicsObject{
    constructor(x,y) {
        super(x,y,3,5,0,0.2,false);
  
    }

 

    draw() {
        ctx.fillStyle="green";
        ctx.fillRect(this.x*cellSize, this.y*cellSize, this.w*cellSize,this.h*cellSize);
    }
}



