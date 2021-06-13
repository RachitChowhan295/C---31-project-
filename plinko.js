class Plinko {
    constructor(x,y,r){
      
      var options = {
          'isStatic':true,
          'restitution':1,
          'friction':0.0,
          'density':0.7
      }

      this.r=r;
      this.body = Bodies.circle(x,y,(this.r) /2, options);

      World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      ellipse(0, 0,this.r,this.r);
      pop();
    }

  };