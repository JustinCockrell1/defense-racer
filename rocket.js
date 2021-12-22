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
                   animations.add(new Animation(bullets.items[i].x+bullets.items[i].w/2,bullets.items[i].y+bullets.items[i].h/2));
                }
        }

        if(this.y+this.h > 17) {
            this.alive=false;
            //hit the ground - explode
            animations.add(new Animation(this.x+this.w/2,this.y+this.h));
      
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
        //ctx.fillStyle="green";
        //ctx.fillRect(this.x*cellSize, this.y*cellSize, this.w*cellSize,this.h*cellSize);

        let angle = Math.atan2(this.vy,this.vx);


        let x = this.x*cellSize+(this.w*cellSize)/2;
        let y = this.y*cellSize+(this.h*cellSize)/2;
        ctx.translate(x,y);
        ctx.rotate(angle+1.5708);
        ctx.translate(-x,-y);

        ctx.drawImage(graphics.get("rocket"), this.x*cellSize, this.y*cellSize, this.w*cellSize,this.h*cellSize);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
}

