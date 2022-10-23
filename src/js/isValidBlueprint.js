import { isEntity, isTile, isObject, isArray, isNumber, isString } from "./helpers";

function filterEntities(entities) {
    return entities.filter((entity) => {
        return isEntity(entity.name);
    });
}

function filterTiles(tiles) {
    return tiles.filter((tile) => {
        return isTile(tile.name);
    });
}

function isValidPositon(position) {
    let valid = false;

    if (isObject(position) && isNumber(position["x"]) && isNumber(position["y"])) {
        valid = true;
    }

    return valid;
}

function isValidStructure(structure) {
    let valid = false;

    if (isObject(structure) && isString(structure["name"]) && isValidPositon(structure["position"])) {
        valid = true;
    }

    return valid;
}

export default function isValidBlueprint(blueprintObject) {
    let valid = false;

    if (isObject(blueprintObject)) {
        let blueprint = blueprintObject["blueprint"];

        if (isObject(blueprint)) {
            if (isArray(blueprint["entities"]) || isArray(blueprint["tiles"])) {
                let entities = blueprint["entities"] || [],
                    tiles = blueprint["tiles"] || [],
                    structures = [...entities, ...tiles];

                valid = structures.every((structure) => isValidStructure(structure));

                if (valid) {
                    let filteredEntities = filterEntities(entities),
                        filteredTiles = filterTiles(tiles);

                    valid = !!(filteredEntities.length || filteredTiles.length);
                }
            }
        }
    }

    return valid;
}
