class Roof
{
    constructor(x, y, w, h)
    {
        this.body=Bodies.rectangle(x, y, w, h, {'isStatic':true});
        this.x=0;
        this.y=0;
        this.w=600;
        this.h=25;
        World.add(world, this.body);
    }

    display()
    {
        push();
        rectMode(CENTER);
        fill("grey");
        rect(this.body.position.x, this.body.position.y, this.w, this.h);
        pop();
    }
}