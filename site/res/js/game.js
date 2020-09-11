const canvas = document.querySelector("#gameWindow");

const app = new PIXI.Application({
	view: canvas,
	width: window.innerWidth,
	height: window.innerHeight,

});

let loader = PIXI.Loader.shared;
loader.add("res/img/bens-face.png");
loader.load();

var ben;

loader.onComplete.add(handleLoaderComplete);
loader.onProgress.add(handleLoaderProgess);

function handleLoaderComplete() {
	let texture = loader.resources["res/img/bens-face.png"].texture;
	ben = new PIXI.Sprite(texture);
	ben.anchor.x = 0.5;
	ben.anchor.y = 0.5;

	app.stage.addChild(ben);
	app.ticker.add(animate);

}

function handleLoaderProgess(loader, resource){
	console.log(loader.progress + "% Loaded");
}

function handleLoadError(){
	console.log('Texture load error');
}

function handleLoadAsset(){
	console.log("Asset Loaded");
}

function animate(){
	ben.x = app.renderer.screen.width / 2;
	ben.y = app.renderer.screen.height / 2;

	ben.rotation += 0.1;
}