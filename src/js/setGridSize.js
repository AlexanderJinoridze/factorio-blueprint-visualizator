import reference from "./reference.json";
import { state, GRID_PX } from "./globals";
import { getGridCoord, isTile } from "./helpers";

export default function setGridSize() {
    let dimensions = state.dimensions,
        entities = state.structures;

    for (let entity of entities) {
        if (isTile(entity)) {
            var [topLeftX, topLeftY, bottomRightX, bottomRightY] = [
                entity.position.x,
                entity.position.y,
                entity.position.x + 1,
                entity.position.y + 1,
            ];
        } else {
            var [topLeftX, topLeftY, bottomRightX, bottomRightY] =
                getGridCoord(entity);
        }

        dimensions.minX = Math.floor(Math.min(dimensions.minX, topLeftX));
        dimensions.maxX = Math.ceil(Math.max(dimensions.maxX, bottomRightX));
        dimensions.minY = Math.floor(Math.min(dimensions.minY, topLeftY));
        dimensions.maxY = Math.ceil(Math.max(dimensions.maxY, bottomRightY));
    }

    state.gridSize = {
        w: Math.abs(dimensions.maxX - dimensions.minX),
        h: Math.abs(dimensions.maxY - dimensions.minY),
    };

    state.canvasSize = {
        w: Math.max(state.canvasSize.w * GRID_PX, (state.gridSize.w + (reference["canvas-padding"]["left"] + reference["canvas-padding"]["right"])) * GRID_PX),
        h: Math.max(state.canvasSize.h * GRID_PX, (state.gridSize.h + (reference["canvas-padding"]["top"] + reference["canvas-padding"]["bottom"])) * GRID_PX),
    };
}