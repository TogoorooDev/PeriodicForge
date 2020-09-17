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

elementList = new ElementContainer();

                           /*Name, Symbol, Number, X, Y, Color Scheme,             Size*/  
elementList.add(new Element("Earth", "Er", "1", 50, 100, ColorScheme.colorSchemes[0], 75));
elementList.add(new Element("Water", "Wt", "2", 150, 100, ColorScheme.colorSchemes[1], 75));
elementList.add(new Element("Air", "Ai", "3", 250, 100, ColorScheme.colorSchemes[1], 75));
elementList.add(new Element("Fire", "Fr", "4", 350, 100, ColorScheme.colorSchemes[3], 75));

// elements[0] = new Element("Earth", "Er", "1", 50, 100, ColorScheme.colorSchemes[0], 75);
// elements[1] = new Element("Water", "Wt", "2", 150, 100, ColorScheme.colorSchemes[1], 75);
// elements[2] = new Element("Air", "Ai", "3", 250, 100, ColorScheme.colorSchemes[1], 75);
// elements[3] = new Element("Fire", "Fr", "4", 350, 100, ColorScheme.colorSchemes[3], 75);

let newElements = JSON.parse(parseElementList);
newElements.forEach((out) => {
	// console.log(out.name);
	elementList.add(new Element(out.name, out.symbol, out.number, 450, 100, ColorScheme.colorSchemes[out.colorScheme], 75, out.snum, out.bnum));
})

var selectorLock = false;
var selectedThings = [];

elementList.get(1)?.show();
elementList.get(2)?.show();
elementList.get(3)?.show();
elementList.get(4)?.show();


app.ticker.add(resize);
//app.ticker.add(draw);

function resize(){
	_w = window.innerWidth;
	_h = window.innerHeight;
	app.renderer.resize(_w, _h);
}

function combine(){
	//console.log(selectedThings);
	let low, high;
	if (selectedThings[0].number > selectedThings[1].number){
		low = selectedThings[1].number;
		high = selectedThings[0].number;
	}else{
		low = selectedThings[0].number;
		high = selectedThings[1].number;
	}

	selectedThings[0].deselect();
	selectedThings[1].deselect();

	elementList.getCompatable(low, high)?.show();

	// selectedThings[0] = null;
	// selectedThings[1] = null;
}

function draw(){
}