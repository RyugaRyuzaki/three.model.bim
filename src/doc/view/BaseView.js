import {
	AmbientLight,
	AxesHelper,
	DirectionalLight,
	GridHelper,
	OrthographicCamera,
	PerspectiveCamera,
	WebGLRenderer,
	Raycaster,
	Vector2,
	Mesh,
	SphereGeometry,
	PlaneGeometry,
	sRGBEncoding,
	BufferGeometry,
} from "three";
import { computeBoundsTree, disposeBoundsTree, acceleratedRaycast } from "three-mesh-bvh";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";
import * as TWEEN from "@tweenjs/tween.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { LightColor, CubeControlMaterial, customMaterial } from "../material";
import { CubeControls } from "./CubeControl";
import { CustomType } from "./../modeling";

export class BaseView {
	showDimension = false;
	constructor(scene, container, canvas, width, height, alpha = true) {
		this.scene = scene;
		this.container = container;
		this.canvas = canvas;
		this.alpha = alpha;
		this.width = width;
		this.height = height;
		this.initMeshBVH();
		this.initGrid();
		this.initAxes();
		this.initLight();
		this.initRayCaster();
		this.initCamera(false);
		this.initRenderer();
		this.initOrbitControls();
		this.setDomElement();
		this.initDefineAlpha();
		// this.initPivot();
	}
	initMeshBVH() {
		BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
		BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
		Mesh.prototype.raycast = acceleratedRaycast;
	}
	initGrid() {
		this.grid = new GridHelper(10, 10);
		this.grid.visible = false;
		this.scene.add(this.grid);
	}
	initAxes() {
		this.axes = new AxesHelper(3);
		this.axes.material.depthTest = false;
		this.axes.renderOrder = 1;
		this.scene.add(this.axes);
	}

	initRayCaster() {
		this.rayCaster = new Raycaster();
		this.rayCaster.firstHitOnly = true;
		this.rayCaster.params.Points.threshold = 50;
		this.mouse = new Vector2();
		this.tabKey = false;
		this.highlightModel = null;
		this.selectModel = null;
	}

	initLight() {
		this.ambientLight = new AmbientLight(LightColor.light, 2);
		this.scene.add(this.ambientLight);

		this.directionalLight = new DirectionalLight(LightColor.light, 2);
		this.directionalLight.position.set(0, 10, 0);
		this.directionalLight.target.position.set(-5, 0, 0);
		this.directionalLight.castShadow = true;
		this.directionalLight.shadow.bias = -0.001;
		this.directionalLight.shadow.mapSize.width = 2048;
		this.directionalLight.shadow.mapSize.height = 2048;
		this.directionalLight.shadow.camera.near = 0.1;
		this.directionalLight.shadow.camera.far = 500.0;
		this.directionalLight.shadow.camera.near = 0.5;
		this.directionalLight.shadow.camera.far = 500.0;
		this.directionalLight.shadow.camera.left = 100;
		this.directionalLight.shadow.camera.right = -100;
		this.directionalLight.shadow.camera.top = 100;
		this.directionalLight.shadow.camera.bottom = -100;
		this.scene.add(this.directionalLight);
	}
	initPerspectiveCamera() {
		var camera = new PerspectiveCamera(45, this.width / this.height, 0.1, 1000);
		camera.position.z = 40;
		camera.position.y = 40;
		camera.position.x = 40;
		camera.lookAt(this.scene.position);
		camera.userData.pos = 40;
		camera.layers.enableAll();
		camera.layers.toggle(1);
		return camera;
	}
	initOrthographicCamera() {
		var camera = new OrthographicCamera(
			this.width / -50,
			this.width / 50,
			this.height / 50,
			this.height / -50,
			0.1,
			1000
		);
		camera.position.z = 40;
		camera.position.y = 40;
		camera.position.x = 40;
		camera.lookAt(this.scene.position);
		camera.userData.pos = 40;
		camera.layers.enableAll();
		camera.layers.toggle(1);
		return camera;
	}

	initCamera(isPerspectiveCamera) {
		this.isPerspectiveCamera = isPerspectiveCamera;
		this.perspectiveCamera = this.initPerspectiveCamera();
		this.orthographicCamera = this.initOrthographicCamera();
		this.camera = this.isPerspectiveCamera ? this.perspectiveCamera : this.orthographicCamera;
	}

