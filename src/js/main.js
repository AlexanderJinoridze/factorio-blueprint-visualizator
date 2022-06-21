import { state, NUMBER_OF_DIRS } from "./globals";
import referenceTable from "./referenceTable";

console.time();

const isRail = entityName =>
    ["straight-rail", "curved-rail"].includes(entityName);

const isInserter = entityName => entityName.includes("inserter");

const isBelt = entityName =>
    [
        "transport-belt",
        "fast-transport-belt",
        "express-transport-belt",
    ].includes(entityName);

const isBeltEntity = entityName =>
    [
        "underground-belt",
        "fast-underground-belt",
        "express-underground-belt",
        "splitter",
        "fast-splitter",
        "express-splitter",
    ].includes(entityName);

const isTile = entityName =>
    [
        "stone-path",
        "concrete",
        "hazard-concrete-left",
        "hazard-concrete-right",
        "refined-concrete",
        "refined-hazard-concrete-left",
        "refined-hazard-concrete-right",
    ].includes(entityName);

const isHazardConcrete = entityName =>
    ["hazard-concrete-left", "hazard-concrete-right"].includes(entityName);

const isRefinedHazardConcrete = entityName =>
    ["refined-hazard-concrete-left", "refined-hazard-concrete-right"].includes(
        entityName
    );

const getGridCoord = entity => {
    let gridSize = getGridSize(entity),
        entityPos = entity.position,
        [halfOfGridW, halfOfGridH] = [gridSize.w / 2, gridSize.h / 2];

    return [
        entityPos.x - halfOfGridW,
        entityPos.y - halfOfGridH,
        entityPos.x + halfOfGridW,
        entityPos.y + halfOfGridH,
    ];
};

const getGridSize = entity => {
    let entityName = entity.name,
        entityRef = referenceTable[entityName],
        gridSize = entityRef["grid-size"] || 1,
        result;

    if (Array.isArray(gridSize)) {
        let gridArray = [...gridSize];

        if ([2, 3, 6, 7].includes(entity.direction)) {
            gridArray.reverse();
        }

        result = { w: gridArray[0], h: gridArray[1] };
    } else {
        result = { w: gridSize, h: gridSize };
    }

    return result;
};

const setGridSize = () => {
    let dimensions = state.dimensions,
        entities = state.entities;

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
};

const setOffset = () => {
    let offset = state.offset,
        dimensions = state.dimensions;

    offset.x = dimensions["minX"];
    offset.y = dimensions["minY"];
};

const setEntities = () => {
    let tiles = state.decodedBlueprint["tiles"] || [],
        entities = state.decodedBlueprint["entities"] || [],
        entitiesAndTiles = [...entities, ...tiles];

    state.entities = entitiesAndTiles
        .filter(entity => {
            return referenceTable[entity.name];
        })
        .map(entity => {
            entity.direction = entity.direction || 0;
            return entity;
        });
};

const zOrderSort = (a, b) => {
    let [aCoordX, aCoordY] = getGridCoord(a),
        [bCoordX, bCoordY] = getGridCoord(b);

    return aCoordY - bCoordY || aCoordX - bCoordX;
};

const sortBuildings = () => state.buildings.sort(zOrderSort);

