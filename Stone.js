class Stone{
	constructor(x,y,w, h)
	{
		var options={
			restitution:0.5,
			friction:10,
			density:13
		};
		this.x=x;
		this.y=y;
        this.width=w;
        this.height=h;
		this.body=Bodies.rectangle(this.x,this.y,this.w,this.h, options)
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
			fill("blue");
			
			rect(0, 0, this.w, this.h)

			pop()
	}

}