import reference from "./reference.json";
import { isTile, toPX, isArray, isOppositDirection } from "./helpers";

function getCollisionBoundarySize(structure) {
    let collisionBoundarySize = reference[structure.name]["collision-boundary-size"],
        result;

    if (isArray(collisionBoundarySize)) {
        let collisionBoundarySizeArray = [...collisionBoundarySize];

        if (isOppositDirection(structure.direction)) {
            collisionBoundarySizeArray.reverse();
        }

        result = {
            w: collisionBoundarySizeArray[0],
            h: collisionBoundarySizeArray[1],
        };
    } else {
        result = {
            w: collisionBoundarySize,
            h: collisionBoundarySize,
        };
    }

    return result;
}

function getCollisionBoundaryCoordinates(structure) {
    let { x: structurePositionX, y: structurePositionY } = structure.position,
        result;

    if (isTile(structure)) {
        let tileSize = reference["tile"]["collision-boundary-size"];

        result = [structurePositionX, structurePositionY, structurePositionX + tileSize, structurePositionY + tileSize];
    } else {
        let { w: collisionBoundaryWidth, h: collisionBoundaryHeight } = getCollisionBoundarySize(structure),
            [halfOfGridW, halfOfGridH] = [collisionBoundaryWidth / 2, collisionBoundaryHeight / 2];

        result = [
            structurePositionX - halfOfGridW,
            structurePositionY - halfOfGridH,
            structurePositionX + halfOfGridW,
            structurePositionY + halfOfGridH,
        ];
    }

    return result;
}

export default function normalizeBlueprint(state) {
    let structures = state.structures,
        { minX, minY, maxX, maxY } = {
            minX: Number.POSITIVE_INFINITY,
            minY: Number.POSITIVE_INFINITY,
            maxX: Number.NEGATIVE_INFINITY,
            maxY: Number.NEGATIVE_INFINITY,
        },
        { w: canvasSizeWidth, h: canvasSizeHeight } = state.canvasSize,
        {
            top: canvasPaddingTop,
            right: canvasPaddingRight,
            bottom: canvasPaddingBottom,
            left: canvasPaddingLeft,
        } = reference["canvas-padding"];

    state.structures = structures.map((structure) => {
        let [topLeftX, topLeftY, bottomRightX, bottomRightY] = getCollisionBoundaryCoordinates(structure);

        minX = Math.floor(Math.min(minX, topLeftX));
        maxX = Math.ceil(Math.max(maxX, bottomRightX));
        minY = Math.floor(Math.min(minY, topLeftY));
        maxY = Math.ceil(Math.max(maxY, bottomRightY));

        structure.zOrderReferencePoint = {
            x: topLeftX,
            y: topLeftY,
        };

        return structure;
    });

    state.structures = structures.map((structure) => {
        let { x: structurePositionX, y: structurePositionY } = structure.position;

        structure.position = {
            x: Math.abs(minX - structurePositionX),
            y: Math.abs(minY - structurePositionY),
        };

        return structure;
    });

    state.dimensions = {
        minX,
        minY,
        maxX,
        maxY,
    };

    state.gridSize = {
        w: Math.abs(maxX - minX),
        h: Math.abs(maxY - minY),
    };

    state.canvasSize = {
        w: Math.abs(maxX - minX),
        h: Math.abs(maxY - minY),
    };
}
