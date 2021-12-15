class Rocket extends PhysicsObject{
    constructor(x,y, vx, vy) {
        super(x,y,1.5,4,vx,vy,false);
  
    }

 

    draw() {
        ctx.fillStyle="green";
        ctx.fillRect(this.x*cellSize, this.y*cellSize, this.w*cellSize,this.h*cellSize);
    }
}


class Rockets {
    constructor() {
        this.rockets = [];
    }

    tick(elapsedTime) {
        this.rockets.forEach((rocket)=>{
            rocket.tick(elapsedTime);
        })
    }
    draw() {
        this.rockets.forEach((rocket)=>{
            rocket.draw();
        })
    }
    add(rocket) {
        this.rockets.push(rocket);
    }
}
