import { state } from "./globals"

export default function sortRails() {
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
}