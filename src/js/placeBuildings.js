import reference from "./reference.json";
import { state, loadedImages, NUMBER_OF_DIRS } from "./globals";
import { toPX } from "./helpers";

export default function placeBuildings(ctx) {
    state.buildings.forEach((building, i) => {
        var buildingName = building.name;
        var { x: coordX, y: coordY } = building.position;
        var buildingReference = reference[buildingName];
        var buildingDirection = building.direction;
        var centerOffsetX;
        var centerOffsetY;

        let directionCount = buildingReference["dir-count"];

        if (directionCount) {
            if (directionCount < NUMBER_OF_DIRS) {
                buildingDirection = buildingDirection / 2;
            }
        }

        if (typeof buildingReference["image-size"] === "number") {
            var imageSizeX = buildingReference["image-size"];
            var imageSizeY = buildingReference["image-size"];
        } else {
            var [imageSizeX, imageSizeY] = buildingReference["image-size"];
        }

        if (reference[buildingName]["image-offset"]) {
            [centerOffsetX, centerOffsetY] = reference[buildingName]["image-offset"];
        } else {
            centerOffsetX = centerOffsetY = -reference[buildingName]["image-size"] / 2;
        }

        ctx.drawImage(
            loadedImages[buildingName],
            imageSizeX * buildingDirection,
            0 + (reference?.[buildingName]?.["image-pos"]?.[1] || 0),
            imageSizeX,
            imageSizeY,
            toPX(coordX) + centerOffsetX,
            toPX(coordY) + centerOffsetY,
            imageSizeX,
            imageSizeY
        );
    });
}
