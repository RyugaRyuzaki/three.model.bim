import * as wIfc from "web-ifc";
function real(v) {
	return { type: 4, value: v };
}

function ref(v) {
	return { type: 5, value: v };
}

function empty() {
	return { type: 6 };
}

function str(v) {
	return { type: 1, value: v };
}
function enm(v) {
	return { type: 3, value: v };
}
export class ExportModel {
	constructor(modelID, maxID, ifcAPI) {
		this.modelID = modelID;
		this.maxID = maxID;
		this.api = ifcAPI;
	}
	async Write(lineObject) {
		const rawLineData = {
			ID: lineObject.expressID,
			type: lineObject.type,
			arguments: lineObject.ToTape(),
		};

		await this.api.WriteRawLineData(this.modelID, rawLineData);
	}
	async Point(o) {
		const ID = this.maxID++;
		const pt = new wIfc.IfcCartesianPoint(ID, wIfc.IFCCARTESIANPOINT, [real(o.x), real(o.y), real(o.z)]);
		await this.Write(pt);
		return ref(ID);
	}

	async PolyLoop(os) {
		const refs = await Promise.all(os.map((o) => this.Point(o)));
		const ID = this.maxID++;
		const loop = new wIfc.IfcPolyLoop(ID, wIfc.IFCPOLYLOOP, refs);
		await this.Write(loop);
		return ref(ID);
	}

	async FaceOuterBound(os) {
		const ID = this.maxID++;
		const bound = new wIfc.IfcFaceOuterBound(ID, wIfc.IFCFACEOUTERBOUND, await this.PolyLoop(os), enm("T"));
		await this.Write(bound);
		return ref(ID);
	}

	async Face(os) {
		const ID = this.maxID++;
		const face = new wIfc.IfcFace(ID, wIfc.IFCFACE, [await this.FaceOuterBound(os)]);
		await this.Write(face);
		return ref(ID);
	}

	async ClosedShell(faceRefs) {
		const ID = this.maxID++;
		const shell = new wIfc.IfcClosedShell(ID, wIfc.IFCCLOSEDSHELL, faceRefs);
		await this.Write(shell);
		return ref(ID);
	}

	async FacetedBREP(faceRefs) {
		const ID = this.maxID++;
		const brep = new wIfc.IfcFacetedBrep(ID, wIfc.IFCFACETEDBREP, await this.ClosedShell(faceRefs));
		await this.Write(brep);
		return ref(ID);
	}

	async ColourRGB(r, g, b) {
		const ID = this.maxID++;
		const col = new wIfc.IfcColourRgb(ID, wIfc.IFCCOLOURRGB, empty(), real(r), real(g), real(b));
		await this.Write(col);
		return ref(ID);
	}

	async SurfaceStyleShading(r, g, b, a) {
		const ID = this.maxID++;
		const col = new wIfc.IfcSurfaceStyleShading(
			ID,
			wIfc.IFCSURFACESTYLESHADING,
			await this.ColourRGB(r, g, b),
			real(a)
		);
		await this.Write(col);
		return ref(ID);
	}

	async SurfaceStyleRendering(r, g, b, a) {
		const ID = this.maxID++;
		const col = new wIfc.IfcSurfaceStyleRendering(
			ID,
			wIfc.IFCSURFACESTYLERENDERING,
			await this.ColourRGB(r, g, b),
			real(a),
			empty(),
			empty(),
			empty(),
			empty(),
			empty(),
			empty(),
			enm("NOTDEFINED")
		);
		await this.Write(col);
		return ref(ID);
	}

	async SurfaceStyle(name, r, g, b, a) {
		const ID = this.maxID++;
		const col = new wIfc.IfcSurfaceStyle(ID, wIfc.IFCSURFACESTYLE, str(name), enm(wIfc.IfcSurfaceSide.BOTH), [
			await this.SurfaceStyleShading(r, g, b, a),
		]);
		await this.Write(col);
		return ref(ID);
	}

	async PresentationStyleAssignment(name, r, g, b, a) {
		const ID = this.maxID++;
		const style = new wIfc.IfcPresentationStyleAssignment(ID, wIfc.IFCPRESENTATIONSTYLEASSIGNMENT, [
			await this.SurfaceStyle(name, r, g, b, a),
		]);
		await this.Write(style);
		return ref(ID);
	}

	async ShapePresentationStyleAssignment(name, r, g, b, a) {
		const ID = this.maxID++;
		const style = new wIfc.IfcPresentationStyleAssignment(ID, wIfc.IFCPRESENTATIONSTYLEASSIGNMENT, [
			await this.ShapeStyleAssignment(name, r, g, b, a),
		]);
		await this.Write(style);
		return ref(ID);
	}

	async ShapeStyleAssignment(name, r, g, b, a) {
		const ID = this.maxID++;
		const style = new wIfc.IfcSurfaceStyle(ID, wIfc.IFCSURFACESTYLE, str(name), enm("BOTH"), [
			await this.SurfaceStyleRendering(r, g, b, a),
		]);
		await this.Write(style);
		return ref(ID);
	}

