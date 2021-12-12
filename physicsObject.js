class PhysicsObject {
    constructor(x,y,w,h,vx,vy,gravity) {
        this.x = x;
        this.y = y;
        this.w=w;
        this.h=h;
        this.vx = vx;
        this.vy = vy;
        this.hasGravity = gravity;
    }

    tick(elapsedTime) {
        this.x+=this.vx;
        this.y+=this.vy;
        if(this.hasGravity) {
              //Gravity
        if(this.y+this.h < 17)
        this.vy += 0.1;
        else {
            this.y = 17 - this.h;
            this.vy = 0;
        }
        }
    }
}

