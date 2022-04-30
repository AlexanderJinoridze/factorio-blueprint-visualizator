// This is temporary while UI widget for blueprint string formating into JSON isn't done
import data from "./data";


export const GRID_PX = 64;

const state = {
    blueprintString: "",
    decodedBlueprint: data["blueprint"],
    dimensions: {
        minX: Number.POSITIVE_INFINITY,
        maxX: Number.NEGATIVE_INFINITY,
        minY: Number.POSITIVE_INFINITY,
        maxY: Number.NEGATIVE_INFINITY,
    },
    offset: { x: 0, y: 0 },
    gridSize: { w: 0, h: 0 },
    entities: [],
    rails: [],
    railCovers: [],
    buildings: [],
    tiles: {
        "stone-path": [],
        "concrete": [],
        "hazard-concrete-left": [],
        "hazard-concrete-right": [],
        "refined-concrete": [],
        "refined-hazard-concrete-left": [],
        "refined-hazard-concrete-right": []
    },
    tileSides: {
        "stone-path": [],
        "concrete": [],
        "hazard-concrete-left": [],
        "hazard-concrete-right": [],
        "refined-concrete": [],
        "refined-hazard-concrete-left": [],
        "refined-hazard-concrete-right": []
    }
}

export default state;