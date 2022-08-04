import reference from "./reference.json";
import { state } from "./globals";
import { getStructuresAt } from "./helpers";

export default function setRailCovers() {
    state.rails.forEach(rail => {
        let {
            x,
            y
        } = rail.position;

        reference[rail.name]["dir-versions"][rail.direction][
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
                            nextRails = getStructuresAt(
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
}