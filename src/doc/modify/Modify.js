import { drawRect } from "./drawRect";
import { drawPolyGon } from "./drawPolyGon";
import { drawExtrude } from "./extrude";
import { makeDropIfcSlabWall } from "./makeDrop";
import { drawSlabArc, drawSlabCircle, drawSlabPolyGon, drawSlabRect } from "./ifcSlab";
import { drawWallRect, drawWallPolyGon } from "./ifcWall";

export class Modify {
	constructor(view) {
		this.view = view;
		this.current = null;
		this.group = [];
	}
	scope = {
		none: 0,
		slab: 1,
		wall: 2,
		proxy: 3,
		beam: 4,
		column: 5,
		moveItem: 6,
	};
	dropType = {
		slab: "IFCSLAB",
		wall: "IFCWALLSTANDARDCASE",
		proxy: 3,
		beam: 4,
		column: 5,
	};
	isDrawing = false;
	dispose() {
		if (this.current) {
			this.current.userData.OutLine.removeFromParent();
			this.current.removeFromParent();
		}
		this.view.scene.children.forEach((child) => {
			if (child.userData.Face) {
				child.removeFromParent();
			}
		});
		this.current = null;
		var _this = this;
		_this.group.forEach((g) => {
			g.userData.OutLine.removeFromParent();
			g.removeFromParent();
		});
		_this.group = [];
	}
	//#region Slab
	maskDropSlab(factor, callback) {
		var _this = this;
		_this.dataSlab = null;
		makeDropIfcSlabWall(_this.view, factor, _this.dropType.slab, (data) => {
			_this.dataSlab = data;
			callback(data);
		});
	}
	createSlabRectangle(btn, factor, units, callback) {
		var _this = this;
		_this.current = null;
		_this.isDrawing = true;
		drawSlabRect(_this.view, btn, _this.dataSlab.elevation, _this.dataSlab.thickness, factor, units, (rect) => {
			_this.current = rect;
			_this.isDrawing = false;
			callback();
		});
	}
	createSlabPolyGon(btn, callback) {
		var _this = this;
		_this.current = null;
		_this.isDrawing = true;
		drawSlabPolyGon(_this.view, btn, _this.dataSlab.elevation, _this.dataSlab.thickness, (poly) => {
			_this.current = poly;
			_this.isDrawing = false;
			callback();
		});
	}
	createSlabCircle(btn, factor, units, callback) {
		var _this = this;
		_this.current = null;
		_this.isDrawing = true;
		drawSlabCircle(_this.view, btn, _this.dataSlab.elevation, _this.dataSlab.thickness, factor, units, (circle) => {
			_this.current = circle;
			_this.isDrawing = false;
			callback();
		});
	}
	createSlabArc(btn, factor, units, callback) {
		var _this = this;
		_this.current = null;
		_this.isDrawing = true;
		drawSlabArc(_this.view, btn, _this.dataSlab.elevation, _this.dataSlab.thickness, factor, units, (circle) => {
			_this.current = circle;
			_this.isDrawing = false;
			callback();
		});
	}
	createExtrude(btn, factor, units) {
		var _this = this;
		_this.current = null;
		_this.isDrawing = true;
		drawExtrude(_this.view, btn, factor, units, (model) => {
			_this.isDrawing = false;
		});
	}
	finishSlabModel(exportModel, callback) {
		var _this = this;
		var isFinish = false;
		if (_this.current) {
			console.log(exportModel.maxID);
			if (!_this.current.userData.CanCreateSlab) {
				alert("Can not create Slab");
				isFinish = false;
			} else {
				if (_this.dataSlab.material) _this.current.material.color.set(_this.dataSlab.material.color);
				isFinish = true;
				// var ID1 = exportModel.Point(_this.current.userData.Placement);
				// var ID2 = exportModel.Point(_this.current.userData.Placement);
				// const data = _this.view.ifc.ifcAPI.ExportFileAsIFC(0);
				// const blob = new Blob([data]);
				// const file = new File([blob], "revised.ifc");

				// const link = document.createElement("a");
				// link.download = "tam_map.ifc";
				// link.href = URL.createObjectURL(file);
				// document.body.appendChild(link);
				// link.click();
				// link.remove();
			}
		}
		callback(isFinish);
	}
	//#endregion
	//#region wall
	maskDropWall(factor, callback) {
		var _this = this;
		_this.dataWall = null;
		makeDropIfcSlabWall(_this.view, factor, _this.dropType.wall, (data) => {
			_this.dataWall = data;
			callback(data);
		});
	}
	createWallRectangle(btn, factor, units, callback) {
		var _this = this;
		_this.current = null;
		_this.isDrawing = true;
		drawWallRect(
			_this.view,
			btn,
			_this.dataWall.elevation,
			_this.dataWall.height,
			_this.dataWall.thickness,
			factor,
			units,
			(rect) => {
				_this.isDrawing = false;
				_this.group = _this.group.concat([...rect]);
				callback();
			}
		);
	}
	createWallPolyGon(btn, factor, units, callback) {
		var _this = this;
		_this.current = null;
		_this.isDrawing = true;
		drawWallPolyGon(
			_this.view,
			btn,
			_this.dataWall.elevation,
			_this.dataWall.height,
			_this.dataWall.thickness,
			factor,
			units,
			(rect) => {
				_this.isDrawing = false;
				if (rect) _this.group = _this.group.concat([...rect]);
				callback();
			}
		);
	}
	//#endregion
}
