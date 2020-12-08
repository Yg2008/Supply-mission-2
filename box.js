class Box{
    constructor(x,y,width,height){
        var boxop={
            restitution:0.8,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,boxop);
        this.width = width;
        this.height = height;
        World.add(world,this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke("red");
        fill("black");
        rect(0,0,this.width,this.height);
        pop();
    }
}