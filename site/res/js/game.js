const canvas = document.querySelector("#gameWindow");

const app = new PIXI.Application({
	view: canvas,
	width: window.innerWidth,
	height: window.innerHeight,
	antialias: true
});

let graphic = new PIXI.Graphics();
graphic.x = app.renderer.width / 2;
graphic.y = app.renderer.height / 2;

graphic.lineStyle(10, 0xffff00);
graphic.beginFill(0xff0000);

graphic.moveTo(0, 0);
graphic.lineTo(100, 100);

graphic.bezierCurveTo(-200, 200, -200, 100, 0, 0);

graphic.closePath();

graphic.endFill();

app.stage.addChild(graphic);

app.ticker.add(animate);

function animate(){

}