import reference from "./reference.json";
import { state } from "./globals";


export function getDirectionVersion(entity) {
    let entityName = entity.name,
        entityReference = reference[entityName],
        directionCount = entityReference["dir-count"],
        entityDirection = entity.direction;

    if (directionCount) {
        if (directionCount < NUMBER_OF_DIRS) {
            entityDirection = entityDirection / 2;
        }

        return entityReference["dir-versions"][entityDirection];
    }
}


export function createCanvas() {
    let canvas = document.createElement("canvas");

    canvas.width = state.canvasSize.w;
    canvas.height = state.canvasSize.h;

    return canvas;
}


export function zOrderSort(a, b) {
    let [aCoordX, aCoordY] = a,
        [bCoordX, bCoordY] = b;

    return aCoordY - bCoordY || aCoordX - bCoordX;
}

export function getGridSize(entity) {
    let entityName = entity.name,
        entityRef = reference[entityName],
        gridSize = entityRef["grid-size"] || 1,
        result;

    if (isArray(gridSize)) {
        let gridArray = [...gridSize];

        if ([2, 3, 6, 7].includes(entity.direction)) {
            gridArray.reverse();
        }

        result = {
            w: gridArray[0],
            h: gridArray[1]
        };
    } else {
        result = {
            w: gridSize,
            h: gridSize
        };
    }

    return result;
}

export function getGridCoord(entity) {
    let gridSize = getGridSize(entity),
        entityPos = entity.position,
        [halfOfGridW, halfOfGridH] = [gridSize.w / 2, gridSize.h / 2];

    return [
        entityPos.x - halfOfGridW,
        entityPos.y - halfOfGridH,
        entityPos.x + halfOfGridW,
        entityPos.y + halfOfGridH,
    ];
}




export function getStructuresAt(x, y) {
    var found = [];

    state.structures.forEach(structure => {
        let structurePosition = structure.position;

        if (structurePosition.x === x && structurePosition.y === y) {
            found.push(structure);
        }
    });

    return found;
}



export function filterEntities(entities) {
    return entities.filter(entity => {
        return isEntity(entity.name);
    })
}

export function filterTiles(tiles) {
    return tiles.filter(tile => {
        return isTile(tile.name);
    })
}

export function filterStructures(structures) {
    return structures.filter(structure => {
        let structureName = structure.name;
        return isEntity(structureName) || isTile(structureName);
    })
}




export function isString(val) {
    return typeof val === "string";
}

export function isNumber(val) {
    return typeof val === "number";
}

export function isObject(val) {
    return typeof val === "object" && !Array.isArray(val) && val !== null;
}

export function isArray(val) {
    return Array.isArray(val);
}




export function isInserter(entityName) {
    return [
        "burner-inserter",
        "fast-inserter",
        "filter-inserter",
        "inserter",
        "long-handed-inserter",
        "stack-filter-inserter",
        "stack-inserter"
    ].includes(entityName);
}

export function isBelt(entityName) {
    return [
        "transport-belt",
        "fast-transport-belt",
        "express-transport-belt"
    ].includes(entityName);
}

export function isBeltEntity(entityName) {
    return [
        "underground-belt",
        "fast-underground-belt",
        "express-underground-belt",
        "splitter",
        "fast-splitter",
        "express-splitter"
    ].includes(entityName);
}

export function isTile(entityName) {
    return [
        "stone-path",
        "concrete",
        "hazard-concrete-left",
        "hazard-concrete-right",
        "refined-concrete",
        "refined-hazard-concrete-left",
        "refined-hazard-concrete-right"
    ].includes(entityName);
}

export function isHazardConcrete(entityName) {
    return [
        "hazard-concrete-left",
        "hazard-concrete-right"
    ].includes(entityName);
}

export function isRefinedHazardConcrete(entityName) {
    return [
        "refined-hazard-concrete-left",
        "refined-hazard-concrete-right"
    ].includes(entityName);
}

export function isRail(entityName) {
    return [
        "straight-rail",
        "curved-rail"
    ].includes(entityName);
}

export function isEntity(entityName) {
    return [
        "accumulator",
        "arithmetic-combinator",
        "artillery-turret",
        "assembling-machine-1",
        "assembling-machine-2",
        "assembling-machine-3",
        "beacon",
        "big-electric-pole",
        "boiler",
        "burner-inserter",
        "burner-mining-drill",
        "centrifuge",
        "chemical-plant",
        "constant-combinator",
        "curved-rail",
        "decider-combinator",
        "electric-furnace",
        "electric-mining-drill",
        "express-splitter",
        "express-transport-belt",
        "express-underground-belt",
        "fast-inserter",
        "fast-splitter",
        "fast-transport-belt",
        "fast-underground-belt",
        "filter-inserter",
        "flamethrower-turret",
        "gate",
        "gun-turret",
        "heat-exchanger",
        "heat-pipe",
        "inserter",
        "iron-chest",
        "lab",
        "land-mine",
        "laser-turret",
        "logistic-chest-active-provider",
        "logistic-chest-buffer",
        "logistic-chest-passive-provider",
        "logistic-chest-requester",
        "logistic-chest-storage",
        "long-handed-inserter",
        "medium-electric-pole",
        "nuclear-reactor",
        "offshore-pump",
        "oil-refinery",
        "pipe",
        "pipe-to-ground",
        "power-switch",
        "programmable-speaker",
        "pump",
        "pumpjack",
        "radar",
        "rail-chain-signal",
        "rail-signal",
        "roboport",
        "rocket-silo",
        "small-electric-pole",
        "small-lamp",
        "solar-panel",
        "splitter",
        "stack-filter-inserter",
        "stack-inserter",
        "steam-engine",
        "steam-turbine",
        "steel-chest",
        "steel-furnace",
        "stone-furnace",
        "stone-wall",
        "storage-tank",
        "straight-rail",
        "substation",
        "train-stop",
        "transport-belt",
        "underground-belt",
        "wooden-chest"
    ].includes(entityName)
}