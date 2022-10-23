import reference from "./reference.json";

import { createCanvas, toPX } from "./helpers";
import { state, promises } from "./globals";

import decodeBlueprint from "./decodeBlueprint";
import isValidBlueprint from "./isValidBlueprint";
import setStructures from "./setStructures";
import collectImages from "./collectImages";
import normalizeBlueprint from "./normalizeBlueprint";
import distributeStructures from "./distributeStructures";
import setRailCovers from "./setRailCovers";

import drawBase from "./drawBase";
import placeBuildings from "./placeBuildings";

export default async function buildFactory(blueprintString) {
    Object.assign(state, {
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
            concrete: [],
            "hazard-concrete-left": [],
            "hazard-concrete-right": [],
            "refined-concrete": [],
            "refined-hazard-concrete-left": [],
            "refined-hazard-concrete-right": [],
        },
    });

    const decodedBlueprint = decodeBlueprint(blueprintString);

    if (isValidBlueprint(decodedBlueprint)) {
        state.structures = setStructures(decodedBlueprint);
        collectImages(state.structures);

        normalizeBlueprint(state);
        distributeStructures();
        // setRailCovers();

        await Promise.all(promises).then(
            () => {
                let canvas = createCanvas(
                        toPX(
                            state.canvasSize.w +
                                reference["canvas-padding"]["left"] +
                                reference["canvas-padding"]["right"]
                        ),
                        toPX(
                            state.canvasSize.h +
                                reference["canvas-padding"]["top"] +
                                reference["canvas-padding"]["bottom"]
                        )
                    ),
                    ctx = canvas.getContext("2d");

                drawBase(ctx);
                placeBuildings(ctx);

                let loadImage = (url) =>
                    new Promise((resolve, reject) => {
                        const img = new Image();
                        img.addEventListener("load", () => resolve(img));
                        img.addEventListener("error", () => reject(new Error(`Failed to load factory`)));
                        img.src = url;
                    });

                loadImage(canvas.toDataURL("image/png", 0.1)).then((img) => document.body.appendChild(img));
            },
            (reason) => {
                console.log(reason);
            }
        );
    } else {
        console.log("NOT VALID");
    }
}
