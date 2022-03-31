class Iron{
	constructor(x,y)
	{
		var options={
			restitution:0.5,
			friction:10,
			density:45
		};
                this.width=50;
                this.height=50;
                this.body=Bodies.rectangle(x,y,50,50, options)
                World.add(world, this.body);
        
            }
            display()
            {
                    var pos=this.body.position;		
                    push()
                    translate(pos.x, pos.y);
                    rectMode(CENTER)
                    strokeWeight(4);
                    stroke("black");
                    fill(35);
                    
                    rect(0, 0, this.width, this.height);
        
                    pop()
            }
        }