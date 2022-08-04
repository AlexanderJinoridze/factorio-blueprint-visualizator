import { state } from "./globals";
import { zOrderSort, getGridCoord } from "./helpers";

export default function sortBuildings() {
    return state.buildings.sort((a, b) => zOrderSort(getGridCoord(a), getGridCoord(b)))
}