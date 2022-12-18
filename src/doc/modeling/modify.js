import { castElement, changeCursor, filterModel } from "../utils";
export function copyElement(view, btn, callback) {
	var div;
	var element;
	function draw() {
		btn.style.background = "#aaaaa9";
		view.domElement.addEventListener("click", onMouseDown, false);
		view.domElement.addEventListener("mousemove", onMouseMove, false);
		window.addEventListener("keydown", onkeydown, false);
	}
	function onkeydown(event) {
		var keyCode = event.keyCode;
		if (keyCode == 27 || keyCode == 13) {
			finishCallBack();
		}
	}
	function onMouseDown(e) {
		var found = castElement(e, view, filterModel.model(view.scene))[0];

		element = found ? found.object : null;
	}

	function onMouseMove(e) {
		if (!div) {
			div = document.createElement("div");
			div.className = "card mouseModify";
			div.textContent = "Select element";
			div.style.top = e.clientY + "px";
			div.style.left = e.clientX + "px";
			document.body.appendChild(div);
		} else {
			div.style.top = e.clientY + 5 + "px";
			div.style.left = e.clientX + 5 + "px";
		}
		if (element) {
			changeCursor().move(view.domElement);
		}
	}
	function finishCallBack() {
		if (div) {
			div.remove();
		}
		btn.style.background = "none";
		view.domElement.removeEventListener("click", onMouseDown);
		view.domElement.removeEventListener("mousemove", onMouseMove);
		window.removeEventListener("keydown", onkeydown);
		callback();
	}

	draw();
}
export function TrimElement(view, btn, callback) {
	var div;
	var element;
	function draw() {
		btn.style.background = "#aaaaa9";
		view.domElement.addEventListener("click", onMouseDown, false);
		view.domElement.addEventListener("mousemove", onMouseMove, false);
		window.addEventListener("keydown", onkeydown, false);
	}
	function onkeydown(event) {
		var keyCode = event.keyCode;
		if (keyCode == 27 || keyCode == 13) {
			finishCallBack();
		}
	}
	function onMouseDown(e) {
		var found = castElement(e, view, filterModel.model(view.scene))[0];

		element = found ? found.object : null;
	}

	function onMouseMove(e) {
		if (!div) {
			div = document.createElement("div");
			div.className = "card mouseModify";
			div.textContent = "Select element";
			div.style.top = e.clientY + "px";
			div.style.left = e.clientX + "px";
			document.body.appendChild(div);
		} else {
			div.style.top = e.clientY + 5 + "px";
			div.style.left = e.clientX + 5 + "px";
		}
		if (element) {
			changeCursor().move(view.domElement);
		}
	}
	function finishCallBack() {
		if (div) {
			div.remove();
		}
		btn.style.background = "none";
		view.domElement.removeEventListener("click", onMouseDown);
		view.domElement.removeEventListener("mousemove", onMouseMove);
		window.removeEventListener("keydown", onkeydown);
		callback();
	}

	draw();
}
