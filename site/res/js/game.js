const canvas = document.querySelector("#gameWindow");

console.log("Working!");

let _w = window.innerWidth;
let _h = window.innerHeight;

let outside = null;

//let aether = new Element("Aether", "Ae", "5", 450, 100, 0x3f3f3f, 0x000000, 0xFFFFFF, 75);

const app = new PIXI.Application({
	view: canvas,
	width: _w,
	height: _h,
	antialias: true,
	autoDensity: true,
	backgroundColor: 0xdddddd
});

var elements = [];

// const brownColorScheme = new ColorScheme(0x7c7368, 0x594f45, 0xFFFFFF);
// const lightBlueColorScheme = new ColorScheme(0x589ffc, 0x83eefc, 0x000000);
                        /*Name, Symbol, Number, X, Y, Color Scheme,             Size*/  
elements[0] = new Element("Earth", "Er", "1", 50, 100, ColorScheme.colorSchemes[0], 75);
elements[1] = new Element("Water", "Wt", "2", 150, 100, ColorScheme.colorSchemes[1], 75);
elements[2] = new Element("Air", "Ai", "3", 250, 100, ColorScheme.colorSchemes[1], 75);
elements[3] = new Element("Fire", "Fr", "4", 350, 100, ColorScheme.colorSchemes[3], 75);

// elements[0] = new Element("Earth", "Er", "1", 50, 100, 0x7c7368, 0x594f45, 0xFFFFFF, 75);
// elements[1] = new Element("Water", "Wt", "2", 150, 100, 0x589ffc, 0x83eefc, 0x000000, 75);
// elements[2] = new Element("Air", "Ai", "3", 250, 100, 0x589ffc, 0x83eefc, 0x000000, 75);
// elements[3] = new Element("Fire", "Fr", "4", 350, 100, 0xfc8f1b, 0xfcbe7b, 0xFFFFFF, 75);
// elements[4] = new Element("Steam", "Sm", "5", 450, 100, 0x454545, 0x666666, 0xFFFFFF, 75);


var selectorLock = false;
var selectedThings = [];

elements[0].show();
elements[1].show();
elements[2].show();
elements[3].show();

app.ticker.add(resize);
//app.ticker.add(draw);

function resize(){
	_w = window.innerWidth;
	_h = window.innerHeight;
	app.renderer.resize(_w, _h);
}

function combine(){
	//console.log(selectedThings);

	if (selectedThings[0].number > selectedThings[1].number){
		let buffer = selectedThings[1];
		selectedThings[1] = selectedThings[0];
		selectedThings[0] = buffer;
	}

	if (selectedThings[0].number == "2" && selectedThings[1].number == "4"){
		elements[4].show();
	}

	selectedThings[0].deselect();
	selectedThings[1].deselect();

	// selectedThings[0] = null;
	// selectedThings[1] = null;
}

function draw(){
}