class Player extends PhysicsObject{
    constructor(x, y) {
        super(x,y,2,1,0,0,true);
        this.speed = 7;
        this.numBullets = 2;
    }

    draw() {
        //ctx.fillStyle="blue";
        //ctx.fillRect(this.x*cellSize,this.y*cellSize, this.w*cellSize, this.h*cellSize);
        if(this.vx>= 0)
        ctx.drawImage(graphics.get("car"),(this.x-.1)*cellSize,(this.y-0.4)*cellSize, (this.w+0.4)*cellSize, (this.h+1)*cellSize);
        else {
            ctx.drawImage(graphics.get("carleft"),(this.x-.1)*cellSize,(this.y-0.4)*cellSize, (this.w+0.4)*cellSize, (this.h+1)*cellSize);
        }
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
        for(let i = 0; i < bullets.items.length; i++) {
            if(bullets.items[i].x < this.x+this.w && bullets.items[i].x+bullets.items[i].w > this.x &&
                bullets.items[i].y < this.y+this.h && bullets.items[i].y+bullets.items[i].h > this.y) {
                   if(bullets.items[i].canBePickedUp) {
                    bullets.items[i].alive=false;
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