function resize(){
	_w = window.innerWidth;
	_h = window.innerHeight;

	renderer.resize(_w, _h);
}

const canvas = document.querySelector("#gameWindow");
// const app = new PIXI.Application({
// 	view: canvas,
// 	width: window.innerWidth,
// 	height: window.innerHeight,
// });

let _w = window.innerWidth;
let _h = window.innerHeight;

const renderer = new PIXI.Renderer({
	view: canvas,
	width: _w,
	height: _h,
	resolution: window.devicePixelRatio,
	autoDensity: true
});

window.addEventListener("resize", resize);

const stage = new PIXI.Container();

const texture = PIXI.Texture.from("res/img/bens-face.png");
const img = new PIXI.Sprite(texture);

img.x = renderer.width / 2;
img.y = renderer.height / 2;

img.anchor.x = 0.5;
img.anchor.y = 0.5;

stage.addChild(img);

const ticker = new PIXI.Ticker();
ticker.add(animate);
ticker.start();

function animate(){
	img.rotation += 0.1;

	img.x = renderer.screen.width / 2;
	img.y = renderer.screen.height / 2;

	renderer.render(stage);
}