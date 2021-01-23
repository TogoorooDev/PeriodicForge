class Pos{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}
}

class PositionSystem{
	constructor(startxy, distence){
		this.x = startxy.x;
		this.y = startxy.y;

		this.startx = this.x;
		this.starty = this.y;

		this.offset = distence;
	}

	getPos(){
		this.x = this.x + this.offset;
		if (this.x > app.renderer.screen.with){
			this.x = this.startx;
			this.y = this.y + this.offset;
		}
		return new Pos(this.x, this.y);
	}
}