class Rope
{
    constructor(bodyA, bodyB)
    {
        var rope_pro={bodyA:bodyA, bodyB:bodyB, pointB:{x:50, y:0}, stiffness:0.0007, length:0.0001}
        this.chain=Constraint.create(rope_pro);
        World.add(world, this.chain);
    }

    display()
    {
        line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y)
    }
}