	async StyledItem(item, style) {
		const ID = this.maxID++;
		const s = new wIfc.IfcStyledItem(ID, wIfc.IFCSTYLEDITEM, item, [style], empty());
		await this.Write(s);
		return ref(ID);
	}

	async StyledItemContext(style) {
		const ID = this.maxID++;
		const s = new wIfc.IfcStyledItem(ID, wIfc.IFCSTYLEDITEM, empty(), [style], empty());
		await this.Write(s);
		return ref(ID);
	}

	async StyledRepresentationContext(context, name, description, style) {
		const ID = this.maxID++;
		const s = new wIfc.IfcStyledRepresentation(
			ID,
			wIfc.IFCSTYLEDREPRESENTATION,
			context,
			str(name),
			str(description),
			style
		);
		await this.Write(s);
		return ref(ID);
	}

	async ShapeBREP(brepRefs) {
		const ID = this.maxID++;
		const shape = new wIfc.IfcShapeRepresentation(
			ID,
			wIfc.IFCSHAPEREPRESENTATION,
			empty(),
			str("Body"),
			str("Brep"),
			brepRefs
		);
		await this.Write(shape);
		return ref(ID);
	}

	async ProductDefinitionShape(shapeRefs) {
		const ID = this.maxID++;
		const def = new wIfc.IfcProductDefinitionShape(ID, wIfc.IFCPRODUCTDEFINITIONSHAPE, empty(), empty(), shapeRefs);
		await this.Write(def);
		return ref(ID);
	}

	async Product(constructor, typeID, productShape, placement) {
		const ID = this.maxID++;
		const pt = new constructor(
			ID,
			typeID,
			str(Math.random().toString(16).substring(2, 8)),
			empty(),
			str("name"),
			empty(),
			str("label"),
			placement,
			productShape,
			str(""),
			empty()
		);
		await this.Write(pt);
		return ref(ID);
	}

	async Building(typeID, placement) {
		const ID = this.maxID++;
		const pt = new wIfc.IfcBuilding(
			ID,
			typeID,
			str(Math.random().toString(16).substr(2, 8)),
			empty(),
			str("name"),
			str("description"),
			str("label"),
			placement,
			empty(),
			str(""),
			enm(wIfc.IfcElementCompositionEnum.ELEMENT),
			empty(),
			empty(),
			empty()
		);
		await this.Write(pt);
		return ref(ID);
	}

	async BuildingStorey(typeID, placement) {
		const ID = this.maxID++;
		const pt = new wIfc.IfcBuildingStorey(
			ID,
			typeID,
			str(Math.random().toString(16).substr(2, 8)),
			empty(),
			str("name"),
			str("description"),
			str("label"),
			placement,
			empty(),
			str(""),
			enm(wIfc.IfcElementCompositionEnum.ELEMENT),
			empty()
		);
		await this.Write(pt);
		return ref(ID);
	}

	async Site(typeID, placement) {
		const ID = this.maxID++;
		const pt = new wIfc.IfcSite(
			ID,
			typeID,
			str(Math.random().toString(16).substr(2, 8)),
			empty(),
			str("name"),
			str("description"),
			str("label"),
			placement,
			empty(),
			str(""),
			enm(wIfc.IfcElementCompositionEnum.ELEMENT),
			empty(),
			empty(),
			empty(),
			empty(),
			empty()
		);
		await this.Write(pt);
		return ref(ID);
	}

	async RelContainedInSpatialStructure(typeID, buildingStorey, elementsList) {
		const ID = this.maxID++;
		const pt = new wIfc.IfcRelContainedInSpatialStructure(
			ID,
			typeID,
			str(Math.random().toString(16).substr(2, 8)),
			empty(),
			str("name"),
			str("description"),
			elementsList,
			buildingStorey
		);
		await this.Write(pt);
		return ref(ID);
	}

	async RelAggregates(typeID, element, elementsList) {
		const ID = this.maxID++;
		const pt = new wIfc.IfcRelAggregates(
			ID,
			typeID,
			str(Math.random().toString(16).substr(2, 8)),
			empty(),
			str("name"),
			str("description"),
			element,
			elementsList
		);
		await this.Write(pt);
		return ref(ID);
	}

	async Dir(o) {
		const ID = this.maxID++;
		const pt = new wIfc.IfcDirection(ID, wIfc.IFCDIRECTION, [real(o.x), real(o.y), real(o.z)]);
		await this.Write(pt);
		return ref(ID);
	}

	async Point2D(o2D) {
		const ID = this.maxID++;
		const pt = new wIfc.IfcCartesianPoint(ID, wIfc.IFCCARTESIANPOINT, [real(o.x), real(o.y)]);
		await this.Write(pt);
		return ref(ID);
	}

	async AxisPlacement(o) {
		const locationID = await this.Point(o);
		const ID = this.maxID++;
		const pt = new wIfc.IfcAxis2Placement3D(ID, wIfc.IFCAXIS2PLACEMENT3D, locationID, empty(), empty());
		await this.Write(pt);
		return ref(ID);
	}

