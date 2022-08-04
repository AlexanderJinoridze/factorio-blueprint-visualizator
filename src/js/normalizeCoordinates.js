import reference from "./reference.json";
import { state } from "./globals";

export default function normalizeCoordinates() {
    let structures = state.structures;

    state.structures = structures.map(structure => {
        let structurePosition = structure.position;

        structurePosition.x = Math.abs(state.offset.x - structurePosition.x) + reference["canvas-padding"]["left"];
        structurePosition.y = Math.abs(state.offset.y - structurePosition.y) + reference["canvas-padding"]["top"];

        return structure;
    })
}