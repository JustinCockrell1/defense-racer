class Rocket extends PhysicsObject{
    constructor(x,y, vx, vy) {
        super(x,y,1.5,4,vx,vy,false);
        this.alive=true;
    }

    handleCollisions() {

        for(let i = 0; i < bullets.bullets.length; i++) {
            if(bullets.bullets[i].x < this.x+this.w && bullets.bullets[i].x+bullets.bullets[i].w > this.x &&
                bullets.bullets[i].y < this.y+this.h && bullets.bullets[i].y+bullets.bullets[i].h > this.y) {
                   bullets.bullets[i].canBePickedUp=true;
                   this.alive=false; 
                }
        }

        if(this.y+this.h > 17) {
            this.alive=false;
            //hit the ground - explode
      
        }
        if(this.x<0) {
            this.vx*=-1;
            this.x = 0;
        }
        else if (this.x+this.w>ctx.canvas.width/cellSize) {
            this.x = ctx.canvas.width/cellSize-this.w;
            this.vx*=-1;
        }
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
        this.rockets.forEach((rocket,i)=>{
            if(rocket.alive)
            rocket.tick(elapsedTime);
            else
            this.rockets.splice(i,1);
        })
    }
    draw() {
        this.rockets.forEach((rocket)=>{
            if(rocket.alive)
            rocket.draw();
        })
    }
    add(rocket) {
        this.rockets.push(rocket);
    }
}
