class Bob
{
    constructor(x, y, r)
    {
        this.body=Bodies.circle(x, y, r, {'restitution':1.5, 'density':1.5});
        this.x=0;
        this.y=0;
        this.r=45;
        World.add(world, this.body);
    }

    display()
    {
        push();
        ellipseMode(RADIUS);
        fill("red");
        ellipse(this.body.position.x, this.body.position.y, this.r);
        pop();
    }
}