	initRenderer() {
		this.renderer = new WebGLRenderer({ canvas: this.canvas, alpha: this.alpha, antialias: true });
		this.renderer.setSize(this.width, this.height);
		this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
		this.renderer.domElement.setAttribute("tabindex", 1);
		this.renderer.localClippingEnabled = true;
		this.renderer.outputEncoding = sRGBEncoding;
		this.renderer.gammaFactor = 2.2;
		this.labelRenderer = new CSS2DRenderer();
		this.labelRenderer.setSize(this.width, this.height);

		this.labelRenderer.domElement.style.position = "absolute";
		this.labelRenderer.domElement.style.top = 0;
		this.labelRenderer.domElement.setAttribute("tabindex", 1);
		this.container.appendChild(this.labelRenderer.domElement);
	}

	initOrbitControls() {
		this.controls = new OrbitControls(this.camera, this.labelRenderer.domElement);
		this.controls.enableDamping = true;
		this.controls.dampingFactor = 0.2;
		this.controls.target.set(-0, 0, 0);
		this.controls.mouseButtons.MIDDLE = 2;
		this.controls.mouseButtons.RIGHT = -1;
		this.controls.listenToKeyEvents(this.labelRenderer.domElement);
	}

	toggleCamera3D(isPerspectiveCamera) {
		var pos = this.camera.position;
		var zoom = this.camera.zoom;
		this.isPerspectiveCamera = isPerspectiveCamera;
		this.camera = isPerspectiveCamera ? this.perspectiveCamera : this.orthographicCamera;
		this.camera.position.set(pos.x, pos.y, pos.z);
		this.camera.zoom = zoom;
		this.controls.object = isPerspectiveCamera ? this.perspectiveCamera : this.orthographicCamera;
		this.cubeControl.onToggleCamera(isPerspectiveCamera);
	}

	setDomElement() {
		this.domElement = this.labelRenderer.domElement;
	}
	initResize(container, canvas) {
		var _this = this;
		window.addEventListener("resize", resize, false);
		function resize(e) {
			_this.container = container;
			_this.canvas = canvas;
			_this.width = _this.container.clientWidth;
			_this.height = _this.container.clientHeight;
			_this.camera.left = _this.width / -50;
			_this.camera.right = _this.width / 50;
			_this.camera.updateProjectionMatrix();
			_this.renderer.setSize(_this.width, _this.height, true);
			_this.labelRenderer.setSize(_this.width, _this.height, true);
		}
		_this.domElement.addEventListener("wheel", onWheel, false);
		function onWheel(e) {
			// _this.scene.children.forEach((c) => {
			// 	if (c.userData.Type == CustomType.line) {
			// 		c.scale.set(1 / _this.camera.zoom, 1 / _this.camera.zoom, 1 / _this.camera.zoom);
			// 	}
			// });
		}
	}

	initDefineAlpha() {
		var _this = this;
		Object.defineProperty(_this, "alphaFactor", {
			get: () => {
				return _this.renderer.getClearAlpha();
			},
			set: (value) => {
				_this.renderer.setClearAlpha(value);
			},
		});
	}

	initCubeControls(container, canvas) {
		this.cubeControl = new CubeControls(container, canvas, this.isPerspectiveCamera);
		var _this = this;
		_this.cubeControl.renderer.domElement.onclick = function (event) {
			_this.cubeControl.onPick(_this.camera, _this.controls);
		};
		var goHome = document.getElementById("cubeViewHome");
		goHome.addEventListener(
			"click",
			function () {
				_this.cubeControl.onGoHome(_this.camera, _this.controls);
			},
			false
		);
	}
	initPivot() {
		const geometry = new SphereGeometry(0.2, 32, 16);
		this.pivot = new Mesh(geometry, CubeControlMaterial.hoverCube);
		this.pivot.userData.CustomModel = true;
		this.pivot.userData.Hover = customMaterial.hoverModel;
		this.pivot.userData.Normal = customMaterial.normalModel;
		this.pivot.userData.Select = customMaterial.selectModel;
		this.scene.add(this.pivot);
	}
	changeDimension(visible) {
		var _this = this;
		var lines = _this.scene.children.filter((c) => CustomType.isLine(c) && c.userData.Location.Dimension);
		lines.forEach((c) => {
			c.userData.Location.Dimension.userData.visLabel(c, visible);
		});
	}
	onChangeDimensionLabel(factor) {
		var _this = this;
		var lines = _this.scene.children.filter((c) => CustomType.isLine(c) && c.userData.Location.Dimension);
		lines.forEach((c) => {
			c.userData.Location.Dimension.userData.onChangeLabel(factor);
		});
	}
	onAnimate() {
		var _this = this;
		function animate() {
			_this.camera.updateProjectionMatrix();
			_this.controls.update();
			TWEEN.update();
			_this.renderer.render(_this.scene, _this.camera);
			_this.labelRenderer.render(_this.scene, _this.camera);
			_this.cubeControl.animate(_this.camera, _this.controls);
			requestAnimationFrame(animate);
		}
		animate();
	}
}
