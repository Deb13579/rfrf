class Box{
    constructor(x,y,width,height){
        
        var options = {
            isStatic: false
        }
        this.width = width;
        this.height = height;
        this.bImage = loadImage("dustbingreen.png");
        this.body = Bodies.rectangle(x,y,width,height, options);
        World.add(world,this.body);
    }
display(){
    this.body.position.x = mouseX
    this.body.position.y = mouseY;
    push();
    imageMode(CENTER)
    fill("black");
    image(this.bImage,this.body.position.x,this.body.position.y, this.width, this.height);
    pop();
  }
}
