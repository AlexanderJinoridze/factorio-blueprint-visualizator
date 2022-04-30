import data from "./data";
import referenceTable from "./referenceTable";

console.time();

const GRID_PX = 64;

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
    }
}


let D = document,
    $mainCanvas = D.getElementById("main-canvas"),
    $tileMask = D.getElementById("tile-mask");


const isRail = (entity) => ["straight-rail", "curved-rail"].includes(entity.name);

const isTile = (entity) => ["stone-path", "concrete", "hazard-concrete-left", "hazard-concrete-right", "refined-concrete", "refined-hazard-concrete-left", "refined-hazard-concrete-right"].includes(entity.name);    

const getGridCoord = (entity) => {
    let gridSize = getGridSize(entity),
        entityPos = entity.position,
        [halfOfGridW, halfOfGridH] = [gridSize.w / 2, gridSize.h / 2];

    return [entityPos.x - halfOfGridW, entityPos.y - halfOfGridH, entityPos.x + halfOfGridW, entityPos.y + halfOfGridH];
}

const getGridSize = (entity) => {
    let entityName = entity.name,
        entityRef = referenceTable[entityName],
        gridSize = entityRef["grid-size"],
        result;

    if (!gridSize) {
        gridSize = entityRef["rotate-version"][entity.direction]["grid-size"];
    }

    if (Array.isArray(gridSize)) {
        result = { w: gridSize[0], h: gridSize[1] };
    } else {
        result = { w: gridSize, h: gridSize };
    }

    return result;
}

const setGridSize = () => {
    let dimensions = state.dimensions,
        entities = state.entities;

    for (let entity of entities) {
        if(isTile(entity)) {
            var [topLeftX, topLeftY, bottomRightX, bottomRightY] = [entity.position.x, entity.position.y, entity.position.x + 1, entity.position.y + 1];
        } else {
            var [topLeftX, topLeftY, bottomRightX, bottomRightY] = getGridCoord(entity);
        }

        dimensions.minX = Math.min(dimensions.minX, topLeftX);
        dimensions.maxX = Math.max(dimensions.maxX, bottomRightX);
        dimensions.minY = Math.min(dimensions.minY, topLeftY);
        dimensions.maxY = Math.max(dimensions.maxY, bottomRightY);
    }

    state.gridSize = {
        w: Math.abs(dimensions.maxX - dimensions.minX),
        h: Math.abs(dimensions.maxY - dimensions.minY),
    };
}

const setOffset = () => {
    let offset = state.offset,
        dimensions = state.dimensions;

    offset.x = dimensions["minX"];
    offset.y = dimensions["minY"];
}

const setEntities = () => {
    let tiles = state.decodedBlueprint["tiles"] || [],
        entities = state.decodedBlueprint["entities"] || [],
        entitiesAndTiles = [...entities, ...tiles];

    state.entities = entitiesAndTiles.filter((entity) => {
        return referenceTable[entity.name];
    }).map((entity) => {
        entity.direction = entity.direction || 0;
        return entity;
    });
}

const zOrderSort = (a, b) => {
    let [aCoordX, aCoordY] = getGridCoord(a),
        [bCoordX, bCoordY] = getGridCoord(b);

    return aCoordY - bCoordY || aCoordX - bCoordX;
}

const sortBuildings = () => {
    return state.buildings.sort(zOrderSort);
}

const sortRails = () => {
    let curvedRail = [],
        straightRailX = [],
        straightRailY = [],
        straightRailLeft = [],
        straightRailRight = [];

    state.rails.forEach((rail) => {
        if (rail.name === "curved-rail") {
            curvedRail.push(rail);
        } else if (rail.direction === 0) {
            straightRailX.push(rail);
        } else if (rail.direction === 2) {
            straightRailY.push(rail);
        } else if ([1, 5].includes(rail.direction)) {
            straightRailLeft.push(rail);
        } else if ([3, 7].includes(rail.direction)) {
            straightRailRight.push(rail);
        }
    });

    return [
        ...curvedRail,
        ...straightRailX,
        ...straightRailY,
        ...straightRailLeft,
        ...straightRailRight,
    ];
}

const getEntitiesAt = (x, y) => {
    var found = [];

    state.entities.forEach((entity) => {
        let entityPostion = entity.position;

        if (entityPostion.x === x && entityPostion.y === y) {
            found.push(entity);
        }
    });

    return found;
}

