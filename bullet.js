class Bullet extends PhysicsObject {
    constructor(x, y, vx, vy) {
        super(x,y,1,1,vx,vy,true);
        this.alive = true;
        this.canBePickedUp=false;
    }

    handleCollisions() {
        if(this.x<0) {
            this.vx*=-1;
            this.x = 0;
        }
        else if (this.x+this.w>ctx.canvas.width/cellSize) {
            this.x = ctx.canvas.width/cellSize-this.w;
            this.vx*=-1;
        }
        if(this.y>=16) {
            this.vx=0;
            this.canBePickedUp=true;
        }
    }

    draw() {
        ctx.fillStyle="grey";
        ctx.fillRect(this.x*cellSize,this.y*cellSize, this.w*cellSize, this.h*cellSize);
    }
}

class Bullets {
    constructor() {
        this.bullets = [];
    }

    tick(elapsedTime) {
        this.bullets.forEach((bullet,i)=>{
            if(bullet.alive)
            bullet.tick(elapsedTime);
            else 
            this.bullets.splice(i,1);
        })
    }
    draw() {
        this.bullets.forEach((bullet)=>{
            bullet.draw();
        })
    }
    add(bullet) {
        this.bullets.push(bullet);
    }
}


