import { createCanvas } from "./helpers";
import { state, promises } from "./globals";

import decodeBlueprint from "./decodeBlueprint";
import isValidBlueprint from "./isValidBlueprint";
import currentEntityStack from "./currentEntityStack";
import setStructures from "./setStructures";
import setGridSize from "./setGridSize";
import setOffset from "./setOffset";
import normalizeCoordinates from "./normalizeCoordinates";
import distributeStructures from "./distributeStructures";
import sortBuildings from "./sortBuildings";
import sortRails from "./sortRails";
import setRailCovers from "./setRailCovers";

import drawBase from "./drawBase";
import placeBuildings from "./placeBuildings";

export default async function buildFactory(blueprintString) {
    Object.assign(state, {
        blueprintString: "",
        decodedBlueprint: {},
        canvasSize: { w: 0, h: 0 },
        dimensions: {
            minX: Number.POSITIVE_INFINITY,
            minY: Number.POSITIVE_INFINITY,
            maxX: Number.NEGATIVE_INFINITY,
            maxY: Number.NEGATIVE_INFINITY,
        },
        offset: { x: 0, y: 0 },
        gridSize: { w: 0, h: 0 },
        structures: [],
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
        }
    });

    state.blueprintString = blueprintString;

    decodeBlueprint();

    if (!isValidBlueprint(state.decodedBlueprint)) {
        console.log("NOT VALID");
        return false;
    }

    setStructures();
    currentEntityStack();

    setGridSize();

    setOffset();
    normalizeCoordinates();
    distributeStructures();

    sortBuildings();

    sortRails();
    setRailCovers();

    await Promise.all(promises)
        .then(
            () => {
                let canvas = createCanvas(),
                    ctx = canvas.getContext("2d");


                drawBase(ctx);
                placeBuildings(ctx);


                document.body.appendChild(canvas);
            },
            reason => {
                console.log(reason);
            }
        );
}
