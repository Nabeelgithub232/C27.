class Chain {
    constructor(body1, body2) {
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.05,
            length: 50
        }
        this.body = Matter.Constraint.create(options)
        World.add(world,this.body)

    }
    display(){
        var pointA = this.body.bodyA.position
        var pointB = this.body.bodyB.position
        strokeWeight (5)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
   
    }


}