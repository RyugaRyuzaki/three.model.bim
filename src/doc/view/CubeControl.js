import {
	AmbientLight,
	DirectionalLight,
	Scene,
	WebGLRenderer,
	OrthographicCamera,
	PerspectiveCamera,
	Raycaster,
	Vector2,
	Vector3,
} from "three";
import { Tween } from "@tweenjs/tween.js";
import { CubeControlMaterial, LightColor } from "../material";
import { BoxCube, switchPick } from "./BoxCube.js";
export class CubeControls {
	constructor(container, canvas, isPerspectiveCamera) {
		this.scene = new Scene();
		this.container = container;
		this.canvas = canvas;
		this.width = this.container.clientWidth;
		this.height = this.container.clientHeight;

		this.initCamera(isPerspectiveCamera);
		this.initLight();
		this.initRenderer();
		this.initRayCaster();
		this.boxCube = new BoxCube(this.scene);
		this.onHover();
	}
	initPerspectiveCamera() {
		var camera = new PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
		camera.position.z = 400;
		camera.position.y = 400;
		camera.position.x = 400;
		camera.lookAt(this.scene.position);
		camera.userData.pos = 400;
		camera.layers.enableAll();
		camera.layers.toggle(1);
		return camera;
	}
	initOrthographicCamera() {
		var camera = new OrthographicCamera(
			this.width / -1,
			this.width / 1,
			this.height / 1,
			this.height / -1,
			-1000,
			1000
		);
		camera.position.z = 100;
		camera.position.y = 100;
		camera.position.x = 100;
		camera.lookAt(0, 0, 0);
		camera.userData.pos = 100;
		camera.layers.enableAll();
		camera.layers.toggle(1);
		return camera;
	}
	initCamera(isPerspectiveCamera) {
		this.perspectiveCamera = this.initPerspectiveCamera();
		this.orthographicCamera = this.initOrthographicCamera();
		this.camera = isPerspectiveCamera ? this.perspectiveCamera : this.orthographicCamera;
	}
	initLight() {
		this.ambientLight = new AmbientLight(LightColor.light, 2);
		this.scene.add(this.ambientLight);
		this.directionalLight = new DirectionalLight(LightColor.light, 2);
		this.directionalLight.position.set(0, 10, 0);
		this.directionalLight.target.position.set(-5, 0, 0);
		this.scene.add(this.directionalLight);
		this.scene.add(this.directionalLight.target);
	}
	initRenderer() {
		this.renderer = new WebGLRenderer({ canvas: this.canvas, alpha: true, antialias: true });
		this.renderer.setSize(this.width, this.height);
		this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		this.renderer.localClippingEnabled = true;
		this.renderer.domElement.setAttribute("tabindex", 1);
	}
	initRayCaster() {
		this.rayCaster = new Raycaster();
		this.rayCaster.firstHitOnly = true;
		this.mouse = new Vector2();
	}
	cast(event) {
		const bounds = this.renderer.domElement.getBoundingClientRect();
		const x1 = event.clientX - bounds.left;
		const y1 = event.clientY - bounds.top;
		const x2 = bounds.right - bounds.left;
		this.mouse.x = (x1 / x2) * 2 - 1;
		const y2 = bounds.bottom - bounds.top;
		this.mouse.y = -(y1 / y2) * 2 + 1;
	}
	onHover() {
		this.mouseOn = false;
		var _this = this;
		_this.renderer.domElement.addEventListener("mousemove", function (event) {
			_this.cast(event);
			_this.mouseOn = true;
		});
		_this.renderer.domElement.addEventListener("mouseout", function (event) {
			_this.mouseOn = false;
		});
	}
	hover() {
		var _this = this;
		if (_this.mouseOn) {
			_this.rayCaster.setFromCamera(_this.mouse, _this.camera);
			const intersects = _this.rayCaster.intersectObjects(_this.scene.children);
			const found = intersects[0];
			if (found) {
				if (!found.object.textCube) {
					_this.renderer.domElement.style.cursor = "pointer";
					found.object.material = CubeControlMaterial.hoverCube;
				}
			} else {
				_this.renderer.domElement.style.cursor = "default";
			}
		}
	}
	onPick(camera, controls) {
		if (this.mouse.x !== 0 || this.mouse.y !== 0) {
			this.rayCaster.setFromCamera(this.mouse, this.camera);
			const intersects = this.rayCaster.intersectObjects(this.scene.children);
			const found = intersects[0];
			if (found) {
				switchPick(camera, controls, found.object.name.trim());
			}
		}
	}
	onGoHome(camera0, controls0) {
		var x = camera0.position.x;
		var y = camera0.position.y;
		var z = camera0.position.z;
		var pos = camera0.userData.pos;
		const tween = new Tween({ pos: { x: x, y: y, z: z } });
		tween.to({ pos: { x: pos, y: pos, z: pos } }, 500);
		tween.onUpdate((coords) => {
			camera0.position.x = coords.pos.x;
			camera0.position.y = coords.pos.y;
			camera0.position.z = coords.pos.z;
		});
		camera0.lookAt(0, 0, 0);
		camera0.zoom = 1;
		controls0.target = new Vector3(0, 0, 0);
		tween.start();
	}
	onToggleCamera(isPerspectiveCamera) {
		this.camera = isPerspectiveCamera ? this.perspectiveCamera : this.orthographicCamera;
	}
	onVisibility(visible) {
		this.container.style.display = visible ? "block" : "none";
	}
	resetMaterial() {
		for (let i = 0; i < this.scene.children.length; i++) {
			if (this.scene.children[i].material) {
				if (!this.scene.children[i].textCube) {
					this.scene.children[i].material = CubeControlMaterial.normalCube;
				}
			}
		}
	}
	animate(camera, controls) {
		// caemera: camera
		var vector = new Vector3(
			camera.position.x - controls.target.x,
			camera.position.y - controls.target.y,
			camera.position.z - controls.target.z
		);
		var pos = this.camera.userData.pos;
		vector = vector.normalize();
		var Vector2 = new Vector3(vector.x * pos, vector.y * pos, vector.z * pos);
		var newV = new Vector3(0, 0, 0).add(Vector2);

		this.camera.position.x = newV.x;
		this.camera.position.y = newV.y;
		this.camera.position.z = newV.z;

		this.camera.rotation.x = camera.rotation.x;
		this.camera.rotation.y = camera.rotation.y;
		this.camera.rotation.z = camera.rotation.z;

		this.resetMaterial();
		this.hover();

		this.renderer.render(this.scene, this.camera);
	}
}
