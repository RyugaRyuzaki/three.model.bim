export function setMainViewStyle(div) {
	div.style.width = "100%";
	div.style.height = "100%";
	div.style.position = "absolute";
	div.style.left = 0;
	div.style.top = 0;
	div.style.outline = "none";
}

export function setCubeViewStyle(div, config) {
	div.style.position = "absolute";
	div.style.top = 0;
	div.style.right = 0;
	div.style.zIndex = 999;
	if (!config) {
		div.style.width = "140px";
		div.style.height = "140px";
	} else {
		div.style.width = config.width ? config.width + "px" : "140px";
		div.style.height = config.height ? config.height + "px" : "140px";
	}
}
export function setViewCanvasStyle(canvas) {
	canvas.style.width = "100%";
	canvas.style.height = "100%";
}
export function setOverLayStyle(dom) {
	dom.style.width = "600px";
	dom.style.height = "600px";
}
export function createDomElementView3D(parentContainer) {
	var mainContainer = document.createElement("div");
	var mainCanvas = document.createElement("canvas");
	var cubeContainer = document.createElement("div");
	var cubeCanvas = document.createElement("canvas");
	if (parentContainer) {
		parentContainer.appendChild(mainContainer);
		parentContainer.appendChild(cubeContainer);
	} else {
		document.body.appendChild(mainContainer);
		document.body.appendChild(cubeContainer);
	}
	mainContainer.appendChild(mainCanvas);
	cubeContainer.appendChild(cubeCanvas);
	setMainViewStyle(mainContainer);
	setViewCanvasStyle(mainCanvas);
	setCubeViewStyle(cubeContainer);
	setViewCanvasStyle(cubeCanvas);
	return {
		mainContainer: mainContainer,
		mainCanvas: mainCanvas,
		cubeContainer: cubeContainer,
		cubeCanvas: cubeCanvas,
	};
}
export function setGuiStyle(div) {
	div.style.position = "fixed";
	div.style.top = "140px";
	div.style.right = 0;
	div.style.height = "calc(100vh - 140px)";
	div.style.maxHeight = "100vh%";
	div.style.overflowY = "auto";
	div.style.display = "none";
}
