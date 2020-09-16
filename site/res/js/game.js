const canvas = document.querySelector("#gameWindow");

console.log("Working!");

let _w = window.innerWidth;
let _h = window.innerHeight;

//let aether = new Element("Aether", "Ae", "5", 450, 100, 0x3f3f3f, 0x000000, 0xFFFFFF, 75);

const app = new PIXI.Application({
	view: canvas,
	width: _w,
	height: _h,
	antialias: true,
	autoDensity: true,
	backgroundColor: 0xdddddd
});
					   /*Name, Symbol, Number, X, Y, Border Cl, Background, Text, Size*/  
let earth = new Element("Earth", "Er", "1", 50, 100, 0x7c7368, 0x594f45, 0xFFFFFF, 75);
let water = new Element("Water", "Wt", "2", 150, 100, 0x589ffc, 0x83eefc, 0x000000, 75);
let sky = new Element("Air", "Ai", "3", 250, 100, 0x589ffc, 0x83eefc, 0x000000, 75);
let fire = new Element("Fire", "Fr", "4", 350, 100, 0xfc8f1b, 0xfcbe7b, 0xFFFFFF, 75);
let steam = new Element("Steam", "Sm", "5", 450, 100, 0x161616, 0x666666, 0xFFFFFF, 75);


var selectorLock = false;
var selectedThings = [];

earth.renderElement();
water.renderElement();
sky.renderElement();
fire.renderElement();
steam.renderElement();
//aether.renderElement();

app.ticker.add(resize);
//app.ticker.add(draw);

function resize(){
	_w = window.innerWidth;
	_h = window.innerHeight;
	app.renderer.resize(_w, _h);
}

function combine(){
	console.log(selectedThings);
	selectedThings[0] = null;
	selectedThings[1] = null;
}

function draw(){

}