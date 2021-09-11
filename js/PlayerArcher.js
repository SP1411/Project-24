class PlayerArcher {
  constructor(x, y, width, height) {
    var options = {  
      isStatic: true
    };
    this.image = loadImage("./assets/playerArcher.png");
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
  }
  
  
    
  

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    Matter.Body.setAngle(this.body, -PI/2);
    if(move === "UP" && computerArcher.body.angle < 1.77) {
        angleValue = 0.1;
    }  else {
         angleValue = -0.1;
    }
    
    if(move === "DOWN" && computerArcher.body.angle > 1.47) {
        angleValue = -0.1;
    }  else {
         angleValue = 0.1;
    }
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}