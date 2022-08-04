import { state } from "./globals";
import { isHazardConcrete, isRefinedHazardConcrete, isRail, isTile, isBelt, isBeltEntity } from "./helpers";

function distributeTile(tile) {
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
}

export default function distributeStructures() {
    state.structures.forEach(structure => {
        let structureName = structure.name;

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
    });
}