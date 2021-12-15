class Rocket extends PhysicsObject{
    constructor(x,y, vx, vy) {
        super(x,y,1.5,4,vx,vy,false);
        this.alive=true;
    }

    handleCollisions() {

        for(let i = 0; i < bullets.items.length; i++) {
            if(bullets.items[i].x < this.x+this.w && bullets.items[i].x+bullets.items[i].w > this.x &&
                bullets.items[i].y < this.y+this.h && bullets.items[i].y+bullets.items[i].h > this.y) {
                   bullets.items[i].canBePickedUp=true;
                   this.alive=false; 
                   animations.add(new Animation(this.x,this.y));
                }
        }

        if(this.y+this.h > 17) {
            this.alive=false;
            //hit the ground - explode
            animations.add(new Animation(this.x,this.y));
      
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

