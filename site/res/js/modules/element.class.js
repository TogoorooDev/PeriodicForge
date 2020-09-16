class Element {

	constructor(eleName, eleSymbol, eleNumber, x, y, color, backgroundColor, fontColor, size) {
		this.eleName = eleName;
		this.symbol = eleSymbol;
		this.number = eleNumber;
		this.x = x;
		this.y = y;
		this.color = color;
		this.backgroundColor = backgroundColor;
		this.fontColor = fontColor;
		this.size = size;
		this.selected = false;
		this.selectObj = this.setupSelect();
		this.eleContainer = new PIXI.Container();
		this.eleContainer.interactive = true;
		this.eleContainer.buttonMode = true;
		this.eleContainer.on("pointerdown", this.clickhandler, this);
		app.stage.addChild(this.selectObj);
	}

	setupSelect(){


		let outline = new PIXI.Graphics();
		outline.lineStyle(3.5, 0xff0000);
		outline.drawRect(this.x - 3.5, this.y - 3.5, this.size + 6, this.size + 6);
		outline.visible = false;
		return outline;
		
	}
	clickhandler(event){

		if (!this.selected){
			this.select();
		
		}else{
			console.log(selectorLock);
			selectorLock = false;
			this.selected = false;
			this.selectObj.visible = false;
			selectedThings[0] = null;
			
		}
	}

	select(){
		if (selectorLock){
			this.selected = false;
			this.selectObj.visible = false;
			console.log(selectorLock);
			selectedThings[1] = this;
			combine();
		}else{
			console.log(selectorLock);
			selectorLock = true;
			this.selected = true;
			this.selectObj.visible = true;
			selectedThings[0] = this;

		}
	}

	deselect(){
		console.log(selectorLock);
		selectorLock = false;
		this.selected = false;
		this.selectObj.visible = false;
		selectedThings[0] = null;
	}

	renderElement(){

		function calculateSymFontSize(givensize) {
			let fontsize = givensize * 0.5;

			return fontsize;
		}
		function calculateSymXPos(x, width, size){
			let offset = (size - width) / 2; 			
			return x + offset;
		}
		function calculateNameFontSize(givensize, width){
				let fontsize = givensize * 0.2;

				return fontsize;
		}
		function calculateNameXPos(x, width, size){
			let offset = (size - width) / 2; 			
			return x + offset;
		}
		function calculateNumberFontSize(givensize, width){
			let fontsize = givensize * 0.25;

			return fontsize;
		}

		//render box
		let elementBox = new PIXI.Graphics();
		elementBox.lineStyle(3.5, this.color);
		elementBox.beginFill(this.backgroundColor)
		elementBox.drawRect(this.x, this.y, this.size, this.size);
		elementBox.endFill();
		
		this.eleContainer.addChild(elementBox);

		//render symbol text
		let symText = new PIXI.Text(this.symbol);
		symText.style = new PIXI.TextStyle({
			fill: this.fontColor,
			fontFamily: "Helvetica",
			fontWeight: 900,
			fontSize: calculateSymFontSize(this.size)
		});
		symText.x = calculateSymXPos(this.x, symText.width, this.size);
		symText.y = this.y;
		this.eleContainer.addChild(symText);

		//render name
		let name = new PIXI.Text(this.eleName);
		name.style = new PIXI.TextStyle({
			fill: this.fontColor,
			fontFamily: "\"Trebuchet MS\", Helvetica, sans-serif",
			wordWrap: true,
			fontSize: calculateNameFontSize(this.size, name.width)
		});
		name.x = calculateNameXPos(this.x, name.width, this.size);
		name.y = this.y + (this.size - 5 - name.style.fontSize);

		this.eleContainer.addChild(name);

		//render number
		let number = new PIXI.Text(this.number);
		number.style = new PIXI.TextStyle({
			fill: this.fontColor,
			fontFamily: "\"Trebuchet MS\", Helvetica, sans-serif",
			fontSize: calculateNumberFontSize(this.size, number.width)
		});
		number.x = this.x + 3.5;
		number.y = this.y;

		this.eleContainer.addChild(number);

		app.stage.addChild(this.eleContainer);
	}

	hide(){
		this.eleContainer.visible = false;
	}

	show(){
		this.eleContainer.visible = true;
	}

	setPos(x, y){
		this.x = x;
		this.y = y;
		//this.renderElement();
		this.eleContainer.x = x;
		this.eleContainer.y = y;
	}
}