const sortRails = () => {
    let curvedRail = [],
        straightRailX = [],
        straightRailY = [],
        straightRailLeft = [],
        straightRailRight = [];

    state.rails.forEach(rail => {
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
};

const getEntitiesAt = (x, y) => {
    var found = [];

    state.entities.forEach(entity => {
        let entityPostion = entity.position;

        if (entityPostion.x === x && entityPostion.y === y) {
            found.push(entity);
        }
    });

    return found;
};

const setRailCovers = () => {
    state.rails.forEach(rail => {
        let { x, y } = rail.position;

        referenceTable[rail.name]["dir-versions"][rail.direction][
            "end-points"
        ].forEach(endPointRef => {
            let [railCoverX, railCoverY] =
                    endPointRef["rail-cover-coord-offset"],
                railCoverGlobalCoordX = x + railCoverX,
                railCoverGlobalCoordY = y + railCoverY,
                railCoverDirection = endPointRef["rail-cover-dir"],
                isEndOfLine = endPointRef["rail-path-vars"].every(
                    railPathVar => {
                        let [railPathVarX, railPathVarY] =
                                railPathVar["rail-coord-offset"],
                            nextRails = getEntitiesAt(
                                x + railPathVarX,
                                y + railPathVarY
                            );

                        for (let i = 0; i < nextRails.length; i++) {
                            let nextRail = nextRails[i];

                            if (
                                nextRail.direction ===
                                    railPathVar["rail-dir"] &&
                                nextRail.name === railPathVar["rail-type"]
                            ) {
                                return false;
                            }
                        }

                        return true;
                    }
                ),
                alreadyExists = state.railCovers.some(railCover => {
                    return (
                        railCover.position.x === railCoverGlobalCoordX &&
                        railCover.position.y === railCoverGlobalCoordY &&
                        railCover.direction === railCoverDirection
                    );
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
        });
    });
};

const normalizeCoordinates = () => {
    let entities = state.entities;

    state.entities = entities.map(entity => {
        let entityPos = entity.position;

        entityPos.x =
            Math.abs(state.offset.x - entityPos.x) + state.canvasOffset.x;
        entityPos.y =
            Math.abs(state.offset.y - entityPos.y) + state.canvasOffset.y;

        return entity;
    });
};

const distributeTile = tile => {
    let tileName = tile.name,
        tilePos = tile.position,
        tileCoords = [tilePos.x, tilePos.y];

    state["tiles"][tileName].push(tileCoords);

    if (isHazardConcrete(tileName)) {
        state["tiles"]["concrete"].push(tileCoords);
    }

    if (isRefinedHazardConcrete(tileName)) {
        state["tiles"]["refined-concrete"].push(tileCoords);
    }
};

const distributeEntities = () => {
    state.entities.forEach(entity => {
        let entityName = entity.name;

        if (isRail(entityName)) {
            state.rails.push(entity);
        } else if (isTile(entityName)) {
            distributeTile(entity);
        } else if (isBelt(entityName)) {
            state.belts.push(entity);
        } else {
            if (isBeltEntity(entityName)) {
                state.belts.push(entity);
            }
            state.buildings.push(entity);
        }
    });
};










const getDirectonVersion = entity => {
    let entityName = entity.name,
        entityReference = referenceTable[entityName],
        directionCount = entityReference["dir-count"],
        entityDirection = entity.direction;

    if(directionCount) {
        if(directionCount < NUMBER_OF_DIRS) {
            entityDirection = entityDirection / 2;
        }

        return entityReference["dir-versions"][entityDirection];
    }
}








const notLoaded = (array,entityName) => {
    // console.log(!Object.keys(state.loadedImages).includes(entityName));
    return !array.includes(entityName);
}

const hasShadow = entity => {
    let entityName = entity.name,
        entityReference = referenceTable[entityName],
        hasDirectionVersions = entityReference["dir-versions"] !== undefined;

    if (hasDirectionVersions) {
        let directionVersion = getDirectonVersion(entity);
            // entityReference["dir-versions"][entity.direction];
        return directionVersion["shadow-image-pos"] !== undefined;
    } else {
        return entityReference["shadow-image-pos"] !== undefined;
    }
};

const hasDisplay = entity => {
    let entityName = entity.name,
        entityReference = referenceTable[entityName],
        hasDirectionVersions = entityReference["dir-versions"] !== undefined;

    if (hasDirectionVersions) {
        let directionVersion = getDirectonVersion(entity);
            // entityReference["dir-versions"][entity.direction];
        return directionVersion["combinator-display-offset"] !== undefined;
    } else {
        return entityReference["combinator-display-offset"] !== undefined;
    }
};

const hasCircuitConnector = entity => {
    let entityName = entity.name,
        entityReference = referenceTable[entityName],
        hasDirectionVersions = entityReference["dir-versions"] !== undefined,
        hasConnector = entity["connections"] !== undefined,
        isConnectorEntity;

    if (hasDirectionVersions) {
        let directionVersion = getDirectonVersion(entity);
            // entityReference["dir-versions"][entity.direction];
        isConnectorEntity =
            directionVersion["circuit-connector-pos"] !== undefined;
    } else {
        isConnectorEntity =
            entityReference["circuit-connector-pos"] !== undefined;
    }

    if (isConnectorEntity && hasConnector) {
        return true;
    } else {
        return false;
    }
};

const currentEntityStack = () => {
    let entityStack = [];

    state.entities.forEach(entity => {
        let entityName = entity.name;

        if (notLoaded(entityStack,entityName)) entityStack.push(entityName);

        if (hasShadow(entity)) {
            if (notLoaded(entityStack,"shadows")) { entityStack.push("shadows") };
        }

        if (hasDisplay(entity)) {
            if (notLoaded(entityStack,"combinator-operators"))
                entityStack.push("combinator-operators");
        }

        if (isBelt(entityName) && hasCircuitConnector(entity)) {
            if (notLoaded(entityStack,"transport-belt-circuit-connector"))
                entityStack.push("transport-belt-circuit-connector");
        } else if (isInserter(entityName) && hasCircuitConnector(entity)) {
            if (notLoaded(entityStack,"inserter-circuit-connector"))
                entityStack.push("inserter-circuit-connector");
        } else if (hasCircuitConnector(entity)) {
            if (notLoaded(entityStack,"circuit-connector"))
                entityStack.push("circuit-connector");
        }

        if (isTile(entityName)) {
            if (notLoaded(entityStack,"curb")) entityStack.push("curb");
            if (notLoaded(entityStack,"tile-mask")) entityStack.push("tile-mask");
        }
    });

    return entityStack;
};

















setEntities();
setGridSize();
setOffset();
normalizeCoordinates();
distributeEntities();

sortBuildings();
sortRails();
setRailCovers();

console.log(state, "FINALE");
console.log("entityStack", currentEntityStack().sort());

console.timeEnd();