	async AxisPlacement2D(o) {
		const locationID = await this.Point2D(o);
		const ID = this.maxID++;
		const pt = new wIfc.IfcAxis2Placement2D(ID, wIfc.IFCAXIS2PLACEMENT2D, locationID, empty());
		await this.Write(pt);
		return ref(ID);
	}

	async Placement(o) {
		const axisID = await this.AxisPlacement(o);
		const ID = this.maxID++;
		const pt = new wIfc.IfcLocalPlacement(ID, wIfc.IFCLOCALPLACEMENT, empty(), axisID);
		await this.Write(pt);
		return ref(ID);
	}

	async CircleProfile(rad, o) {
		const ID = this.maxID++;
		const pt = new wIfc.IfcCircleProfileDef(
			ID,
			wIfc.IFCCIRCLEPROFILEDEF,
			enm(wIfc.IfcProfileTypeEnum.AREA),
			str("column-prefab"),
			await this.AxisPlacement2D(o),
			real(rad)
		);
		await this.Write(pt);
		return ref(ID);
	}

	async Project(context, name, description) {
		const ID = this.maxID++;
		const pt = new wIfc.IfcProject(
			ID,
			wIfc.IFCPROJECT,
			str(Math.random().toString(16).substr(2, 8)),
			empty(),
			str(name),
			str(description),
			empty(),
			empty(),
			empty(),
			[context],
			await this.UnitAssignment()
		);
		await this.Write(pt);
		return ref(ID);
	}

	async RepresentationContext(pos, north) {
		const ID = this.maxID++;
		const pt = new wIfc.IfcGeometricRepresentationContext(
			ID,
			wIfc.IFCGEOMETRICREPRESENTATIONCONTEXT,
			str("Model"),
			empty(),
			real(3),
			real(1e-5),
			await this.AxisPlacement(pos),
			await this.Dir(north)
		);
		await this.Write(pt);
		return ref(ID);
	}

	async RepresentationSubContext(context, identifier, description, enumerated) {
		const ID = this.maxID++;
		const pt = new wIfc.IfcGeometricRepresentationSubContext(
			ID,
			wIfc.IFCGEOMETRICREPRESENTATIONSUBCONTEXT,
			str(identifier),
			str(description),
			str("*"),
			str("*"),
			str("*"),
			str("*"),
			context,
			empty(),
			enm(enumerated),
			empty()
		);
		await this.Write(pt);
		return ref(ID);
	}

	async UnitAssignment() {
		const ID = this.maxID++;
		const lst = [];
		lst.push(await this.SiUnit(enm(wIfc.IfcUnitEnum.LENGTHUNIT), enm(wIfc.IfcSIUnitName.METRE)));
		lst.push(await this.SiUnit(enm(wIfc.IfcUnitEnum.AREAUNIT), enm(wIfc.IfcSIUnitName.SQUARE_METRE)));
		lst.push(await this.SiUnit(enm(wIfc.IfcUnitEnum.VOLUMEUNIT), enm(wIfc.IfcSIUnitName.CUBIC_METRE)));
		lst.push(await this.SiUnit(enm(wIfc.IfcUnitEnum.MASSUNIT), enm(wIfc.IfcSIUnitName.GRAM)));
		lst.push(await this.SiUnit(enm(wIfc.IfcUnitEnum.SOLIDANGLEUNIT), enm(wIfc.IfcSIUnitName.STERADIAN)));
		lst.push(await this.SiUnit(enm(wIfc.IfcUnitEnum.TIMEUNIT), enm(wIfc.IfcSIUnitName.SECOND)));
		lst.push(
			await this.SiUnit(
				enm(wIfc.IfcUnitEnum.THERMODYNAMICTEMPERATUREUNIT),
				enm(wIfc.IfcSIUnitName.DEGREE_CELSIUS)
			)
		);
		lst.push(await this.SiUnit(enm(wIfc.IfcUnitEnum.LUMINOUSINTENSITYUNIT), enm(wIfc.IfcSIUnitName.LUMEN)));
		const pt = new wIfc.IfcUnitAssignment(ID, wIfc.IFCUNITASSIGNMENT, lst);
		await this.Write(pt);
		return ref(ID);
	}

	async SiUnit(unit, name) {
		const ID = this.maxID++;
		const pt = new wIfc.IfcSIUnit(ID, wIfc.IFCSIUNIT, empty(), unit, empty(), name);
		await this.Write(pt);
		return ref(ID);
	}

	async ExtrudedAreaSolid(pos, dir, rad, len) {
		const ID = this.maxID++;
		const pt = new wIfc.IfcExtrudedAreaSolid(
			ID,
			wIfc.IFCEXTRUDEDAREASOLID,
			await this.CircleProfile(rad, { x: 0, y: 0 }),
			await this.AxisPlacement(pos),
			await this.Dir(dir),
			real(len)
		);
		await this.Write(pt);
		return ref(ID);
	}
}
