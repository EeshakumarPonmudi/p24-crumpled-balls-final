class Dustbin {
    constructor(x, y, width, height, dustbin_options) {
        var dustbin_options = {
            isStatic: true
        }
        
        this.body = Bodies.rectangle(x, y, width, height, dustbin_options);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
       
        World.add(world,this.body);
   
   }

    display() {
        var pos = this.body.position;
       imageMode(CENTER);
       image(this.image, pos.x,pos.y, 130, 180);
       
    }
}