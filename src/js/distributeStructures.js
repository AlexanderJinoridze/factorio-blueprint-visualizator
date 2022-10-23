import { state } from "./globals";
import { zOrderSort, isHazardConcrete, isRefinedHazardConcrete, isRail, isTile, isBelt, isBeltEntity } from "./helpers";

function distributeTile(tile) {
    let tileName = tile.name,
        { x: tilePositionX, y: tilePositionY } = tile.position,
        tileCoordinates = [tilePositionX, tilePositionY];

    state["tiles"][tileName].push(tileCoordinates);

    if (isHazardConcrete(tileName)) {
        state["tiles"]["concrete"].push(tileCoordinates);
    } else if (isRefinedHazardConcrete(tileName)) {
        state["tiles"]["refined-concrete"].push(tileCoordinates);
    }
}

function sortRails() {
    let curvedRail = [],
        straightRailX = [],
        straightRailY = [],
        straightRailLeft = [],
        straightRailRight = [],
        i = 0,
        rails = state.rails,
        len = rails.length;

    while (i < len) {
        let rail = rails[i];

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

        i++;
    }

    return [].concat(curvedRail, straightRailX, straightRailY, straightRailLeft, straightRailRight);
}

function sortBuildings() {
    return state.buildings.sort((a, b) => zOrderSort(a.zOrderReferencePoint, b.zOrderReferencePoint));
}

export default function distributeStructures() {
    let i = 0,
        structures = state.structures,
        len = structures.length;
    while (i < len) {
        let structure = structures[i],
            structureName = structure.name;

        if (isRail(structureName)) {
            state.rails.push(structure);
        } else if (isTile(structureName)) {
            distributeTile(structure);
        } else if (isBelt(structureName)) {
            state.belts.push(structure);
        } else {
            if (isBeltEntity(structureName)) {
                state.belts.push(structure);
            }
            state.buildings.push(structure);
        }

        i++;
    }

    sortBuildings();
    sortRails();
}
