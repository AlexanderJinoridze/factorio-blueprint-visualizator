// This is temporary while UI widget for blueprint string formating into JSON isn't done
import data from "./data";


export const GRID_PX = 64;
export const NUMBER_OF_DIRS = 8;

export const state = {
    blueprintString: "",
    decodedBlueprint: data["blueprint"],

    canvasAddition: {x: 4, y: 5.5},
    canvasOffset: {x: 2, y: 3.5},
    canvasMinSize: {x: 6, y: 6.5},

    dimensions: {
        minX: Number.POSITIVE_INFINITY,
        minY: Number.POSITIVE_INFINITY,
        maxX: Number.NEGATIVE_INFINITY,
        maxY: Number.NEGATIVE_INFINITY,
    },
    offset: { x: 0, y: 0 },
    gridSize: { w: 0, h: 0 },

    entities: [],
    rails: [],
    railCovers: [],
    buildings: [],
    belts: [],
    tiles: {
        "stone-path": [],
        "concrete": [],
        "hazard-concrete-left": [],
        "hazard-concrete-right": [],
        "refined-concrete": [],
        "refined-hazard-concrete-left": [],
        "refined-hazard-concrete-right": []
    },


    currentPendingImage: [],
    loadedImages: {},
}