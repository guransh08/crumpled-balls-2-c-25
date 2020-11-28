class Ground{
    constructor(x,y){

        var ground1 ={
            isStatic: true
        }
    
        this.body = Bodies.rectangle(x,y,50,50,ground1);
        this.width=50;
        this.height=50;
        this.image = loadImage("dustbingreen.png");
        World.add(world,this.body);
        



    }

    display(){
     
        var pos = this.body.position;
        push ();
        translate(pos.x,pos.y)

        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        
        pop ();
       

    }
}

