import { isEntity, isTile } from "./helpers";

export default function setStructures(decodedBlueprint) {
    let tiles = decodedBlueprint.blueprint["tiles"] || [],
        entities = decodedBlueprint.blueprint["entities"] || [],
        structures = [...entities, ...tiles];

    return structures.filter((structure) => {
        let structureName = structure.name,
            isEntityOrTile = isEntity(structureName) || isTile(structureName);

        if (isEntityOrTile) {
            structure.direction = structure.direction || 0;
            return true;
        }
    });
}
