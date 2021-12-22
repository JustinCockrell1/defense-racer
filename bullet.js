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
        //ctx.fillStyle="grey";
        //ctx.fillRect(this.x*cellSize,this.y*cellSize, this.w*cellSize, this.h*cellSize);

        let angle = Math.atan2(this.vy,this.vx);
        let degrees = 180 *angle/Math.PI;
        degrees = (360+Math.round(degrees))%360+90;
   
        console.log(`${degrees} ${this.vx} ${this.vy}`);

        let x = this.x*cellSize+(this.w*cellSize)/2;
        let y = this.y*cellSize+(this.h*cellSize)/2;
        ctx.translate(x,y);
        ctx.rotate(degrees/180*Math.PI);
        ctx.translate(-x,-y);
        ctx.drawImage(graphics.get("bullet"), (this.x-0.2)*cellSize,(this.y-0.2)*cellSize, (this.w+0.4)*cellSize, (this.h+0.4)*cellSize);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        
    }
}



