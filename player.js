class Player extends PhysicsObject{
    constructor(x, y) {
        super(x,y,2,1,0,0,true);
        this.speed = 4;
    }

    draw() {
        ctx.fillStyle="blue";
        ctx.fillRect(this.x*cellSize,this.y*cellSize, this.w*cellSize, this.h*cellSize);
    }

    moveLeft() {
        this.vx = -this.speed;
    }
    moveRight() {
        this.vx = this.speed;
    }
    jump() {
        this.vy = -9;
    }

    shootBullet(x,y) {
        console.log(x + " " + y);
    }
}