const setRailCovers = () => {
    state.rails.forEach((rail) => {
        let { x, y } = rail.position;

        referenceTable[rail.name]["end-points"][rail.direction].forEach(
            (endPointRef) => {
                let [railCoverX, railCoverY] = endPointRef["rail-cover-coord"],
                    railCoverGlobalCoordX = x + railCoverX,
                    railCoverGlobalCoordY = y + railCoverY,
                    railCoverDirection = endPointRef["rail-cover-direction"],
                    isEndOfLine = endPointRef["rail-path-vars"].every(
                        (railPathVar) => {
                            let [railPathVarX, railPathVarY] = railPathVar.coords,
                                nextRails = getEntitiesAt(
                                    x + railPathVarX,
                                    y + railPathVarY
                                );

                            for (let i = 0; i < nextRails.length; i++) {
                                let nextRail = nextRails[i];

                                if (
                                    nextRail.direction === railPathVar["rail-dir"] &&
                                    nextRail.name === railPathVar["rail-type"]
                                ) {
                                    return false;
                                }
                            }

                            return true;
                        }
                    ),
                    alreadyExists = state.railCovers.some((railCover) => {
                        return (
                            railCover.position.x === railCoverGlobalCoordX &&
                            railCover.position.y === railCoverGlobalCoordY &&
                            railCover.direction === railCoverDirection
                        )
                    });

                if (isEndOfLine && !alreadyExists) {
                    state.railCovers.push({
                        position: {
                            x: railCoverGlobalCoordX,
                            y: railCoverGlobalCoordY,
                        },
                        direction: railCoverDirection,
                    });
                }
            }
        );
    });
}

const normalizeCoordinates = () => {
    let entities = state.entities;

    state.entities = entities.map((entity) => {
        let entityPos = entity.position;

        entityPos.x = Math.abs(state.offset.x - entityPos.x);
        entityPos.y = Math.abs(state.offset.y - entityPos.y);

        return entity;
    });
}

const distributeTile = (tile) => {
    let tileName = tile.name,
        tilePos = tile.position,
        tileCoords = [tilePos.x, tilePos.y];

    state["tiles"][tileName].push(tileCoords);

    if(tileName === "concrete") {
        state["tiles"]["hazard-concrete-left"].push(tileCoords);
        state["tiles"]["hazard-concrete-right"].push(tileCoords);
    }

    if(tileName === "refined-concrete") {
        state["tiles"]["refined-hazard-concrete-left"].push(tileCoords);
        state["tiles"]["refined-hazard-concrete-right"].push(tileCoords);
    }
}

const distributeEntities = () => {
    state.entities.forEach((entity) => {
        if (isRail(entity)) {
            state.rails.push(entity);
            sortRails();
        } else if (isTile(entity)) {
            distributeTile(entity);
        } else {
            state.buildings.push(entity);
            sortBuildings();
        }
    });
}

const drawCanvas = (canvas, w, h) => {
    let width = w * GRID_PX;
    let height = h * GRID_PX;

    canvas.width = width;
    canvas.height = height;

    canvas.style.width = width / 2 + "px";
    canvas.style.height = height / 2 + "px";
}

setEntities();
setGridSize();
setOffset();
normalizeCoordinates();
distributeEntities();
setRailCovers();

drawCanvas($mainCanvas, state.gridSize.w, state.gridSize.h);

console.log(state);

console.timeEnd();

// const walkRail = (rail, dir) => {

// }

// const getRailCoverCoords2 = () => {
//     var railsCopy = [...rails];

//     for (var i = railsCopy.length; i >= 0; i--) {
//         var rail = railsCopy[i];

//         walkRail(rail);
//     }
// };



// var tileTypes = {};
// var allXs = [];
// var allYs = [];

// tiles.forEach((tile) => {
//     if(tileTypes[tile.name]) {
//         tileTypes[tile.name]["x"].push(tile.position.x);
//         tileTypes[tile.name]["y"].push(tile.position.y);
//     } else {
//         tileTypes[tile.name] = {"x": [tile.position.x], "y": [tile.position.y]}
//     }

//     allXs.push(tile.position.x);
//     allYs.push(tile.position.y);
// })

// var ctx = canvas.getContext("2d");

// tileTypes["refined-concrete"]["x"].forEach((x, i) => {
//     var y = tileTypes["refined-concrete"]["y"][i];

//     ctx.beginPath();
//     ctx.rect(x*64, y*64, 64, 64);
//     ctx.fill();
// })
