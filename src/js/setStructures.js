import { state } from "./globals";
import { filterStructures } from "./helpers";

export default function setEntities() {
    let tiles = state.decodedBlueprint.blueprint["tiles"] || [],
        entities = state.decodedBlueprint.blueprint["entities"] || [],
        structures = [...entities, ...tiles],
        filteredStructues = filterStructures(structures);

    state.structures = filteredStructues.map(structure => {
        structure.direction = structure.direction || 0;
        return structure;
    });
}