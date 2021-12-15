class Player extends PhysicsObject{
    constructor(x, y) {
        super(x,y,2,1,0,0,true);
        this.speed = 7;
        this.numBullets = 2;
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

    handleCollisions() {
       
        //check if hit bullets
        for(let i = 0; i < bullets.bullets.length; i++) {
            if(bullets.bullets[i].x < this.x+this.w && bullets.bullets[i].x+bullets.bullets[i].w > this.x &&
                bullets.bullets[i].y < this.y+this.h && bullets.bullets[i].y+bullets.bullets[i].h > this.y) {
                   if(bullets.bullets[i].canBePickedUp) {
                    bullets.bullets[i].alive=false;
                    this.numBullets++;
                   }
                    
                }
        }

        //check if hit walls
        if(this.x<0) {
            this.x=0;
            this.moveRight();
        }
        else if(this.x+this.w>ctx.canvas.width/cellSize) {
            this.x = ctx.canvas.width/cellSize-this.w;
            this.moveLeft();
        }
    }

    shootBullet(x,y) {
        if(this.numBullets>0) {
        x/=cellSize;
        y/=cellSize;

        let diffX = x-this.x;
        let diffY = y-this.y;
        let distance = Math.sqrt(diffX*diffX + diffY*diffY);

        bullets.add(new Bullet(this.x, this.y, (diffX/distance)*30,(diffY/distance)*30));
        this.numBullets--;
        }

    }
}